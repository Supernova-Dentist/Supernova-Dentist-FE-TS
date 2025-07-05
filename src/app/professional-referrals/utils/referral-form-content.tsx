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
import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Search from './Search';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  // Required fields
  email: z.string().email({ message: 'Invalid email address.' }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 characters.' })
    .max(15, { message: 'Phone number must not exceed 15 characters.' }),

  // Optional fields (make required if needed)
  practiceName: z.string().min(1, { message: 'Please provide the referring practice name.' }),
  practiceEmail: z.string().email({ message: 'Please provide a valid practice email.' }),
  practicePhone: z.string().min(10, { message: 'Please provide the practice phone number.' }),
  dentistName: z.string().min(2, { message: 'Please provide the referring dentist’s name.' }),

  patientTitle: z.string().optional(),
  firstName: z.string().min(2, { message: 'Please provide the patient’s first name.' }),
  lastName: z.string().min(2, { message: 'Please provide the patient’s last name.' }),
  middleNames: z.string().optional(),

  address: z.string().min(1, { message: 'Please provide the patient’s address.' }),
  postcode: z.string().min(1, { message: 'Please provide the patient’s postcode.' }),
  referralReason: z.string().min(1, { message: 'Please provide a referral reason.' }),
  explanation: z.string().min(1, { message: 'Please provide an explanation for the referral.' }),
  medicalHistory: z.string().min(1, { message: 'Please provide the patient’s medical history.' }),

  // Consent fields (required for legal reasons)
  clinicianConsent: z.boolean().refine((val) => val, { message: 'Clinician consent is required.' }),
  patientConsent: z.boolean().refine((val) => val, { message: 'Patient consent is required.' }),
});

