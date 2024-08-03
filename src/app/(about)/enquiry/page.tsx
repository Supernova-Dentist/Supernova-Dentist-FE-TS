'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FaBackward } from 'react-icons/fa6';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 characters.',
  }),
  category: z.string().min(1, {
    message: 'Please select a category.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
});

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [referringPage, setReferringPage] = useState('');

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setReferringPage(ref);
    }
  }, [searchParams]);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);
    // You can also handle your form submission here, such as sending data to an API
  };

  const handleSubmit = (data) => {
    onSubmit(data).catch(console.error);
  };

  return (
    <div className='flex flex-col items-center justify-center bg-lightGrey'>
      <section className='p-16 md:pt-32 w-full '>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-2xl mx-auto space-y-4 text-center'>
            <h1 className='text-5xl font-bold tracking-tight text-gold sm:text-6xl lg:text-7xl'>
              Get in touch with our dental experts
            </h1>
            <p className='text-xl text-cream mt-64'>
              Our team of experienced dentists is here to provide you with top-notch dental care. Fill out the form
              below to schedule an appointment or inquire about our services.
            </p>
          </div>
        </div>
        <hr className='border-t-2 border-gold my-16 w-1/2 mx-auto' />
      </section>

      {referringPage && (
        <div className='container mx-auto px-4 md:px-6 mb-4'>
          <Button
            onClick={() => router.back()}
            className='bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl'
          >
            <FaBackward className='w-6 h-6 mr-2' />
            Back to {referringPage}
          </Button>
        </div>
      )}

      <section className='px-16 pt-4 pb-24 md:pb-32'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-2xl space-y-6 bg-white p-12 rounded-lg shadow-lg'>
            <Form {...form}>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                <div className='grid gap-6'>
                  <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div className='space-y-3'>
                      <Label htmlFor='name' className='text-lg font-medium'>
                        Name
                      </Label>
                      <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input id='name' placeholder='Enter your name' {...field} className='text-lg p-3' />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='space-y-3'>
                      <Label htmlFor='email' className='text-lg font-medium'>
                        Email
                      </Label>
                      <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                                {...field}
                                className='text-lg p-3'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='phone' className='text-lg font-medium'>
                      Phone
                    </Label>
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id='phone'
                              placeholder='Enter your phone number'
                              {...field}
                              className='text-lg p-3'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='category' className='text-lg font-medium'>
                      Category of Enquiry
                    </Label>
                    <FormField
                      control={form.control}
                      name='category'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select {...field}>
                              <SelectTrigger id='category'>
                                <SelectValue placeholder='Select category' className='text-lg' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value='appointment' className='text-lg'>
                                  Appointment
                                </SelectItem>
                                <SelectItem value='service' className='text-lg'>
                                  Service Inquiry
                                </SelectItem>
                                <SelectItem value='other' className='text-lg'>
                                  Other
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='message' className='text-lg font-medium'>
                      Message
                    </Label>
                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              id='message'
                              placeholder='Enter your message'
                              rows={5}
                              {...field}
                              className='text-lg p-3'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type='submit' className='w-full text-lg py-3'>
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
