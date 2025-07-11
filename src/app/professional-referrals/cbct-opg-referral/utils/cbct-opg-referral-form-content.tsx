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
import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Search from '../../utils/Search';
import { MdFileUpload } from 'react-icons/md';
import { FileUpload } from '@/components/ui/file-upload';
import { half } from '@tsparticles/engine';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  // Required fields for the referring clinician and patient information

  // Required practice information
  practiceName: z.string().min(1, { message: 'Please provide the referring practice name.' }),
  practiceEmail: z.string().email({ message: 'Please provide a valid practice email.' }),
  practicePhone: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),
  clinicianName: z.string().min(2, { message: 'Please provide the referring clinician’s name.' }),
  // GDC number (required)
  gdcNo: z.string().min(1, { message: 'GDC number is required.' }),

  // Required patient information
  patientTitle: z.string().min(1, { message: 'Please provide the patient’s title.' }),
  firstName: z.string().min(2, { message: 'Please provide the patient’s first name.' }),
  lastName: z.string().min(2, { message: 'Please provide the patient’s last name.' }),
  address: z.string().min(1, { message: 'Please provide the patient’s address.' }),
  postcode: z.string().min(1, { message: 'Please provide the patient’s postcode.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  dateOfBirth: z.coerce.date({ message: 'Invalid date.' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),

  // Referral-related information
  referralPurpose: z.string().min(5, { message: 'Please specify the referral purpose.' }),
  reasonAndJustification: z.string().min(5, { message: 'Please provide reason and justification.' }),
  medicalHistory: z.string().min(5, { message: 'Please provide relevant medical history.' }),

  declaration1: z.boolean(),
  declaration2: z.boolean(),
  declaration3: z.boolean(),
  declaration4: z.boolean(),
  declaration5: z.boolean(),
  declaration6: z.boolean(),

  fullOPG: z.boolean(),
  halfOPGLeft: z.boolean(),
  halfOPGRight: z.boolean(),

  size8x8cmFullUpper: z.boolean(),
  size8x8cmFullLower: z.boolean(),
  size8x8cmFullUpperLower: z.boolean(),
  size8x8cmURQ: z.boolean(),
  size8x8cmLRQ: z.boolean(),
  size8x8cmULQ: z.boolean(),
  size8x8cmLLQ: z.boolean(),
  size11x10cmFullUpper: z.boolean(),
  size11x10cmFullUpperLower: z.boolean(),
  // size5x5cmUR8to6: z.boolean(),
  // size5x5cmUR6to4: z.boolean(),
  // size5x5cmUpper3to3: z.boolean(),
  // size5x5cmUL4to6: z.boolean(),
  // size5x5cmUL6to8: z.boolean(),
  // size5x5cmLR8to6: z.boolean(),
  // size5x5cmLL6to8: z.boolean(),
  // size5x5cmLR6to4: z.boolean(),

  // Stent checkbox (at least one must be selected)
  stentToBeWornYes: z.boolean(),
  stentToBeWornNo: z.boolean(),
});
// // Validate that at least one exposure or size checkbox is selected
// .refine(
//   (data) => {
//     const exposureOrSizeOptions = [
//       data.full1,
//       data.full2,
//       data.full3,
//       data.full4,
//       data.sectional1,
//       data.sectional2,
//       data.sectional3,
//       data.sectional4,
//       data.sectional5,
//       data.sectional6,
//       data.exposure1,
//       data.exposure2,
//       data.size1,
//       data.size2,
//       data.size3,
//       data.size4,
//       data.size8x8cm1,
//       data.size8x8cm2,
//       data.size8x8cm3,
//       data.size8x8cm4,
//       data.size8x8cm5,
//       data.size8x8cm6,
//       data.size8x8cm7,
//       data.size5x5cm1,
//       data.size5x5cm2,
//       data.size5x5cm3,
//       data.size5x5cm4,
//       data.size5x5cm5,
//       data.size5x5cm6,
//       data.size5x5cm7,
//       data.size5x5cm8,
//       data.size11x10cm1,
//     ];
//     return exposureOrSizeOptions.some(Boolean);
//   },
//   {
//     message: 'Please select at least one X-ray exposure or size option.',
//     path: ['full1'], // Or another checkbox field as anchor
//   }
// )
// // Validate stent: exactly one must be selected
// .refine((data) => data.stentToBeWornYes !== data.stentToBeWornNo, {
//   message: 'Please select either "Yes" or "No" for whether a stent will be worn—not both.',
//   path: ['stentToBeWornYes', 'stentToBeWornNo'],
// })
// // Validate report: exactly one must be selected
// .refine((data) => data.report1 !== data.report2, {
//   message: 'Please select either one reporting option, not both.',
//   path: ['report1', 'report2'],
// });

