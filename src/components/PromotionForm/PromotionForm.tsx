'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BarLoader from '../BarLoader/BarLoader';
import { promotionSignupSchema, type PromotionFormData } from '../../../types/PromotionForm';

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
    } catch (error: unknown) {
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
      <section id='form' className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-cream'>
        <div className='container grid items-center lg:justify-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 mx-auto max-w-[1250px]'>
          <div className='space-y-4 text-center lg:text-left'>
            <div className='inline-block rounded-lg bg-grey px-3 py-1 text-sm text-gray-50'>Limited Time Offer</div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>50% Off First Visit</h2>
            <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-lightGrey tracking-tight'>
              For the first 50 people who sign up, get 50% off your first visit to our dental practice. Don&apos;t miss
              out on this exclusive offer!
            </p>
          </div>
          <Card className='mx-auto w-full max-w-md bg-gray-50 shadow-xl border border-black/10 border-solid'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Book Your Appointment</CardTitle>
                <CardDescription>
                  Fill out the form to schedule your first visit and claim your 50% discount.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='fullname'>Full Name</Label>
                  <Input id='fullname' placeholder='John Doe' {...register('fullname')} />
                  {errors.fullname !== null && (
                    <p className='text-red-500 leading-none text-xs'>{errors.fullname?.message}</p>
                  )}
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input id='email' type='email' placeholder='john@example.com' {...register('email')} />
                  {errors.email !== null && (
                    <p className='text-red-500 leading-none text-xs'>{errors.email?.message}</p>
                  )}
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='phone'>Contact Number</Label>
                  <Input id='phone' type='tel' placeholder='(123) 456-7890' {...register('phone')} />
                  {errors.phone !== null && (
                    <p className='text-red-500 leading-none text-xs'>{errors.phone?.message}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button type='submit' className='w-full bg-gold hover:bg-lightGold'>
                  {isSubmitting ? <BarLoader /> : 'Book Appointment'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Thank you, {values.fullname}, for your Enquiry! </h2>
            <p className='mb-4'>
              One of the Supernova team will be back in touch with the following email regarding your enquiry:{' '}
              {values.email}
            </p>
            <Button onClick={handleSuccessModalClose} className='w-full text-lg py-2'>
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Submission Failed</h2>
            <p className='mb-4'>There was a problem with your enquiry submission. Please try again later.</p>
            <Button onClick={() => setShowErrorModal(false)} className='w-full text-lg py-2'>
              Close
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
