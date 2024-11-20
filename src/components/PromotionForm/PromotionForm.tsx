/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

export default function PromotionForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage =
          String(errorData.message) || 'There was a problem with your submission. Please try again later.';
        setError(String(errorMessage));
        throw new Error(String(errorMessage));
      }

      // Trigger Google Ads conversion tracking
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      setShowSuccessModal(true);
    } catch (error) {
      setShowErrorModal(true);

      if (error instanceof Error) {
        console.log({ message: error.message });
      } else {
        console.log('An unknown error occurred');
      }
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

  return (
    <>
      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={handlePrivacyModalClose} />
      <section ref={ref} id='form' className='w-full py-16 md:py-32 lg:py-40 bg-gradient-to-b from-white to-cream'>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state for the animation
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <div className='container grid items-center lg:justify-start justify-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 mx-auto max-w-[1250px]'>
            <div className='space-y-6 text-center lg:text-left'>
              <div className='inline-block rounded-lg bg-grey px-4 py-2 text-md text-gray-50'>Limited Time Offer</div>
              <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>Exclusive Promotions</h2>
              <p className='max-w-[700px] text-center sm:text-left text-muted-foreground md:text-2xl lg:text-xl xl:text-2xl text-lightGrey tracking-tight'>
                Take advantage of our limited-time offers, including savings on Invisalign treatments and dental
                wellness assessments. Don&apos;t miss out! Register by 31st December 2024.
              </p>
            </div>
            <Card className='mx-auto w-full max-w-lg bg-gray-50 shadow-2xl border border-black/10 border-solid p-8'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader className='text-center mb-4 p-0 md:p-4'>
                  <CardTitle className='text-2xl'>Sign Up for Exclusive Offers</CardTitle>
                  <CardDescription className='text-lg text-gray-500'>
                    Fill out the form to sign up and receive our latest promotions and updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className='p-0 md:p-4 md:pt-0'>
                  <div className='grid gap-1'>
                    <Label htmlFor='fullname' className='text-md text-gray-800'>
                      Full Name
                    </Label>
                    <Input
                      id='fullname'
                      placeholder='John Doe'
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
                        I don’t want to receive emails about Supernova and related Supernova updates and promotions. By
                        not checking the box, I agree to be opted in by default.
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
          </div>
        </motion.div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-3xl font-semibold mb-6'>Thank you, {values.fullname}, for signing up!</h2>
            <div className='mb-6 flex flex-col gap-2'>
              <p>
                You&apos;ve been successfully signed up for our promotions and updates. We&apos;ll send details to{' '}
                {values.email}.
              </p>
              <p>Please check your spam folder if you don&apos;t see it in your inbox.</p>
            </div>
            <Button onClick={handleSuccessModalClose} className='w-full text-xl py-3'>
              Close
            </Button>
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
