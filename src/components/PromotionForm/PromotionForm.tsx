'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { promotionSignupSchema, type PromotionFormData } from '../../../types/PromotionForm';
import BarLoader from '../BarLoader/BarLoader';

export default function PromotionForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<PromotionFormData>({
    resolver: zodResolver(promotionSignupSchema),
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
        throw new Error('Something went wrong signing up for the promotion');
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

  return (
    <React.Fragment>
      <section id='form' className='w-full py-16 md:py-32 lg:py-40 bg-gradient-to-b from-white to-cream'>
        <div className='container grid items-center lg:justify-start justify-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 mx-auto max-w-[1250px]'>
          <div className='space-y-6 text-center lg:text-left'>
            <div className='inline-block rounded-lg bg-grey px-4 py-2 text-md text-gray-50'>Limited Time Offer</div>
            <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>Exclusive Promotions</h2>
            <p className='max-w-[700px] text-center sm:text-left text-muted-foreground md:text-2xl lg:text-xl xl:text-2xl text-lightGrey tracking-tight'>
              Take advantage of our limited-time offers, including savings on Invisalign treatments and dental wellness
              assessments. Don&apos;t miss out!
            </p>
          </div>
          <Card className='mx-auto w-full max-w-lg bg-gray-50 shadow-2xl border border-black/10 border-solid p-8'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader className='text-center mb-4'>
                <CardTitle className='text-2xl'>Sign Up for Exclusive Offers</CardTitle>
                <CardDescription className='text-lg'>
                  Fill out the form to sign up and receive our latest promotions and updates.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='grid gap-4'>
                  <Label htmlFor='fullname' className='text-lg'>
                    Full Name
                  </Label>
                  <Input id='fullname' placeholder='John Doe' className='py-3 text-lg' {...register('fullname')} />
                  {errors.fullname && <p className='text-red-500 leading-none text-sm'>{errors.fullname?.message}</p>}
                </div>
                <div className='grid gap-4'>
                  <Label htmlFor='email' className='text-lg'>
                    Email Address
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@example.com'
                    className='py-3 text-lg'
                    {...register('email')}
                  />
                  {errors.email && <p className='text-red-500 leading-none text-sm'>{errors.email?.message}</p>}
                </div>
                <div className='grid gap-4'>
                  <Label htmlFor='phone' className='text-lg'>
                    Contact Number
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='(123) 456-7890'
                    className='py-3 text-lg'
                    {...register('phone')}
                  />
                  {errors.phone && <p className='text-red-500 leading-none text-sm'>{errors.phone?.message}</p>}
                </div>
                <div className='grid gap-4'>
                  <div className='flex items-center'>
                    <Checkbox id='consent' {...register('consent')} />
                    <Label htmlFor='consent' className='ml-3 text-lg text-muted-foreground'>
                      I consent to receive marketing emails and acknowledge the{' '}
                      <a href='/privacy-policy' className='text-blue-500 underline'>
                        Privacy Policy
                      </a>
                      .
                    </Label>
                  </div>
                  {errors.consent && <p className='text-red-500 leading-none text-sm'>{errors.consent?.message}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <Button type='submit' className='w-full bg-gold hover:bg-lightGold text-lg py-3'>
                  {isSubmitting ? <BarLoader /> : 'Sign Up'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-3xl font-semibold mb-6'>Thank you, {values.fullname}, for signing up!</h2>
            <p className='mb-6'>
              You&apos;ve been successfully signed up for our promotions and updates. We&apos;ll send details to{' '}
              {values.email}.
            </p>
            <Button onClick={handleSuccessModalClose} className='w-full text-xl py-3'>
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-3xl font-semibold mb-6'>Submission Failed</h2>
            <p className='mb-6'>There was a problem with your submission. Please try again later.</p>
            <Button onClick={() => setShowErrorModal(false)} className='w-full text-xl py-3'>
              Close
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