export function ReferralFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [explanationLength, setExplanationLength] = useState(0);
  const [medicalHistoryLength, setMedicialHistoryLength] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      dateOfBirth: '',
      phone: '',
      practiceName: '',
      practiceEmail: '',
      practiceAddress: '',
      practicePhone: '',
      dentistName: '',
      patientTitle: '',
      firstName: '',
      lastName: '',
      middleNames: '',
      address: '',
      postcode: '',
      phoneNumber: '',
      referralPurpose: '',
      referralReason: '',
      explanation: '',
      medicalHistory: '',
      clinicianConsent: false,
      patientConsent: false,
    },
  });

  const { register, setValue } = form;

  const onSubmit = async (data: any) => {
    console.log('Form data:', data);

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/submit-referral`, {
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
      form.reset({ name: '', email: '', dateOfBirth: '', phone: '', message: '' });
    } catch (error) {
      console.error('There was a problem with the form submission:', error);
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const explanation = e.target.value;
    console.log('explanation', explanation);

    setExplanationLength(explanation.length); // Update the message length
  };

  const handleMedicialHistoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('e.target.value', e.target.value);

    const medicialHistory = e.target.value;
    setMedicialHistoryLength(medicialHistory.length); // Update the message length
  };

  const handleSubmit = (data: any) => {
    console.log('Form data:', data);

    onSubmit(data).catch(console.error);
  };

  return (
    <>
      <Suspense>
        <Search />
      </Suspense>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className='container mx-auto md:px-6'>
          <motion.div
            className='mx-auto max-w-2xl space-y-6 bg-white p-8 md:p-12 rounded-lg shadow-lg'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold text-center'>Referral Form</h2>
            <p className='text-lg text-center text-gray-600'>
              Please fill in the form below or download and post to Supernova Building, Marsh Lane, Huntworth Gate,
              Bridgwater TA6 6LQ.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                <div className='grid gap-6'>
                  <h3 className='text-lg font-bold'>Referring Dentist Details</h3>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className='space-y-3'>
                      <Label htmlFor='practiceName' className='text-lg font-medium'>
                        Practice Name
                      </Label>
                      <FormField
                        control={form.control}
                        name='practiceName'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='practiceName'
                                placeholder='Practice Name'
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
                      <Label htmlFor='practiceEmail' className='text-lg font-medium'>
                        Practice Email
                      </Label>
                      <FormField
                        control={form.control}
                        name='practiceEmail'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='practiceEmail'
                                type='email'
                                maxLength={75}
                                placeholder=' Practice Email'
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
                      <Label htmlFor='practiceAddress' className='text-lg font-medium'>
                        Practice Address
                      </Label>
                      <FormField
                        control={form.control}
                        name='practiceAddress'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='practiceAddress'
                                placeholder='Practice Address'
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
                      <Label htmlFor='practicePhone' className='text-lg font-medium'>
                        Practice Phone
                      </Label>
                      <FormField
                        control={form.control}
                        name='practicePhone'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='practicePhone'
                                placeholder='Practice Phone'
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
                    <Label htmlFor='dentistName' className='text-lg font-medium'>
                      Referring Dentist Name
                    </Label>
                    <FormField
                      control={form.control}
                      name='dentistName'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id='dentistName'
                              placeholder='Referring Dentist Name'
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

                  <h3 className='text-lg font-bold'>Patient Details</h3>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='space-y-3'>
                      <Label htmlFor='patientTitle' className='text-lg font-medium'>
                        Patient Title
                      </Label>
                      <FormField
                        control={form.control}
                        name='patientTitle'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='patientTitle'
                                placeholder='Patient Title'
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
                      <Label htmlFor='middleNames' className='text-lg font-medium'>
                        Middle Name(s)
                      </Label>
                      <FormField
                        control={form.control}
                        name='middleNames'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='middleNames'
                                placeholder='Middle Name(s)'
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
                  </div>

                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className='space-y-3'>
                      <Label htmlFor='address' className='text-lg font-medium'>
                        Address
                      </Label>
                      <FormField
                        control={form.control}
                        name='address'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='address'
                                placeholder='Address'
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
                      <Label htmlFor='postcode' className='text-lg font-medium'>
                        Postcode
                      </Label>
                      <FormField
                        control={form.control}
                        name='postcode'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='postcode'
                                placeholder='Postcode'
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
                    <Label htmlFor='referralPurpose' className='text-lg font-medium'>
                      Purpose of Referral
                    </Label>
                    <FormField
                      control={form.control}
                      name='referralPurpose'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Controller
                              name='referralPurpose'
                              control={form.control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
                                  <SelectTrigger id='referralPurpose'>
                                    <SelectValue placeholder='Select referral purpose' className='text-md lg:text-lg' />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value='consultation' className='text-md lg:text-lg'>
                                      Consultation
                                    </SelectItem>
                                    <SelectItem value='second-opinion' className='text-md lg:text-lg'>
                                      Second Opinion
                                    </SelectItem>
                                    <SelectItem value='consultation-and-treatment' className='text-md lg:text-lg'>
                                      Consultation and Treatment
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
                    <Label htmlFor='referralReason' className='text-lg font-medium'>
                      Reason for Referral
                    </Label>
                    <FormField
                      control={form.control}
                      name='referralReason'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Controller
                              name='referralReason'
                              control={form.control}
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
                                  <SelectTrigger id='referralReason'>
                                    <SelectValue placeholder='Select referral reason' className='text-md lg:text-lg' />
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
                    <Label htmlFor='explanation' className='text-lg font-medium'>
                      Please Explain
                    </Label>
                    <FormField
                      control={form.control}
                      name='explanation'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              id='explanation'
                              placeholder='Please Explain'
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
                  <div className='space-y-3'>
                    <Label htmlFor='medicalHistory' className='text-lg font-medium'>
                      Relevant Medical History
                    </Label>
                    <FormField
                      control={form.control}
                      name='medicalHistory'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              id='medicalHistory'
                              placeholder='Relevant Medical History'
                              rows={5}
                              {...field}
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handleMedicialHistoryChange(e);
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
                      {medicalHistoryLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <p className='text-lg font-medium'>
                      This confidential form provides us with the information we require to receive a patient referral.
                      The information contained within this form should be true and accurate to the best of your
                      knowledge and with the patient’s knowledge and consent. By submitting this form, we will securely
                      collect your details and the patient’s details. We will then store and process this information in
                      accordance with our Privacy policy, a copy of which can be found on our website.
                    </p>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Checkbox
                      id='clinicianConsent'
                      {...register('clinicianConsent')}
                      defaultChecked={false}
                      onCheckedChange={(checked: boolean) => setValue('clinicianConsent', checked)}
                    />
                    <Label htmlFor='optOutEmails' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                      I understand and agree to the processing of my personal data as the referring Clinician.
                    </Label>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Checkbox
                      id='patientConsent'
                      {...register('patientConsent')}
                      defaultChecked={false}
                      onCheckedChange={(checked: boolean) => setValue('patientConsent', checked)}
                    />
                    <Label htmlFor='optOutEmails' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                      I have made my patient aware of this referral and the provision of their data for this purpose.
                    </Label>
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
