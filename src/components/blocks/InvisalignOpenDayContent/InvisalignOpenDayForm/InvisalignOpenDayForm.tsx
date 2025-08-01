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
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { promotionSignupSchema, type PromotionFormData } from '../../../../../types/PromotionForm';
import BarLoader from '../../../BarLoader/BarLoader';
import PrivacyPolicyModal from '../../../PrivacyModal/PrivacyModal';

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
}

export default function InvisalignOpenDayForm({
  serviceChip,
  serviceName,
  serviceDescription,
  formTitle,
  formDescription,
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
      const decodedSource = decodeURIComponent(pathname); // Decode URL encoding

      // If you need to remove the leading slash, you can do that
      const cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;

      const dataWithSource = { ...data, source: cleanedSource };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataWithSource),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'There was a problem with your submission. Please try again later.');
        throw new Error(errorData.message);
      }

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: 'InvisalignFlashSaleLead' });

      // Trigger Google Ads conversion tracking
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      // Trigger Facebook Pixel Lead event with lead_type param
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'InvisalignFlashSaleLead');
      }

      setShowSuccessModal(true);
    } catch (error) {
      setShowErrorModal(true);
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
      <section id='form' ref={ref} className='w-full py-12 min-h-screen flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='container max-w-[1250px] mx-auto px-4 md:px-8 lg:grid lg:grid-cols-2 gap-8'>
            <div className='text-center lg:text-left space-y-6'>
              <div className='bg-grey px-4 py-2 text-md text-gray-50 rounded-lg inline-block'>{serviceChip}</div>
              <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                Begin Your {serviceName} Journey
              </h2>
              <p className='text-muted-foreground md:text-2xl'>{serviceDescription}</p>
              {/* <div className='hidden lg:flex items-center justify-center mx-auto gap-4 pt-4 pb-8'>
                <img src='/assets/images/invisalign_open_Day_poster.jpg' alt='Invisalign Logo' className=' w-96' />
              </div> */}
            </div>
            <Card className=' max-h-[50rem] md:max-h-[40rem] mt-6 mx-auto lg:m-auto w-full max-w-lg bg-gray-50 shadow-2xl p-2 md:p-6 flex items-center justify-center'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader className='text-center mb-4'>
                  <CardTitle className='text-xl md:text-2xl'>{formTitle}</CardTitle>
                  <CardDescription className='text-md md:text-lg text-gray-500'>{formDescription}</CardDescription>
                </CardHeader>
                <CardContent className='p-2 md:p-4 md:pt-0'>
                  <div className='grid gap-1'>
                    <Label htmlFor='fullname'>Full Name</Label>
                    <Input
                      id='fullname'
                      placeholder='John Smith'
                      className='py-1 text-lg px-3'
                      {...register('fullname')}
                    />
                    <div className='h-5'>
                      {errors.fullname && <p className='text-red-500 text-sm'>{errors.fullname?.message}</p>}
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='john@example.com'
                      className='py-1 text-lg px-3'
                      {...register('email')}
                    />
                    <div className='h-5'>
                      {errors.email && <p className='text-red-500 text-sm'>{errors.email?.message}</p>}
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='phone'>Contact Number</Label>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='(+44) 1234567890'
                      className='py-1 text-lg px-3'
                      {...register('phone')}
                    />
                    <div className='h-5'>
                      {errors.phone && <p className='text-red-500 text-sm'>{errors.phone?.message}</p>}
                    </div>
                  </div>
                  <div className='grid gap-1 mb-4'>
                    <div className='flex items-center mt-2'>
                      <Checkbox
                        id='optOutEmails'
                        {...register('optOutEmails')}
                        onCheckedChange={(checked: boolean) => setValue('optOutEmails', checked)}
                      />
                      <Label htmlFor='optOutEmails' className='ml-3 text-sm text-muted-foreground'>
                        I don’t want to receive emails.
                      </Label>
                    </div>
                    {errors.optOutEmails && <p className='text-red-500 text-sm'>{errors.optOutEmails?.message}</p>}
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

            <div className='flex flex-col lg:hidden py-2 lg:py-12 mt-4'>
              {/* <img
                src='/assets/images/invisalign_open_Day_poster.jpg'
                alt='Invisalign Logo'
                className=' w-96 mx-auto pb-4'
              /> */}
              <img
                src='/assets/images/supernova_dental_cover.png'
                alt='Invisalign Logo'
                className='h-auto mx-auto mb-2'
              />
              <img src='/assets/images/Invisalign_Logo.png' alt='Invisalign Logo' className='w-56 h-auto mx-auto' />
              <div />
            </div>
          </div>
          <div className='hidden lg:flex items-center justify-center mx-auto gap-4 pt-12'>
            <img src='/assets/images/supernova_dental_cover.png' alt='Invisalign Logo' className='' />
            <img src='/assets/images/Invisalign_Logo.png' alt='Invisalign Logo' className='w-56' />
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
            <h2 className='text-3xl font-semibold mb-6'>Thank you, {values.fullname}, for your enquiry!</h2>
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
