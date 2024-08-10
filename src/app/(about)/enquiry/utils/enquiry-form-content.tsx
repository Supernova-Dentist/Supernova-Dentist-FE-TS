'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState, type JSX, type SVGProps } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

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

function Search() {
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

  return referringPage ? (
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
  ) : null;
}

export function EnquiryFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [submittedData, setSubmittedData] = useState<any>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      category: '',
      message: '',
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const contentType = response.headers.get('content-type');
      let responseData;
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text(); // Handle non-JSON response
      }

      console.log('Form submitted successfully:', responseData);
      setSubmittedData(data);
      setSuccessModalVisible(true);

      form.reset({ name: '', email: '', phone: '', category: '', message: '' }); // Clear the form on success
    } catch (error) {
      console.error('There was a problem with the form submission:', error);
      setErrorModalVisible(true);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleSubmit = (data: any) => {
    onSubmit(data).catch(console.error);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>

      <section className='px-16 pt-4 pb-24 md:pb-32'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-2xl space-y-6 bg-white p-12 rounded-lg shadow-lg'>
            <Form {...form}>
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
                            <Controller
                              name='category'
                              control={form.control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
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
                              )}
                            />
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
                  <Button
                    type='submit'
                    className={`w-full text-lg py-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className='w-5 h-5 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin'></div>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {successModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Thank you, {submittedData.name}, for your Enquiry!</h2>
            <p className='mb-4'>
              One of the Supernova team will be back in touch with the following email regarding your enquiry:{' '}
              {submittedData.email}
            </p>
            <Button onClick={() => setSuccessModalVisible(false)} className='w-full text-lg py-2'>
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Submission Failed</h2>
            <p className='mb-4'>There was a problem with your enquiry submission. Please try again later.</p>
            <Button onClick={() => setErrorModalVisible(false)} className='w-full text-lg py-2'>
              Close
            </Button>
          </div>
        </div>
      )}
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
