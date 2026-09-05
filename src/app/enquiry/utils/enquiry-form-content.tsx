/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import BarLoader from '@/components/BarLoader/BarLoader';
import PrivacyPolicyModal from '@/components/PrivacyModal/PrivacyModal';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { DentallyPortal } from '@/lib/constants';
import { buildSubmissionTracking, pushAnalyticsEvent, trackGoogleAdsConversion, trackMetaEvent } from '@/lib/tracking';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Search from './Search';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: 'First Name must be at least 2 characters.',
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
  optOutEmails: z.boolean().default(false),
});

export function EnquiryFormContent() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [messageLength, setMessageLength] = useState(0); // Track the message length
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      category: '',
      message: '',
      optOutEmails: false,
    },
  });

  function handlePrivacyModalOpen() {
    setShowPrivacyModal(true);
  }

  function handlePrivacyModalClose() {
    setShowPrivacyModal(false);
  }

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const decodedSource = decodeURIComponent(pathname);
      const cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;
      // const dataWithSource = { ...data, source: cleanedSource };

      const dataWithTracking = {
        ...data,
        source: cleanedSource,
        tracking: buildSubmissionTracking({ form: 'contact-enquiry', service: cleanedSource }),
      };

      // const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}promotion`, {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/promotion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithTracking),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const contentType = response.headers.get('content-type');
      let responseData;
      if (contentType != null && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      setSubmittedData(data);
      setSuccessModalVisible(true);

      // try {
      //   await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(dataWithSource),
      //   });
      // } catch (dengroError) {
      //   console.warn('Dengro capture failed:', dengroError);
      // }

      window.dataLayer = window.dataLayer ?? [];
      pushAnalyticsEvent({ event: 'NewEnquiryForm' });

      // Trigger Google Ads conversion tracking
      if (typeof window !== 'undefined') {
        trackGoogleAdsConversion({
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      // Trigger Facebook Pixel Lead event with lead_type param
      trackMetaEvent('NewEnquiryForm');

      form.reset({
        fullname: '',
        email: '',
        phone: '',
        category: '',
        message: '',
        optOutEmails: false,
      });
    } catch (error) {
      console.error('There was a problem with the form submission:', error);
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.target.value;
    setMessageLength(message.length); // Update the message length
  };

  const handleSubmit = (data: any) => {
    onSubmit(data).catch(console.error);
  };

  return (
    <>
      <Suspense>
        <Search />
      </Suspense>

      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={handlePrivacyModalClose} />

      <motion.section
        className='min-w-0 px-0 pb-8 pt-0 md:pb-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mx-auto'>
          <motion.div
            className='mx-auto max-w-3xl space-y-6 rounded-[1.5rem] border border-control-border bg-white p-6 text-obsidian shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8 md:p-10'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                <div className='grid gap-6'>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className='space-y-3'>
                      <Label htmlFor='fullname' className='text-base font-semibold text-[#171923]'>
                        Full Name
                      </Label>
                      <FormField
                        control={form.control}
                        name='fullname'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='fullname'
                                placeholder='Full Name'
                                maxLength={75}
                                {...field}
                                className='h-12 border-control-border bg-porcelain px-3 text-base text-obsidian placeholder:text-taupe focus-visible:ring-focus-light'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className='space-y-3'>
                      <Label htmlFor='email' className='text-base font-semibold text-[#171923]'>
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
                                maxLength={75}
                                placeholder='Enter your email'
                                {...field}
                                className='h-12 border-control-border bg-porcelain px-3 text-base text-obsidian placeholder:text-taupe focus-visible:ring-focus-light'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className='space-y-3'>
                      <Label htmlFor='phone' className='text-base font-semibold text-[#171923]'>
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
                                maxLength={15}
                                {...field}
                                className='h-12 border-control-border bg-porcelain px-3 text-base text-obsidian placeholder:text-taupe focus-visible:ring-focus-light'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='space-y-3'>
                      <Label htmlFor='category' className='text-base font-semibold text-[#171923]'>
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
                                    <SelectTrigger className='h-12 border-control-border bg-porcelain text-base text-obsidian focus:ring-focus-light' id='category'>
                                      <SelectValue placeholder='Select category' className='text-md lg:text-lg' />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value='new-patient-registration' className='text-md lg:text-lg py-2'>
                                        New Patient Registration
                                      </SelectItem>
                                      <SelectItem value='invisalign' className='text-md lg:text-lg py-2'>
                                        Invisalign
                                      </SelectItem>
                                      <SelectItem value='cosmetic-dentistry' className='text-md lg:text-lg py-2'>
                                        Cosmetic Dentistry
                                      </SelectItem>
                                      <SelectItem value='dental-implants' className='text-md lg:text-lg py-2'>
                                        Dental Implants
                                      </SelectItem>
                                      <SelectItem value='general-enquiry' className='text-md lg:text-lg py-2'>
                                        General Enquiry
                                      </SelectItem>
                                      <SelectItem value='emergency-care' className='text-md lg:text-lg py-2'>
                                        Emergency Care
                                      </SelectItem>
                                      <SelectItem value='membership-plans' className='text-md lg:text-lg py-2'>
                                        Membership Plans
                                      </SelectItem>
                                      <SelectItem value='consultation-request' className='text-md lg:text-lg py-2'>
                                        Consultation Request
                                      </SelectItem>
                                      <SelectItem value='dental-hygiene' className='text-md lg:text-lg py-2'>
                                        Dental Hygiene and Advice
                                      </SelectItem>
                                      <SelectItem value='dental-finance' className='text-md lg:text-lg py-2'>
                                        Dental Finance
                                      </SelectItem>
                                      <SelectItem value='feedback' className='text-md lg:text-lg py-2'>
                                        Feedback
                                      </SelectItem>
                                      <SelectItem value='billing-insurance' className='text-md lg:text-lg py-2'>
                                        Billing and Insurance
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
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='message' className='text-base font-semibold text-[#171923]'>
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
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handleMessageChange(e);
                              }}
                              className='min-h-32 border-control-border bg-porcelain p-3 text-base text-obsidian placeholder:text-taupe focus-visible:ring-focus-light'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Character count */}
                    <div className='text-right text-xs text-[#68645f]'>
                      {messageLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>
                  </div>
                  <div className='grid gap-1 mb-4'>
                    <FormField
                      control={form.control}
                      name='optOutEmails'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center mt-2'>
                            <FormControl>
                              <Checkbox id='optOutEmails' checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>

                            <Label htmlFor='optOutEmails' className='ml-3 text-sm leading-6 text-[#68645f]'>
                              I do not want to receive occasional emails about relevant dental treatments, services and offers from Supernova Dental.
                            </Label>
                          </div>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <span className='flex items-center gap-1'>...</span>
                  </div>
                  <Button
                    type='submit'
                    className={`mx-auto min-h-12 w-full max-w-[18rem] rounded-full bg-champagne px-6 py-3 text-base font-semibold text-obsidian shadow-sm transition-colors hover:bg-lightGold focus-visible:ring-2 focus-visible:ring-focus-light ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={loading}
                  >
                    {loading ? <BarLoader /> : <span className='text-md lg:text-lg'>Submit Enquiry</span>}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.section>

      <Dialog open={successModalVisible} onOpenChange={setSuccessModalVisible}>
        <DialogContent className='max-w-md rounded-2xl border-control-border bg-white p-8 text-obsidian shadow-2xl'>
          <DialogTitle className='pr-8 text-2xl font-semibold leading-tight'>
            Thank you, {submittedData?.fullname}, for your enquiry!
          </DialogTitle>
          <DialogDescription asChild>
            <div className='text-base text-taupe'>
              <p className='mb-4'>
              One of the Supernova team will be back in touch via the following details regarding your enquiry:
              </p>
              <p className='mb-4'><strong className='text-obsidian'>Email:</strong> {submittedData?.email}</p>
              <p className='mb-4'><strong className='text-obsidian'>Phone:</strong> {submittedData?.phone}</p>

              <p className='mb-2'>Prefer to book yourself in? Use our patient portal below:</p>
              <div className='mb-2 flex w-full justify-center'>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href={DentallyPortal}
                  className='pointer-events-auto mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-obsidian px-6 py-3 font-medium text-ivory transition-colors hover:bg-deep-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-2'
                >
                  Book now
                </Link>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Dialog open={errorModalVisible} onOpenChange={setErrorModalVisible}>
        <DialogContent className='max-w-sm rounded-2xl border-control-border bg-white p-8 text-obsidian shadow-2xl'>
          <DialogTitle className='pr-8 text-2xl font-semibold leading-tight'>Oops! Something went wrong.</DialogTitle>
          <DialogDescription className='text-base leading-7 text-taupe'>
            There was an issue with your submission. Please try again later.
          </DialogDescription>
          <Button onClick={() => setErrorModalVisible(false)} className='mt-2 min-h-11 w-full bg-red-700 py-3 text-base text-white hover:bg-red-800'>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
