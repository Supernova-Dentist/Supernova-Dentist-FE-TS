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
import { log } from 'console';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  // Required fields for the referring dentist and patient information
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  dateOfBirth: z.coerce.date({ message: 'Invalid date.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),
  referralType: z.string().min(1, { message: 'Please select a referral type.' }),
  message: z.string().min(5, { message: 'Message must be at least 5 characters.' }),

  // Required practice information
  practiceName: z.string().min(1, { message: 'Please provide the referring practice name.' }),
  practiceEmail: z.string().email({ message: 'Please provide a valid practice email.' }),
  practicePhone: z.string().min(10, { message: 'Please provide the practice phone number.' }),
  dentistName: z.string().min(2, { message: 'Please provide the referring dentist’s name.' }),

  // Required patient information
  patientTitle: z.string().min(1, { message: 'Please provide the patient’s title.' }),
  firstName: z.string().min(2, { message: 'Please provide the patient’s first name.' }),
  lastName: z.string().min(2, { message: 'Please provide the patient’s last name.' }),
  middleNames: z.string().optional(),
  address: z.string().min(1, { message: 'Please provide the patient’s address.' }),
  postcode: z.string().min(1, { message: 'Please provide the patient’s postcode.' }),

  // Referral-related information
  referralPurpose: z.string().min(5, { message: 'Please specify the referral purpose.' }),
  reasonAndJustification: z.string().min(5, { message: 'Please provide reason and justification.' }),
  medicalHistory: z.string().min(5, { message: 'Please provide relevant medical history.' }),

  // Required for X-ray exposure and size options (at least one of these checkboxes should be ticked)
  full1: z.boolean(),
  full2: z.boolean(),
  full3: z.boolean(),
  full4: z.boolean(),
  sectional1: z.boolean(),
  sectional2: z.boolean(),
  sectional3: z.boolean(),
  sectional4: z.boolean(),
  sectional5: z.boolean(),
  sectional6: z.boolean(),
  exposure1: z.boolean(),
  exposure2: z.boolean(),
  size1: z.boolean(),
  size2: z.boolean(),
  size3: z.boolean(),
  size4: z.boolean(),
  size8x8cm1: z.boolean(),
  size8x8cm2: z.boolean(),
  size8x8cm3: z.boolean(),
  size8x8cm4: z.boolean(),
  size8x8cm5: z.boolean(),
  size8x8cm6: z.boolean(),
  size8x8cm7: z.boolean(),
  size5x5cm1: z.boolean(),
  size5x5cm2: z.boolean(),
  size5x5cm3: z.boolean(),
  size5x5cm4: z.boolean(),
  size5x5cm5: z.boolean(),
  size5x5cm6: z.boolean(),
  size5x5cm7: z.boolean(),
  size5x5cm8: z.boolean(),
  size11x10cm1: z.boolean(),

  // Stent checkbox (at least one must be selected)
  stentToBeWornYes: z.boolean(),
  stentToBeWornNo: z.boolean(),

  // Dentist's signature (required)
  dentistSignature: z.string().min(1, { message: 'Dentist signature is required.' }),

  // GDC number (required)
  gdcNo: z.string().min(1, { message: 'GDC number is required.' }),
})
.refine(data => {
  // Ensure that at least one checkbox for X-ray exposure or size options is selected
  const exposureOrSizeOptions = [
    data.full1, data.full2, data.full3, data.full4,
    data.sectional1, data.sectional2, data.sectional3, data.sectional4, data.sectional5, data.sectional6,
    data.exposure1, data.exposure2, data.size1, data.size2, data.size3, data.size4,
    data.size8x8cm1, data.size8x8cm2, data.size8x8cm3, data.size8x8cm4, data.size8x8cm5,
    data.size8x8cm6, data.size8x8cm7, data.size5x5cm1, data.size5x5cm2, data.size5x5cm3,
    data.size5x5cm4, data.size5x5cm5, data.size5x5cm6, data.size5x5cm7, data.size5x5cm8,
    data.size11x10cm1
  ];

  if (exposureOrSizeOptions.every(option => !option)) {
    return false; // At least one exposure or size option should be selected
  }

  // Ensure at least one stent checkbox is selected
  if (!data.stentToBeWornYes && !data.stentToBeWornNo) {
    return false;
  }

  return true;
}, {
  message: 'Please select at least one X-ray exposure or size option, and specify whether a stent will be worn.',
  path: ['full1'], // This error message will show in the first exposure option
});

