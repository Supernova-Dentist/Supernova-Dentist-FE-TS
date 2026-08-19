'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DentallyPortal } from '@/lib/constants';
import { getTracking } from '@/lib/tracking';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { promotionSignupSchema, type PromotionFormData } from '../../../types/PromotionForm';
import BarLoader from '../BarLoader/BarLoader';
import { SOCIAL_CTAS } from '../CornerNav/CornerNav';
import PrivacyPolicyModal from '../PrivacyModal/PrivacyModal';
import RedirectProgressBar from '../RedirectProgressBar/RedirectProgressBar';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const defaultValues: PromotionFormData = {
  fullname: '',
  email: '',
  phone: '',
  optOutEmails: false,
};

export default function ImplantPromotionForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showRedirectBar, setShowRedirectBar] = useState(false);
  const redirectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const redirectedRef = useRef(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const pathname = usePathname();

  const form = useForm<PromotionFormData>({
    resolver: zodResolver(promotionSignupSchema),
    defaultValues,
  });

  const values = form.getValues();

  async function onSubmit(data: PromotionFormData) {
    try {
      const decodedSource = decodeURIComponent(pathname);
      let cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;
      if (!cleanedSource) cleanedSource = 'implant-consultation';

      // console.log('Submitting form with source:', cleanedSource);
      // console.log('data', data);

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
      //     body: JSON.stringify(dataWithTracking),
      //   });
      // } catch (dengroError) {
      //   console.warn('Dengro capture failed:', dengroError);
      // }

      window.dataLayer = window.dataLayer ?? [];

      const eventName = responseData.alreadyExists ? 'ExistingImplantLead' : 'NewImplantLead';

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
    form.reset();
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
    form.reset();
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
    form.reset();
  }

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />

      <section ref={ref} className='w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className='container mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-10 items-center px-2'>
            {/* FORM */}
            <Card className='w-full max-w-lg mx-auto bg-white shadow-2xl border p-4 md:p-8 rounded-2xl'>
              <CardHeader className='text-center p-0 mb-2'>
                <CardTitle className='text-3xl font-bold'>Book Your Implant Consultation</CardTitle>

                <p className='text-sm text-gray-600 mt-2'>Find out if dental implants are right for you</p>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                  {/* INTENT SELECTOR */}

                  {/* INPUTS */}
                  <div className='space-y-4'>
                    <div className='grid gap-1'>
                      <Label htmlFor='fullname' className='text-md text-gray-800'>
                        Full Name
                      </Label>
                      <Input
                        id='fullname'
                        placeholder='John Smith'
                        className='py-1 text-lg px-3'
                        {...form.register('fullname')}
                      />
                      <div>
                        {form.formState.errors.fullname && !showPrivacyModal && (
                          <p className='text-red-500 leading-none text-sm'>{form.formState.errors.fullname?.message}</p>
                        )}
                      </div>
                    </div>
                    <div className='grid'>
                      <Label htmlFor='email' className='text-md text-gray-800'>
                        Email Address
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='john@example.com'
                        className='text-lg px-3'
                        {...form.register('email')}
                      />
                      <div>
                        {form.formState.errors.email && !showPrivacyModal && (
                          <p className='text-red-500 leading-none text-sm'>{form.formState.errors.email?.message}</p>
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
                        {...form.register('phone')}
                      />
                      <div>
                        {form.formState.errors.phone && !showPrivacyModal && (
                          <p className='text-red-500 leading-none text-sm'>{form.formState.errors.phone?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button type='submit' className='w-full bg-gold hover:bg-lightGold text-lg py-3'>
                    {form.formState.isSubmitting ? <BarLoader /> : 'Book Implant Consultation'}
                  </Button>

                  {/* TRUST MICROCOPY */}
                  <p className='text-xs text-gray-500 text-center'>
                    No pressure, no obligation - we’ll simply guide you on the next steps.
                  </p>

                  {/* NEXT STEPS */}
                  <div className='text-sm text-gray-600 space-y-1'>
                    <p>✔ Implant suitability assessed by clinician</p>
                    <p>✔ Clear treatment plan explained</p>
                    <p>✔ Finance options available if suitable</p>
                  </div>
                  <p className='mt-3 text-xs text-gray-400 leading-relaxed'>
                    By submitting, you agree to be contacted by Supernova Dental about treatment options and relevant
                    updates. You can opt out at any time.
                  </p>
                </form>
              </Form>
            </Card>

            {/* IMAGE */}
            <div className='hidden lg:block relative w-full h-full rounded-2xl overflow-hidden'>
              <img
                src='/assets/images/outerBuildingSupernova.webp'
                className='w-full h-full object-cover'
                alt='Dental practice exterior'
              />
            </div>
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