export function CBCTOPGReferralFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [explanationLength, setExplanationLength] = useState(0);
  const [medicalHistoryLength, setMedicialHistoryLength] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: '',
      message: '',
      practiceName: '',
      practiceEmail: '',
      practiceAddress: '',
      practicePhone: '',
      clinicianName: '',
      gdcNo: '',
      patientTitle: '',
      firstName: '',
      lastName: '',
      address: '',
      postcode: '',
      phoneNumber: '',
      referralPurpose: '',
      reasonAndJustification: '',
      medicalHistory: '',

      fullOPG: false,
      halfOPGLeft: false,
      halfOPGRight: false,

      size8x8cmFullUpper: false,
      size8x8cmFullLower: false,
      size8x8cmFullUpperLower: false,
      size8x8cmURQ: false,
      size8x8cmLRQ: false,
      size8x8cmULQ: false,
      size8x8cmLLQ: false,
      size11x10cmFullUpper: false,
      size11x10cmFullUpperLower: false,
      // size5x5cmUR8to6: false,
      // size5x5cmUR6to4: false,
      // size5x5cmUpper3to3: false,
      // size5x5cmUL4to6: false,
      // size5x5cmUL6to8: false,
      // size5x5cmLR8to6: false,
      // size5x5cmLL6to8: false,
      // size5x5cmLR6to4: false,

      stentToBeWornYes: false,
      stentToBeWornNo: false,

      highResolution: false,
      lowResolution: false,

      declaration1: false,
      declaration2: false,
      declaration3: false,
      declaration4: false,
      declaration5: false,
      declaration6: false,
    },
  });

  const { register, setValue } = form;

  const onSubmit = async (data: any) => {
    console.log('submitting');
    setLoading(true);

    try {
      const formData = new FormData();

      // Add referralType first
      formData.append('referralType', 'CBCT-OPG');

      // Then append the rest of the fields
      for (const key in data) {
        if (key !== 'referralType' && data[key]) {
          formData.append(key, data[key]);
        }
      }

      // Append files under the same field name 'attachments'
      uploadedFiles.slice(0, 3).forEach((file: File) => {
        formData.append('attachments', file); // note the identical key
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/referral`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const contentType = response.headers.get('content-type');
      const responseData = contentType?.includes('application/json') ? await response.json() : await response.text();

      setSubmittedData(data);
      setSuccessModalVisible(true);
      form.reset();
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

  const handleMedicialHistoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    const medicialHistory = e.target.value;
    setMedicialHistoryLength(medicialHistory.length); // Update the message length
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
            <Form {...form}>
              <form id='printable-cbct-form' onSubmit={form.handleSubmit(handleSubmit, onError)} className='space-y-8'>
                <div className='grid gap-6'>
                  <h3 className='text-lg font-bold'>Referring Practice Details</h3>
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
                                type='tel'
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
                    <Label htmlFor='clinicianName' className='text-lg font-medium'>
                      Referring Clinician Name
                    </Label>
                    <FormField
                      control={form.control}
                      name='clinicianName'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id='clinicianName'
                              placeholder='Referring Clinician Name'
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

                  <h3 className='text-lg font-bold'>Patient Details</h3>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='space-y-3'>
                      <Label htmlFor='patientTitle' className='text-lg font-medium'>
                        Patient Title
                      </Label>
                      <Controller
                        name='patientTitle'
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select onValueChange={field.onChange} value={field.value || ''} defaultValue=''>
                                <SelectTrigger id='patientTitle'>
                                  <SelectValue placeholder='Select title' className='text-md lg:text-lg' />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value='Mr' className='text-md lg:text-lg'>
                                    Mr
                                  </SelectItem>
                                  <SelectItem value='Mrs' className='text-md lg:text-lg'>
                                    Mrs
                                  </SelectItem>
                                  <SelectItem value='Miss' className='text-md lg:text-lg'>
                                    Miss
                                  </SelectItem>
                                  <SelectItem value='Ms' className='text-md lg:text-lg'>
                                    Ms
                                  </SelectItem>
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
                                    <SelectItem value='OPGReferral' className='text-md lg:text-lg'>
                                      OPG £50
                                    </SelectItem>

                                    <SelectItem value='CBCTWithoutReportReferral' className='text-md lg:text-lg'>
                                      CBCT without report £180
                                    </SelectItem>
                                    <SelectItem value='CBCTWithReportReferral' className='text-md lg:text-lg'>
                                      CBCT with report £270
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
                      The referring clinician is responsible for supplying us sufficient information to justify an
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
                              id='reasonAndJustification'
                              {...register('reasonAndJustification')}
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
                              {...register('medicalHistory')}
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
                    <h3 className='text-lg font-bold'>2D field of view required (OPG):</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          disabled={form.watch('referralPurpose') !== 'OPGReferral'}
                          id='fullOPG'
                          {...register('fullOPG')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('fullOPG', checked)}
                        />
                        <Label htmlFor='fullOPG' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Full OPG
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('referralPurpose') !== 'OPGReferral'}
                          id='halfOPGLeft'
                          {...register('halfOPGLeft')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('halfOPGLeft', checked)}
                        />
                        <Label htmlFor='halfOPGLeft' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Half OPG (left)
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('referralPurpose') !== 'OPGReferral'}
                          id='halfOPGRight'
                          {...register('halfOPGRight')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('halfOPGRight', checked)}
                        />
                        <Label htmlFor='halfOPGRight' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Half OPG (right)
                        </Label>
                      </div>
                    </div>

                    <p className='mt-3'>
                      <span className='font-bold text-lg'>3D field of view (CBCT):</span> For CBCT referrals, if an
                      intra-oral radiograph of the area is available please attach it for justification purposes.
                    </p>
                    <div className='flex flex-col items-start mt-2'>
                      <p className=' mb-2'>8x8cm:</p>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmFullUpper'
                            {...register('size8x8cmFullUpper')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmFullUpper', checked)}
                          />
                          <Label
                            htmlFor='size8x8cmFullUpper'
                            className='ml-3 text-sm text-muted-foreground text-gray-500'
                          >
                            Full upper
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmFullLower'
                            {...register('size8x8cmFullLower')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmFullLower', checked)}
                          />
                          <Label
                            htmlFor='size8x8cmFullLower'
                            className='ml-3 text-sm text-muted-foreground text-gray-500'
                          >
                            Full lower
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmFullUpperLower'
                            {...register('size8x8cmFullUpperLower')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmFullUpperLower', checked)}
                          />
                          <Label
                            htmlFor='size8x8cmFullUpperLower'
                            className='ml-3 text-sm text-muted-foreground text-gray-500'
                          >
                            Full upper and lower
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmURQ'
                            {...register('size8x8cmURQ')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmURQ', checked)}
                          />
                          <Label htmlFor='size8x8cmURQ' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            URQ
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmULQ'
                            {...register('size8x8cmULQ')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmULQ', checked)}
                          />
                          <Label htmlFor='size8x8cmULQ' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            ULQ
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmLRQ'
                            {...register('size8x8cmLRQ')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmLRQ', checked)}
                          />
                          <Label htmlFor='size8x8cmLRQ' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            LRQ
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size8x8cmLLQ'
                            {...register('size8x8cmLLQ')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size8x8cmLLQ', checked)}
                          />
                          <Label htmlFor='size8x8cmLLQ' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            LLQ
                          </Label>
                        </div>
                      </div>
                      {/* <p className='mt-4 mb-2'>5x5cm (sectional):</p>
                      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmUR8to6'
                            {...register('size5x5cmUR8to6')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmUR8to6', checked)}
                          />
                          <Label htmlFor='size5x5cmUR8to6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            UR8-6
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmUR6to4'
                            {...register('size5x5cmUR6to4')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmUR6to4', checked)}
                          />
                          <Label htmlFor='size5x5cmUR6to4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            UR6-4
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmUpper3to3'
                            {...register('size5x5cmUpper3to3')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmUpper3to3', checked)}
                          />
                          <Label
                            htmlFor='size5x5cmUpper3to3'
                            className='ml-3 text-sm text-muted-foreground text-gray-500'
                          >
                            Upper 3-3
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmUL4to6'
                            {...register('size5x5cmUL4to6')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmUL4to6', checked)}
                          />
                          <Label htmlFor='size5x5cmUL4to6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            UL4-6
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmUL6to8'
                            {...register('size5x5cmUL6to8')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmUL6to8', checked)}
                          />
                          <Label htmlFor='size5x5cmUL6to8' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            UL6-8
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmLR8to6'
                            {...register('size5x5cmLR8to6')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmLR8to6', checked)}
                          />
                          <Label htmlFor='size5x5cmLR8to6' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            LR8-6
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmLL6to8'
                            {...register('size5x5cmLL6to8')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmLL6to8', checked)}
                          />
                          <Label htmlFor='size5x5cmLL6to8' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            LL6-8
                          </Label>
                        </div>
                        <div>
                          <Checkbox
                            disabled={
                              form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                              form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                            }
                            id='size5x5cmLR6to4'
                            {...register('size5x5cmLR6to4')}
                            defaultChecked={false}
                            onCheckedChange={(checked: boolean) => setValue('size5x5cmLR6to4', checked)}
                          />
                          <Label htmlFor='size5x5cmLR6to4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                            LR6-4
                          </Label>
                        </div>
                      </div> */}
                      <p className='mt-4 mb-2'>11x10cm:</p>
                      <div>
                        <Checkbox
                          disabled={
                            form.watch('referralPurpose') !== 'CBCTWithReportReferral' &&
                            form.watch('referralPurpose') !== 'CBCTWithoutReportReferral'
                          }
                          id='size11x10cmFullUpperLower'
                          {...register('size11x10cmFullUpperLower')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('size11x10cmFullUpperLower', checked)}
                        />
                        <Label
                          htmlFor='size11x10cmFullUpperLower'
                          className='ml-3 text-sm text-muted-foreground text-gray-500'
                        >
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
                          disabled={form.watch('referralPurpose') === 'OPGReferral' || form.watch('lowResolution')}
                          id='highResolution'
                          {...register('highResolution')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('highResolution', checked)}
                        />
                        <Label htmlFor='highResolution' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          High Definition (HD)
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('referralPurpose') === 'OPGReferral' || form.watch('highResolution')}
                          id='lowResolution'
                          {...register('lowResolution')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('lowResolution', checked)}
                        />
                        <Label htmlFor='lowResolution' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Low resolution
                        </Label>
                      </div>
                    </div>
                    <p className='mt-3 font-bold'>Radiographic stent to be worn:</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                      <div>
                        <Checkbox
                          disabled={form.watch('referralPurpose') === 'OPGReferral' || form.watch('stentToBeWornNo')}
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
                          disabled={form.watch('referralPurpose') === 'OPGReferral' || form.watch('stentToBeWornYes')}
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

                    <div className='max-w-lg mx-auto p-4'>
                      <label htmlFor='fileUpload' className='block mb-2 font-semibold text-gray-800'>
                        File Upload (X-Rays, clinical photographs)
                      </label>

                      <FileUpload onChange={(files: File[]) => setUploadedFiles(files)} />
                    </div>
                    <p className='mt-3'>
                      <span className='font-bold'>Declaration:</span> By completing below, you declare that you:
                    </p>
                    <div className='grid grid-cols-1 gap-2'>
                      <div>
                        <Checkbox
                          required
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
                          required
                          id='declaration2'
                          {...register('declaration2')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('declaration2', checked)}
                        />
                        <Label htmlFor='declaration2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Agree you have made the patient aware of this referral and the provision of their data for
                          this purpose
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          // disabled={form.watch('referralPurpose') === 'OPGReferral'}
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
                          // disabled={form.watch('referralPurpose') === 'OPGReferral'}
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
                          required
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
                          required
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

                    <div className='space-y-3'>
                    <p className='mt-3'>
                      Unless otherwise specified the image data will be supplied in DICOM format. The Acteon Imaging
                      Software (compatible with Windows) will be included in the file. Files will be password protected
                      and sent to the e-mail provided via WeTransfer.
                    </p>
                      <p>
                        This confidential form provides us with the information we require to receive a patient
                        referral. The information contained within this form should be true and accurate to the best of
                        your knowledge and with the patients consent. By submitting this form, we will securely collect
                        yours and your patients details. We will then store and process this information in accordance
                        with our Privacy Policy.
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
              Thank you, we have successfully recieved the referral for {submittedData.firstName}!
            </h2>
            <p className='mb-4'>
              One of the Supernova team will be back in touch via the following details regarding your referral:
            </p>
            <p className='mb-4'>
              <strong>Email:</strong> {submittedData.practiceEmail}
            </p>
            <p className='mb-4'>
              <strong>Phone:</strong> {submittedData.practicePhone}
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
