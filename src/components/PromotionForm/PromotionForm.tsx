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
import { SOCIAL_CTAS } from '../CornerNav/CornerNav';
import PrivacyPolicyModal from '../PrivacyModal/PrivacyModal';
import RedirectProgressBar from '../RedirectProgressBar/RedirectProgressBar';

const defaultValues: PromotionFormData = {
  fullname: '',
  email: '',
  phone: '',
  optOutEmails: false,
};

export default function PromotionForm() {
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
      let cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;
      if (cleanedSource === '') cleanedSource = 'Homepage';

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

      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataWithTracking),
      });

      const responseData = await res.json();

      if (!res.ok) {
        const errorMessage = String(responseData.message) || 'There was a problem with your submission.';
        setError(errorMessage);
        throw new Error(errorMessage);
      }

      // Dengro request (fire-and-forget)
      // try {
      //   await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/dengro`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(dataWithSource),
      //   });
      // } catch (dengroError) {
      //   console.warn('Dengro capture failed:', dengroError);
      // }

      window.dataLayer = window.dataLayer ?? [];

      const eventName = responseData.alreadyExists ? 'ExistingPatientLead' : 'NewPatientLead';

      // Push event to dataLayer
      window.dataLayer.push({ event: eventName });

      // Push event to Facebook Pixel
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName);
      }

      // Google Ads conversion only for new patients
      if (!responseData.alreadyExists && typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
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
      <section id='form' ref={ref} className='w-full py-16 md:py-32 lg:py-40 '>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state for the animation
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <div className='container grid items-center lg:justify-start justify-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 mx-auto max-w-[1250px]'>
            <div className='space-y-6 text-center lg:text-left'>
              <div className='inline-block rounded-lg bg-grey px-4 py-2 text-md text-gray-50'>
                Welcoming New Patients!
              </div>
              <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                Start Your Journey with Us
              </h2>
              <p className='max-w-[700px] text-center lg:text-left text-muted-foreground md:text-2xl lg:text-xl xl:text-2xl text-lightGrey tracking-tight'>
                Looking for a reliable <strong>Bridgwater dentist</strong>? Supernova Dental is accepting new patients,
                offering expert care for routine check-ups, cosmetic dentistry, dental implants, Invisalign and more.
              </p>
              <Image
                priority
                width={1824}
                height={1216}
                quality={75}
                placeholder='blur'
                src={'/assets/images/supernova-dental-bridgwater-reception-new-patients.webp'}
                blurDataURL={'/assets/images/supernova-dental-bridgwater-reception-new-patients.webp'}
                alt={`Supernova Dental - Taking on more patients in Bridgwater Somerset`}
                className='w-full mx-auto my-8 hidden lg:block'
              />
            </div>
            <Card className='mx-auto w-full max-w-lg bg-gray-50 shadow-2xl border border-black/10 border-solid p-8'>
              <form id='home-page-enquiry-form' onSubmit={handleSubmit(onSubmit)}>
                <CardHeader className='text-center mb-4 p-0 md:p-4'>
                  <CardTitle className='text-2xl'>Looking for a Dentist in Bridgwater?</CardTitle>
                  <CardDescription className='text-lg text-gray-500'>
                    Register today and experience a tailored patient journey at your new Bridgwater Dentist!
                  </CardDescription>
                </CardHeader>
                <CardContent className='p-0 md:p-4 md:pt-0'>
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
                    {isSubmitting ? <BarLoader /> : 'Register'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
            <Image
              priority
              width={1824}
              height={1216}
              quality={75}
              placeholder='blur'
              src={'/assets/images/supernova-dental-bridgwater-reception-new-patients.webp'}
              blurDataURL={'/assets/images/supernova-dental-bridgwater-reception-new-patients.webp'}
              alt={`Supernova Dental - Taking on more patients in Bridgwater Somerset`}
              className='w-full mx-auto my-8 block lg:hidden'
            />
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
              className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900'
            >
              <FaTimes />
            </button>
            <h2 className='text-3xl font-semibold mb-6'>Submission Failed</h2>
            <p className='mb-6'>There was a problem with your submission. Please try again later.</p>
            <p className='my-2'>Prefer to book yourself in? Use our patient portal by pressing the button below:</p>
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
