'use client';

import { Suspense, type JSX, type SVGProps, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const urlToReadableMap: { [key: string]: string } = {
  invisalign: 'Invisalign',
  'composite-bonding': 'Composite Bonding',
  'tooth-whitening': 'Tooth Whitening',
  'dental-implants': 'Dental Implants',
};

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

export function EnquiryFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [referringPage, setReferringPage] = useState<string>('');
  const [referringPageDisplay, setReferringPageDisplay] = useState<string>('');

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      const readableRef = urlToReadableMap[ref] || ref;
      setReferringPage(ref);
      setReferringPageDisplay(readableRef);
    }
  }, [searchParams]);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    // You can also handle your form submission here, such as sending data to an API
  };

  const handleSubmit = (data: any) => {
    onSubmit(data).catch(console.error);
  };

  return (
    <>
      {referringPage && (
        <Suspense>
          <div className='flex items-center mb-8'>
            <Button
              onClick={(e) => {
                e.preventDefault();
                router.push(`/${encodeURIComponent(referringPage)}`);
              }}
              className='inline-flex items-center gap-2 text-cream text-lg hover:text-gold hover:bg-cream transition'
            >
              <ArrowLeftIcon className='h-5 w-5' />
              Back to {referringPageDisplay}
            </Button>
          </div>
        </Suspense>
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
    </>
  );
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m12 19-7-7 7-7' />
      <path d='M19 12H5' />
    </svg>
  );
}
