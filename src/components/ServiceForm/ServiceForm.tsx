/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DentallyPortal } from '@/lib/constants';
import { getTracking } from '@/lib/tracking';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { promotionSignupSchema, type PromotionFormData } from '../../../types/PromotionForm';
import BarLoader from '../BarLoader/BarLoader';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import { SOCIAL_CTAS } from '../CornerNav/CornerNav';
import PrivacyPolicyModal from '../PrivacyModal/PrivacyModal';
import RedirectProgressBar from '../RedirectProgressBar/RedirectProgressBar';

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
  headingLevel?: 'h1' | 'h2';
  showBreadcrumb?: boolean;
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
  headingLevel = 'h1',
  showBreadcrumb = true,
}: ServiceFormProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRedirectBar, setShowRedirectBar] = useState(false);
  const redirectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const redirectedRef = useRef(false);
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
      const tracking = getTracking();

      const dataWithTracking = {
        ...data,
        source: cleanedSource,
        tracking: {
          ...tracking,
          conversionPage: {
            pageUrl: window.location.href,
            pagePath: window.location.pathname,
            visitDate: new Date().toISOString(),
          },
        },
      };

      // Backend request
      const backendRes = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataWithTracking),
      });

      const responseData = await backendRes.json();

      if (!backendRes.ok) {
        const errorMessage =
          responseData.message || 'There was a problem with your submission. Please try again later.';
        setError(errorMessage);
        throw new Error(errorMessage);
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
        window.gtag(updatedEventType, 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      // Trigger Facebook Pixel event
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', updatedEventType);
      }

      setShowSuccessModal(true);

      setShowRedirectBar(true);

      // 5 second delay before redirecting to patient portal =>

      redirectTimeoutRef.current = setTimeout(handleRedirect, 5000);
    } catch (error) {
      setShowErrorModal(true);
      console.error('Form submission error:', error instanceof Error ? error.message : error);
    }
  }

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  function goToPortal() {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    window.location.href = `${DentallyPortal}/book`;
  }

  function handleRedirect() {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'redirect_to_patient_portal', {
        send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        event_callback: goToPortal,
      });

      setTimeout(goToPortal, 500);
    } else {
      goToPortal();
    }
  }

  function handleSuccessModalClose() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }
    setShowSuccessModal(false);
    setShowRedirectBar(false);
    reset();
  }

  function handleWaitForCallClick() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }
    // Trigger Google Ads event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'wait_for_call', {
        send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
      });
    }

    setShowSuccessModal(false);
    setShowRedirectBar(false);
    reset();
  }

  function handlePatientPortalClick() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }

    window.gtag('event', 'click_to_patient_portal_in_modal', {
      send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
      event_callback: goToPortal,
    });

    setTimeout(goToPortal, 500);

    setShowSuccessModal(false);
    setShowRedirectBar(false);
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
        className='service-form-hero relative isolate flex min-h-[calc(100vh-96px)] w-full items-center justify-center overflow-hidden bg-obsidian px-4 py-8 text-ivory sm:px-6 lg:py-14'
      >
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <motion.div
          className='w-full max-w-7xl'
          initial={false}
          animate={inView ? { opacity: 1 } : { opacity: 1 }}
        >
          {showBreadcrumb && <BreadCrumb tone='dark' />}
          <div className='container mx-auto grid max-w-[1250px] items-center gap-10 pt-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,0.78fr)] lg:gap-14 lg:pt-10'>
            <div className='space-y-6 text-center lg:text-left'>
              <div className='inline-block border-b border-champagne/60 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-champagne sm:text-sm'>
                {serviceChip}
              </div>
              {headingLevel === 'h1' ? (
                <h1 className='mx-auto max-w-[35rem] text-balance text-4xl leading-[1.04] sm:text-5xl md:text-6xl lg:mx-0'>
                  Start Your {serviceName}
                </h1>
              ) : (
                <h2 className='mx-auto max-w-[35rem] text-balance text-4xl leading-[1.04] sm:text-5xl md:text-6xl lg:mx-0'>
                  Start Your {serviceName}
                </h2>
              )}
              <p className='mx-auto max-w-[34rem] pb-4 text-pretty text-lg leading-8 text-ivory/75 md:text-xl lg:mx-0'>
                {serviceDescription}
              </p>
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
                  className='mx-auto mt-8 hidden w-full max-w-md rounded-[1.5rem] border border-white/10 object-cover shadow-2xl lg:mx-0 lg:block'
                />
              )}
              {/* Video for large screens - shown ABOVE the form */}
              {videoSrc && (
                <div className='hidden lg:block mb-8'>
                  <div className='w-full max-w-56 aspect-[9/17] relative mx-auto'>
                    <video
                      className='absolute left-0 top-0 h-full w-full rounded-[1.25rem] border border-white/10 object-cover'
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
            <Card className='service-form-card m-auto flex max-h-[52rem] w-full max-w-lg items-center justify-center rounded-[1.5rem] border border-champagne/25 bg-porcelain p-2 text-obsidian shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-4'>
              <form id={formId} onSubmit={handleSubmit(onSubmit)}>
                <CardHeader className='text-center mb-2'>
                  <CardTitle className='text-2xl md:text-3xl'>{formTitle}</CardTitle>
                  <CardDescription className='text-md text-taupe md:text-lg'>{formDescription}</CardDescription>
                </CardHeader>
                <CardContent className='p-2 md:p-4 md:pt-0'>
                  <div className='grid gap-1'>
                    <Label htmlFor='fullname' className='text-md text-obsidian'>
                      Full Name
                    </Label>
                    <Input
                      id='fullname'
                      placeholder='John Smith'
                      className='min-h-11 border-stone bg-white px-3 py-1 text-lg focus-visible:ring-champagne'
                      {...register('fullname')}
                    />
                    <div className='h-5'>
                      {errors.fullname && !showPrivacyModal && (
                        <p className='text-red-500 leading-none text-sm'>{errors.fullname?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='email' className='text-md text-obsidian'>
                      Email Address
                    </Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='john@example.com'
                      className='min-h-11 border-stone bg-white px-3 py-1 text-lg focus-visible:ring-champagne'
                      {...register('email')}
                    />
                    <div className='h-5'>
                      {errors.email && !showPrivacyModal && (
                        <p className='text-red-500 leading-none text-sm'>{errors.email?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='phone' className='text-md text-obsidian'>
                      Contact Number
                    </Label>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='(+44) 1234567890'
                      className='min-h-11 border-stone bg-white px-3 py-1 text-lg focus-visible:ring-champagne'
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
                      <Label htmlFor='optOutEmails' className='ml-3 text-sm text-taupe'>
                        Check to opt out of Supernova Dental email updates and promotions.
                      </Label>
                    </div>
                    {errors.optOutEmails && (
                      <p className='text-red-500 leading-none text-sm'>{errors.optOutEmails?.message}</p>
                    )}
                  </div>
                  <span className='flex items-center gap-1'>
                    <span className='text-sm'>By signing up, you agree to our</span>
                    <Button
                      type='button'
                      variant='link'
                      className='px-0 text-md text-bronze-ink underline transition hover:text-bronze focus-visible:ring-champagne'
                      onClick={handlePrivacyModalOpen}
                    >
                      Privacy Policy
                    </Button>
                  </span>
                </CardContent>
                <CardFooter>
                  <Button
                    type='submit'
                    className='min-h-11 w-full bg-champagne py-3 text-lg text-obsidian hover:bg-lightGold focus-visible:ring-champagne'
                  >
                    {isSubmitting ? <BarLoader /> : 'Register'}
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
                className='mx-auto my-8 block w-full max-w-md rounded-[1.5rem] border border-white/10 object-cover shadow-2xl lg:hidden'
              />
            )}
            {/* Video for small/medium screens - shown BELOW the form */}
            {videoSrc && (
              <div className='block lg:hidden mt-8'>
                <div className='w-full max-w-56 aspect-[9/17] relative mx-auto'>
                  <video
                    className='absolute left-0 top-0 h-full w-full rounded-[1.25rem] border border-white/10 object-cover'
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full relative max-h-[90vh]'>
              <button
                onClick={handleSuccessModalClose}
                aria-label='Close success message'
                className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900'
              >
                <FaTimes />
              </button>

              <img
                src='/favicon.ico'
                alt='Supernova Dental Logo - Bridgwater Dentist'
                className='w-20 h-auto mx-auto mb-2'
              />

              <h2 className='text-3xl font-semibold mb-6'>Thank you, {values.fullname}, for signing up!</h2>
              <div className='mb-6 flex flex-col gap-2'>
                <p>You&apos;ve been successfully signed up.</p>

                {showRedirectBar && (
                  <>
                    <p>Preparing your secure booking area…</p>
                    <RedirectProgressBar />
                  </>
                )}
              </div>
              <div className='w-full flex justify-center mb-8 space-x-6'>
                <button
                  onClick={handlePatientPortalClick}
                  className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'
                >
                  Book Now!
                </button>
                <button
                  onClick={handleWaitForCallClick}
                  className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'
                >
                  Wait For A Call
                </button>
              </div>

              <div className='flex gap-4 justify-center mt-6'>
                {SOCIAL_CTAS.map((l, idx) => (
                  <motion.a
                    key={idx}
                    href={l.href}
                    onClick={() => {
                      if (redirectTimeoutRef.current) {
                        clearTimeout(redirectTimeoutRef.current);

                        setShowRedirectBar(false);
                      }
                    }}
                    target='_blank'
                    initial={{ opacity: 0, y: -8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.5 + idx * 0.125,
                        duration: 0.3,
                        ease: 'easeInOut',
                      },
                    }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <l.Component className='text-3xl text-grey transition-colors' />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 relative rounded-lg shadow-lg max-w-md w-full'>
            <button
              onClick={() => setShowErrorModal(false)}
              aria-label='Close error message'
              className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900'
            >
              <FaTimes />
            </button>
            <h2 className='text-3xl font-semibold mb-6'>Submission Failed</h2>
            <p className='mb-6'>{error}</p>
            <p className='mb-2'>Prefer to book yourself in? Use our patient portal by pressing the button below:</p>
            <div className='w-full flex justify-center mb-4'>
              <Link target='_blank' href={`${DentallyPortal}`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Book Now!
                </button>
              </Link>
            </div>
            <div className='flex gap-4 justify-center mt-6'>
              {SOCIAL_CTAS.map((l, idx) => (
                <motion.a
                  key={idx}
                  href={l.href}
                  target='_blank'
                  initial={{ opacity: 0, y: -8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5 + idx * 0.125,
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <l.Component className='text-3xl text-grey transition-colors' />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
