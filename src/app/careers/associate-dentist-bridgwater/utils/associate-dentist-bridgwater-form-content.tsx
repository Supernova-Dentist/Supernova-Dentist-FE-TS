/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import BarLoader from '@/components/BarLoader/BarLoader';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { half } from '@tsparticles/engine';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdFileUpload } from 'react-icons/md';
import { z } from 'zod';
import { FileUpload } from '../../utils/file-upload';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  // Required fields for the referring clinician and patient information

  workingHours: z.string().min(1, { message: 'Please select your preferred working hours.' }),
  title: z.string().min(1, { message: 'Please provide your title.' }),
  firstName: z.string().min(2, { message: 'Please provide your first name.' }),
  lastName: z.string().min(2, { message: 'Please provide your last name.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),

  // Referral-related information
  message: z.string().min(5, { message: 'Please provide a message for us.' }),
});

export function AssociateDentistBridgwaterFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [explanationLength, setExplanationLength] = useState(0);

  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workingHours: '',
      name: '',
      email: '',
      message: '',
      title: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  });

  const { register, setValue } = form;

  const onSubmit = async (data: any) => {
    console.log('submitting');
    setLoading(true);

    const decodedSource = decodeURIComponent(pathname);
    const cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;

    try {
      const formData = new FormData();
      const dataWithSource = { ...data, source: cleanedSource };
      // Add referralType first
      formData.append('enquiryType', 'Dentist-Application');

      // Then append the rest of the fields
      for (const key in data) {
        if (key !== 'referralType' && data[key]) {
          formData.append(key, data[key]);
        }
      }

      // Append files under the same field name 'attachments'
      uploadedFiles.slice(0, 1).forEach((file: File) => {
        formData.append('attachments', file); // note the identical key
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/careers`, {
        method: 'POST',
        body: JSON.stringify(dataWithSource),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const contentType = response.headers.get('content-type');
      const responseData = contentType?.includes('application/json') ? await response.json() : await response.text();

      setSubmittedData(data);
      setSuccessModalVisible(true);
      form.reset();
      setUploadedFiles([]); // Clear the uploaded files
      setExplanationLength(0); // Reset the message length
    } catch (error) {
      console.error('There was a problem with the form submission:', error);
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const explanation = e.target.value;

    setExplanationLength(explanation.length); // Update the message length
  };

  // const handleSubmit = (data: any) => {
  //   console.log('Form data before submission:', data);
  //   onSubmit(data).catch(console.error);
  // };

  const handleSubmit = (data: any) => {
    onSubmit(data).catch(console.error);
  };

  const onError = (errors: any) => {
    // console.log('FORM ERRORS:', errors);
  };

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className='container mx-auto md:px-6'>
          <motion.div
            className='mx-auto max-w-2xl space-y-6 bg-white p-8 md:p-12 rounded-lg shadow-lg'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit, onError)} className='space-y-8'>
                <div className='grid gap-6'>
                  <h3 className='text-lg font-bold'>Details</h3>

                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='space-y-3'>
                      <Label htmlFor='title' className='text-lg font-medium'>
                        Title
                      </Label>
                      <Controller
                        name='title'
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
                                <SelectTrigger id='title'>
                                  <SelectValue placeholder='Select title' className='text-md lg:text-lg' />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value='Dr' className='text-md lg:text-lg'>
                                    Dr
                                  </SelectItem>
                                  <SelectItem value='Prof' className='text-md lg:text-lg'>
                                    Prof
                                  </SelectItem>
                                  <SelectItem value='Sir' className='text-md lg:text-lg'>
                                    Sir
                                  </SelectItem>
                                  <SelectItem value='Dame' className='text-md lg:text-lg'>
                                    Dame
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
                      <Label htmlFor='firstName' className='text-lg font-medium'>
                        First Name
                      </Label>
                      <FormField
                        control={form.control}
                        name='firstName'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='firstName'
                                maxLength={75}
                                placeholder=' First Name'
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
                      <Label htmlFor='lastName' className='text-lg font-medium'>
                        Last Name
                      </Label>
                      <FormField
                        control={form.control}
                        name='lastName'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='lastName'
                                maxLength={75}
                                placeholder='Last Name'
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

                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
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
                                placeholder='@'
                                maxLength={50}
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
                      <Label htmlFor='phoneNumber' className='text-lg font-medium'>
                        Home/Mobile Number
                      </Label>
                      <FormField
                        control={form.control}
                        name='phoneNumber'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='phoneNumber'
                                placeholder='Home/Mobile Number'
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
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='workingHours' className='text-lg font-medium'>
                      Preferred Working Hours
                    </Label>
                    <FormField
                      control={form.control}
                      name='workingHours'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Controller
                              name='workingHours'
                              control={form.control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
                                  <SelectTrigger id='workingHours'>
                                    <SelectValue
                                      placeholder='Select Preferred Working Hours'
                                      className='text-md lg:text-lg'
                                    />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value='Part-time' className='text-md lg:text-lg'>
                                      Part-time
                                    </SelectItem>
                                    <SelectItem value='Full-time' className='text-md lg:text-lg'>
                                      Full-time
                                    </SelectItem>
                                    <SelectItem value='eitherWorkingHours' className='text-md lg:text-lg'>
                                      Either
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
                      Message / About You:
                    </Label>
                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              id='message'
                              {...register('message')}
                              placeholder='Message / About You'
                              rows={5}
                              {...field}
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handleExplanationChange(e);
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
                      {explanationLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>
                  </div>

                  <div className='flex flex-col items-start mt-2'>
                    <div className='max-w-lg mx-auto p-4'>
                      <label htmlFor='fileUpload' className='block mb-2 font-semibold text-gray-800 text-center'>
                        CV File Upload
                      </label>

                      <FileUpload files={uploadedFiles} onChange={(files: File[]) => setUploadedFiles(files)} />
                    </div>

                    <Button
                      type='submit'
                      className={`w-full mx-auto max-w-[15rem] text-lg py-3 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={loading}
                    >
                      {loading ? <BarLoader /> : <span className='text-md lg:text-lg'>Submit</span>}
                    </Button>
                  </div>
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
              Thank you {submittedData.firstName}, we&apos;ve received your Dentist application for Supernova Dental!
            </h2>
            <p className='mb-4'>
              One of the Supernova team will be back in touch via the following details regarding your application:
            </p>
            <p className='mb-4'>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p className='mb-4'>
              <strong>Phone:</strong> {submittedData.phoneNumber}
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
