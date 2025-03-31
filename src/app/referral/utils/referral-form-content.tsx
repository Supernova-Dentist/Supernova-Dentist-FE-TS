/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import BarLoader from '@/components/BarLoader/BarLoader';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Suspense, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Search from './Search';
import { motion } from 'framer-motion';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  dateOfBirth: z.coerce.date({
    message: 'Invalid date.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 characters.',
  }),
  referralType: z.string().min(1, {
    message: 'Please select a referral type.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
});

export function ReferralFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [messageLength, setMessageLength] = useState(0); // Track the message length

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: '',
      phone: '',
      referralType: '',
      message: '',
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/referral`, {
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
      if (contentType != null && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      console.log('Form submitted successfully:', responseData);
      setSubmittedData(data);
      setSuccessModalVisible(true);
      form.reset({ name: '', email: '', dateOfBirth: '', phone: '', referralType: '', message: '' });
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

      <motion.section
        className='px-4 pt-4 pb-24 md:pb-32'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='container mx-auto md:px-6'>
          <motion.div
            className='mx-auto max-w-2xl space-y-6 bg-white p-8 md:p-12 rounded-lg shadow-lg'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                <div className='grid gap-6'>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
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
                              <Input
                                id='name'
                                placeholder='Enter your name'
                                maxLength={75}
                                {...field}
                                className='text-md lg:text-lg p-3'
                              />
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
                                maxLength={75}
                                placeholder='Enter your email'
                                {...field}
                                className='text-md lg:text-lg p-3'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='dateOfBirth' className='text-lg font-medium'>
                      Date of Birth
                    </Label>
                    <FormField
                      control={form.control}
                      name='dateOfBirth'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id='dateOfBirth'
                              type='date'
                              maxLength={75}
                              placeholder='Select your Date of Birth'
                              {...field}
                              className='text-md lg:text-lg p-3'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                              maxLength={15}
                              {...field}
                              className='text-md lg:text-lg p-3'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='referralType' className='text-lg font-medium'>
                      Category of Referral
                    </Label>
                    <FormField
                      control={form.control}
                      name='referralType'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Controller
                              name='referralType'
                              control={form.control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
                                  <SelectTrigger id='referralType'>
                                    <SelectValue placeholder='Select referral type' className='text-md lg:text-lg' />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value='cbct-opg' className='text-md lg:text-lg'>
                                      CBCT/OPG
                                    </SelectItem>
                                    <SelectItem value='invisalign' className='text-md lg:text-lg'>
                                      Invisalign
                                    </SelectItem>
                                    <SelectItem value='root-canal-treatment' className='text-md lg:text-lg'>
                                      Root Canal Treatment
                                    </SelectItem>
                                    <SelectItem value='implants' className='text-md lg:text-lg'>
                                      Implants
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
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handleMessageChange(e);
                              }}
                              className='text-md lg:text-lg p-3'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Character count */}
                    <div className='text-sm text-gray-500'>
                      {messageLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>
                  </div>
                  <Button
                    type='submit'
                    className={`w-full mx-auto max-w-[15rem] text-lg py-3 ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={loading}
                  >
                    {loading ? <BarLoader /> : <span className='text-md lg:text-lg'>Submit Referral</span>}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.section>

      {/* Success Modal */}
      {successModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-2xl font-semibold mb-4'>
              Thank you, we have successfully recieved the referral for {submittedData.name}!
            </h2>
            <p className='mb-4'>
              One of the Supernova team will be back in touch via the following details regarding your enquiry:
            </p>
            <p className='mb-4'>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p className='mb-4'>
              <strong>Phone:</strong> {submittedData.phone}
            </p>
            <Button
              onClick={() => setSuccessModalVisible(false)}
              className='w-full bg-green-600 text-white text-lg py-3'
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Oops! Something went wrong.</h2>
            <p className='mb-4'>There was an issue with your submission. Please try again later.</p>
            <Button onClick={() => setErrorModalVisible(false)} className='w-full bg-red-600 text-white text-lg py-3'>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
