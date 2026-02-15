/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DentallyPortal } from '@/lib/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { promotionSignupSchema, type PromotionFormData } from '../../../types/PromotionForm';
import BarLoader from '../BarLoader/BarLoader';
import PrivacyPolicyModal from '../PrivacyModal/PrivacyModal';

const defaultValues: PromotionFormData = {
  fullname: '',
  email: '',
  phone: '',
  optOutEmails: false,
};

interface ServiceFormProps {
  serviceName: string;
  serviceChip: string;
  serviceDescription: string;
  formTitle: string;
  formDescription: string;
  imgSrc?: string;
  videoSrc?: string;
  videoThumbnailSrc?: string;
  eventType?: string;
  formId?: string;
}

export default function ServiceForm({
  serviceChip,
  serviceName,
  serviceDescription,
  formTitle,
  formDescription,
  imgSrc,
  videoSrc,
  videoThumbnailSrc,
  eventType = 'PatientLead',
  formId = '',
}: ServiceFormProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<PromotionFormData>({
    resolver: zodResolver(promotionSignupSchema),
    defaultValues,
  });

  const values = getValues();

  async function onSubmit(data: PromotionFormData) {
    try {
      const decodedSource = decodeURIComponent(pathname);
      const cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;
      const dataWithSource = { ...data, source: cleanedSource };

      // Backend request
      const backendRes = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataWithSource),
      });

      const responseData = await backendRes.json();

      if (!backendRes.ok) {
        const errorMessage =
          responseData.message || 'There was a problem with your submission. Please try again later.';
        setError(errorMessage);
        throw new Error(errorMessage);
      }

      // Dengro request (fire-and-forget)
      try {
        await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/dengro`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataWithSource),
        });
      } catch (dengroError) {
        console.warn('Dengro capture failed:', dengroError);
      }

      console.log('Form submitted successfully');

      window.dataLayer = window.dataLayer ?? [];

      // Determine event name using template literal
      const updatedEventType = `${responseData.alreadyExists === true ? 'Existing' : 'New'}${eventType}`;

      // Push event to dataLayer including source
      window.dataLayer.push({
        event: updatedEventType,
      });

      // Trigger Google Ads conversion only for new patients
      if (!responseData.alreadyExists && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      // Trigger Facebook Pixel event
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', updatedEventType);
      }

      setShowSuccessModal(true);
    } catch (error) {
      setShowErrorModal(true);
      console.error('Form submission error:', error instanceof Error ? error.message : error);
    }
  }

  function handleSuccessModalClose() {
    setShowSuccessModal(false);
    reset();
  }

  function handlePrivacyModalClose() {
    setShowPrivacyModal(false);
    clearErrors();
  }

  function handlePrivacyModalOpen() {
    setShowPrivacyModal(true);
  }

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;

      if (hash === '#form') {
        const formElement = document.querySelector(hash);

        if (formElement) {
          const formPosition = formElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: formPosition,
            behavior: 'smooth',
          });
        }
      }
    }
  }, []); // Runs only on the first load

  return (
    <>
      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={handlePrivacyModalClose} />
      <section
        id='form'
        ref={ref}
        className='w-full pt-28 bg-gradient-to-b from-white to-cream min-h-screen flex items-center justify-center'
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='container max-w-[1250px] mx-auto px-4 md:px-8 lg:grid lg:grid-cols-2 gap-8'>
            <div className='text-center lg:text-left space-y-6'>
              <div className='bg-grey px-4 py-2 text-md text-gray-50 rounded-lg inline-block'>{serviceChip}</div>
              <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-[32rem] mx-auto'>
                Start Your {serviceName}
              </h2>
              <p className='text-muted-foreground md:text-2xl max-w-[32rem] mx-auto pb-4'>{serviceDescription}</p>
              {imgSrc && (
                <Image
                  priority
                  width={1200}
                  height={1200}
                  quality={75}
                  placeholder='blur'
                  src={imgSrc}
                  blurDataURL={imgSrc}
                  alt={`${serviceName} - Supernova Dental Bridgwater Somerset`}
                  className='w-full max-w-md mx-auto mt-8 hidden lg:block'
                />
              )}
              {/* Video for large screens - shown ABOVE the form */}
              {videoSrc && (
                <div className='hidden lg:block mb-8'>
                  <div className='w-full max-w-56 aspect-[9/17] relative mx-auto'>
                    <video
                      className='absolute top-0 left-0 w-full h-full rounded-lg'
                      controls
                      preload='metadata'
                      poster={videoThumbnailSrc}
                    >
                      <source src={videoSrc} type='video/mp4' />
                      Sorry, your browser doesn&apos;t support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
            <Card className='max-h-[52rem] m-auto w-full max-w-lg bg-gray-50 shadow-2xl p-2 md:p-4 flex items-center justify-center'>
              <form id={formId} onSubmit={handleSubmit(onSubmit)}>
                <CardHeader className='text-center mb-4'>
                  <CardTitle className='text-xl md:text-2xl'>{formTitle}</CardTitle>
                  <CardDescription className='text-md md:text-lg text-gray-500'>{formDescription}</CardDescription>
                </CardHeader>
                <CardContent className='p-2 md:p-4 md:pt-0'>
                  <div className='grid gap-1'>
                    <Label htmlFor='fullname' className='text-md text-gray-800'>
                      Full Name
                    </Label>
                    <Input
                      id='fullname'
                      placeholder='John Smith'
                      className='py-1 text-lg px-3'
                      {...register('fullname')}
                    />
                    <div className='h-5'>
                      {errors.fullname && !showPrivacyModal && (
                        <p className='text-red-500 leading-none text-sm'>{errors.fullname?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='email' className='text-md text-gray-800'>
                      Email Address
                    </Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='john@example.com'
                      className='py-1 text-lg px-3'
                      {...register('email')}
                    />
                    <div className='h-5'>
                      {errors.email && !showPrivacyModal && (
                        <p className='text-red-500 leading-none text-sm'>{errors.email?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='phone' className='text-md text-gray-800'>
                      Contact Number
                    </Label>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='(+44) 1234567890'
                      className='py-1 text-lg px-3'
                      {...register('phone')}
                    />
                    <div className='h-5'>
                      {errors.phone && !showPrivacyModal && (
                        <p className='text-red-500 leading-none text-sm'>{errors.phone?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className='grid gap-1 mb-4'>
                    <div className='flex items-center mt-2'>
                      <Checkbox
                        id='optOutEmails'
                        {...register('optOutEmails')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('optOutEmails', checked)}
                      />
                      <Label htmlFor='optOutEmails' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        I don’t want to receive emails about Supernova Dental and related Supernova Dental updates and
                        promotions. By not checking the box, I agree to be opted in by default.
                      </Label>
                    </div>
                    {errors.optOutEmails && (
                      <p className='text-red-500 leading-none text-sm'>{errors.optOutEmails?.message}</p>
                    )}
                  </div>
                  <p>By signing up, you ackowledge and agree to our</p>
                  <Button
                    type='button'
                    variant='link'
                    className='px-0 text-md text-blue-500 underline hover:text-blue-400 transition mb-4 sm:mb-0'
                    onClick={handlePrivacyModalOpen}
                  >
                    Privacy Policy
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button type='submit' className='w-full bg-gold hover:bg-lightGold text-lg py-3'>
                    {isSubmitting ? <BarLoader /> : 'Sign Up'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
            {imgSrc && (
              <Image
                priority
                width={1200}
                height={1200}
                quality={75}
                placeholder='blur'
                src={imgSrc}
                blurDataURL={imgSrc}
                alt={`${serviceName} - Supernova Dental Bridgwater Somerset`}
                className='w-full max-w-md mx-auto my-8 block lg:hidden'
              />
            )}
            {/* Video for small/medium screens - shown BELOW the form */}
            {videoSrc && (
              <div className='block lg:hidden mt-8'>
                <div className='w-full max-w-56 aspect-[9/17] relative mx-auto'>
                  <video
                    className='absolute top-0 left-0 w-full h-full rounded-lg'
                    controls
                    preload='metadata'
                    poster={videoThumbnailSrc}
                  >
                    <source src={videoSrc} type='video/mp4' />
                    Sorry, your browser doesn&apos;t support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full relative'>
            <button
              onClick={handleSuccessModalClose}
              className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900'
            >
              <FaTimes />
            </button>

            <h2 className='text-3xl font-semibold mb-6'>Thank you, {values.fullname}, for signing up!</h2>
            <div className='mb-6 flex flex-col gap-2'>
              <p>You&apos;ve been successfully signed up. We&apos;ll send details to {values.email}.</p>
              <p>Please check your spam folder if you don&apos;t see it in your inbox.</p>
            </div>
            {/* New text and button */}
            <p className='mb-2'>Prefer to book yourself in? Use our patient portal by pressing the button below:</p>
            <div className='w-full flex justify-center mb-4'>
              <Link target='_blank' href={`${DentallyPortal}`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Book Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-3xl font-semibold mb-6'>Submission Failed</h2>
            <p className='mb-6'>{error}</p>
            <Button onClick={() => setShowErrorModal(false)} className='w-full text-xl py-3'>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