export function CBCTOPTReferralFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [explanationLength, setExplanationLength] = useState(0); 
  const [medicalHistoryLength, setMedicialHistoryLength] = useState(0); 

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: '',
      phone: '',
      referralType: '',
      message: '',
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
      reasonAndJustification: '',
      medicalHistory: '',
      full1: false,
      full2: false,
      full3: false,
      full4: false,
      sectional1: false,
      sectional2: false,
      sectional3: false,
      sectional4: false,
      sectional5: false,
      sectional6: false,
      exposure1: false,
      exposure2: false,
      size1: false,
      size2: false,
      size3: false,
      size4: false,
      size8x8cm1: false,
      size8x8cm2: false,
      size8x8cm3: false,
      size8x8cm4: false,
      size8x8cm5: false,
      size8x8cm6: false,
      size8x8cm7: false,
      size5x5cm1: false,
      size5x5cm2: false,
      size5x5cm3: false,
      size5x5cm4: false,
      size5x5cm5: false,
      size5x5cm6: false,
      size5x5cm7: false,
      size5x5cm8: false,
      size11x10cm1: false,
      stentToBeWornYes: false,
      stentToBeWornNo: false,
      dentistSignature: '',
      gdcNo: '',
    },
  });

  const { register, setValue } = form;

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
            <h2 className='text-3xl font-bold text-center'>CBCT/ OPT referral</h2>
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
                      Purpose of Referral (fees collected directly from the patient)
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
                                      OPG £50
                                    </SelectItem>
                                    <SelectItem value='second-opinion' className='text-md lg:text-lg'>
                                      CBCT without report £150
                                    </SelectItem>
                                    <SelectItem value='consultation-and-treatment' className='text-md lg:text-lg'>
                                      CBCT with report £250
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
                    <h3 className='text-lg font-bold'>Referral Requirements: </h3>
                    <p>
                      The referring dentist is responsible for supplying us sufficient information to justify an
                      appropriate exposure. We request all parts of this form to be completed in advance to avoid any
                      delay arranging the patients appointment.
                    </p>
                  </div>
                  <div className='space-y-3'>
                    <Label htmlFor='reasonAndJustification' className='text-lg font-medium'>
                      Reason and Justification:
                    </Label>
                    <FormField
                      control={form.control}
                      name='reasonAndJustification'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              id='explanation'
                              placeholder='Reason and Justification'
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
                  <div className='flex flex-col items-start mt-2'>
                    <h3 className='text-lg font-bold'>2D field of view required:</h3>
                    <p className='mb-2 mt-4'>Full:</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          id='full1'
                          {...register('full1')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('full1', checked)}
                        />
                        <Label htmlFor='full1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full OPG inc condyles
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='full2'
                          {...register('full2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('full2', checked)}
                        />
                        <Label htmlFor='full2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full OPG excluding condyles
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='full3'
                          {...register('full3')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('full3', checked)}
                        />
                        <Label htmlFor='full3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Condyles only
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='full4'
                          {...register('full4')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('full4', checked)}
                        />
                        <Label htmlFor='full4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Bitewings (if patient unable to tolerate I/O films)
                        </Label>
                      </div>
                    </div>
                    <p className='mb-2 mt-4'>Sectional:</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                      <div>
                        <Checkbox
                          id='sectional1'
                          {...register('sectional1')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('sectional1', checked)}
                        />
                        <Label htmlFor='sectional1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          URQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='sectional2'
                          {...register('sectional2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('sectional2', checked)}
                        />
                        <Label htmlFor='sectional2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          ULQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='sectional3'
                          {...register('sectional3')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('sectional3', checked)}
                        />
                        <Label htmlFor='sectional3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full Maxilla
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='sectional4'
                          {...register('sectional4')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('sectional4', checked)}
                        />
                        <Label htmlFor='sectional4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LRQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='sectional5'
                          {...register('sectional5')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('sectional5', checked)}
                        />
                        <Label htmlFor='sectional5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LLQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='sectional6'
                          {...register('sectional6')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('sectional6', checked)}
                        />
                        <Label htmlFor='sectional6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full Mandible
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start mt-2'>
                    <h3 className='text-lg font-bold mb-4'>Exposure:</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          id='exposure1'
                          {...register('exposure1')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('exposure1', checked)}
                        />
                        <Label htmlFor='exposure1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Regular (high quality image)
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='exposure2'
                          {...register('exposure2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('exposure2', checked)}
                        />
                        <Label htmlFor='exposure2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Quick (reduced exposure, good quality image)
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start mt-2'>
                    <h3 className='text-lg font-bold mb-4'>Patient Size:</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          id='size1'
                          {...register('size1')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size1', checked)}
                        />
                        <Label htmlFor='size1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Size 1 (child)
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size2'
                          {...register('size2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size2', checked)}
                        />
                        <Label htmlFor='size2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Size 2 (small adult)
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size3'
                          {...register('size3')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size3', checked)}
                        />
                        <Label htmlFor='size3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Size 3 (average adult)
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size4'
                          {...register('size4')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size4', checked)}
                        />
                        <Label htmlFor='size4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Size 4 (large adult)
                        </Label>
                      </div>
                    </div>
                  </div>
                  <p className='mt-3'>
                    <span className='font-bold'>3D field of view:</span> For CBCT referrals, if an intra-oral radiograph
                    of the area is available please attach it for justification purposes.
                  </p>
                  <div className='flex flex-col items-start mt-2'>
                    <p className=' mb-2'>8x8cm:</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          id='size8x8cm1'
                          {...register('size8x8cm1')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm1', checked)}
                        />
                        <Label htmlFor='size8x8cm1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full upper
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size8x8cm2'
                          {...register('size8x8cm2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm2', checked)}
                        />
                        <Label htmlFor='size8x8cm2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full lower
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size8x8cm3'
                          {...register('size8x8cm3')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm3', checked)}
                        />
                        <Label htmlFor='size8x8cm3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full upper and lower
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size8x8cm4'
                          {...register('size8x8cm4')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm4', checked)}
                        />
                        <Label htmlFor='size8x8cm4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          URQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size8x8cm5'
                          {...register('size8x8cm5')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm5', checked)}
                        />
                        <Label htmlFor='size8x8cm5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          ULQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size8x8cm6'
                          {...register('size8x8cm6')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm6', checked)}
                        />
                        <Label htmlFor='size8x8cm6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LRQ
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size8x8cm7'
                          {...register('size8x8cm7')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size8x8cm7', checked)}
                        />
                        <Label htmlFor='size8x8cm7' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LLQ
                        </Label>
                      </div>
                    </div>
                    <p className='mt-4 mb-2'>5x5cm (sectional):</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                      <div>
                        <Checkbox
                          id='size5x5cm1'
                          {...register('size5x5cm1')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm1', checked)}
                        />
                        <Label htmlFor='size5x5cm1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          UR8-6
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm2'
                          {...register('size5x5cm2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm2', checked)}
                        />
                        <Label htmlFor='size5x5cm2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          UR6-4
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm3'
                          {...register('size5x5cm3')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm3', checked)}
                        />
                        <Label htmlFor='size5x5cm3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Upper 3-3
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm4'
                          {...register('size5x5cm4')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm4', checked)}
                        />
                        <Label htmlFor='size5x5cm4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          UL4-6
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm5'
                          {...register('size5x5cm5')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm5', checked)}
                        />
                        <Label htmlFor='size5x5cm5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          UL6-8
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm6'
                          {...register('size5x5cm6')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm6', checked)}
                        />
                        <Label htmlFor='size5x5cm6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LR8-6
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm8'
                          {...register('size5x5cm8')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm8', checked)}
                        />
                        <Label htmlFor='size5x5cm8' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LL6-8
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          id='size5x5cm7'
                          {...register('size5x5cm7')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size5x5cm7', checked)}
                        />
                        <Label htmlFor='size5x5cm7' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          LR6-4
                        </Label>
                      </div>
                    </div>
                    <p className='mt-4 mb-2'>11x10cm:</p>
                    <div>
                      <Checkbox
                        id='size11x10cm1'
                        {...register('size11x10cm1')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('size11x10cm1', checked)}
                      />
                      <Label htmlFor='size11x10cm1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Full upper and lower including complete maxillary sinus view
                      </Label>
                    </div>
                  </div>
                  <p className='mt-3'>
                    <span className='font-bold'>Exposure:</span> Standard image resolution will be used unless you
                    specifically request high or low resolution.
                  </p>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    <div>
                      <Checkbox
                        id='resolution1'
                        {...register('resolution1')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('resolution1', checked)}
                      />
                      <Label htmlFor='resolution1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        High Definition (HD)
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='resolution2'
                        {...register('resolution2')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('resolution2', checked)}
                      />
                      <Label htmlFor='resolution2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Low resolution
                      </Label>
                    </div>
                  </div>
                  <p className='mt-3 font-bold'>Radiographic stent to be worn:</p>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    <div>
                      <Checkbox
                        id='stentToBeWornYes'
                        {...register('stentToBeWornYes')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('stentToBeWornYes', checked)}
                      />
                      <Label htmlFor='stentToBeWornYes' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        YES
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='stentToBeWornNo'
                        {...register('stentToBeWornNo')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('stentToBeWornNo', checked)}
                      />
                      <Label htmlFor='stentToBeWornNo' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        NO
                      </Label>
                    </div>
                  </div>
                  <p className='mt-3 font-bold'>Reporting:</p>
                  <div className='grid grid-cols-1  gap-2'>
                    <div>
                      <Checkbox
                        id='report1'
                        {...register('report1')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('report1', checked)}
                      />
                      <Label htmlFor='report1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        I would like a report by the Consultant Radiologist Dr. Young
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='report2'
                        {...register('report2')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('report2', checked)}
                      />
                      <Label htmlFor='report2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        I will take responsibility and undertake to report on radiographs / scan as required by IR(ME)R
                        2000/2006
                      </Label>
                    </div>
                  </div>
                  <p className='mt-3'>
                    <span className='font-bold'>Declaration:</span> By completing below, you declare that you:
                  </p>
                  <div className='grid grid-cols-1 gap-2'>
                    <div>
                      <Checkbox
                        id='declaration1'
                        {...register('declaration1')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration1', checked)}
                      />
                      <Label htmlFor='declaration1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Agree and understand to the processing of your personal data as the referring clinician
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='declaration2'
                        {...register('declaration2')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration2', checked)}
                      />
                      <Label htmlFor='declaration2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Agree you have made the patient aware of this referral and the provision of their data for this
                        purpose
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='declaration3'
                        {...register('declaration3')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration3', checked)}
                      />
                      <Label htmlFor='declaration3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Have received Level 1 CBCT training to request this referral
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='declaration4'
                        {...register('declaration4')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration4', checked)}
                      />
                      <Label htmlFor='declaration4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Have received Level 2 CBCT training to report on this scan
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='declaration5'
                        {...register('declaration5')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration5', checked)}
                      />
                      <Label htmlFor='declaration5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Are registered and appropriately trained to request radiographic investigation
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='declaration6'
                        {...register('declaration6')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration6', checked)}
                      />
                      <Label htmlFor='declaration6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Will consent your patient in advance of the investigation and have informed them of the
                        accociated involved.
                      </Label>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className='space-y-3'>
                      <Label htmlFor='dentistSignature' className='text-lg font-medium'>
                        Dentist signature
                      </Label>
                      <FormField
                        control={form.control}
                        name='dentistSignature'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='dentistSignature'
                                placeholder='Dentist signature'
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
                      <Label htmlFor='gdcNo' className='text-lg font-medium'>
                        GDC NO
                      </Label>
                      <FormField
                        control={form.control}
                        name='gdcNo'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='gdcNo'
                                placeholder='GDC NO'
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
                  <p>
                    Unless otherwise specified the image data will be supplied in DICOM format. The Sidexis viewing
                    software (compatible with Windows) will be included in the file. Files will be password protected
                    and sent to the e-mail provided via WeTransfer.
                  </p>
                  <div className='space-y-3'>
                    <p>
                      This confidential form provides us with the information we require to receive a patient referral.
                      The information contained within this form should be true and accurate to the best of your
                      knowledge and with the patients consent. By submitting this form, we will securely collect yours
                      and your patients details. We will then store and process this information in accordance with our
                      Privacy Policy.
                    </p>
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
