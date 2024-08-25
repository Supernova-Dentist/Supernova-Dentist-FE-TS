'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import BarLoader from '../BarLoader/BarLoader';

export default function PromotionForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading },
  } = useForm({ defaultValues: { fullname: '', email: '', phone: '' } });

  async function onSubmit(data: any) {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log({ response });
      reset();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  console.log({ isLoading });

  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-cream'>
      <div className='container grid items-center lg:justify-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 mx-auto max-w-[1250px]'>
        <div className='space-y-4 text-center lg:text-left'>
          <div className='inline-block rounded-lg bg-grey px-3 py-1 text-sm text-gray-50'>Limited Time Offer</div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>50% Off First Visit</h2>
          <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-lightGrey tracking-tight'>
            For the first 50 people who sign up, get 50% off your first visit to our dental practice. Don&apos;t miss
            out on this exclusive offer!
          </p>
        </div>
        <Card className='mx-auto w-full max-w-md bg-gray-50 '>
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
                <Input id='fullname' placeholder='John Doe' {...register('fullname')} required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input id='email' type='email' placeholder='john@example.com' {...register('email')} required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='phone'>Contact Number</Label>
                <Input id='phone' type='tel' placeholder='(123) 456-7890' {...register('phone')} required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type='submit' className='w-full bg-gold hover:bg-lightGold'>
                {loading ? <BarLoader /> : 'Book Appointment'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
