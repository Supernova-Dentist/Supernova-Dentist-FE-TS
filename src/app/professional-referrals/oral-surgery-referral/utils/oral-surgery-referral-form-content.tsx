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
import { FileUpload } from '@/components/ui/file-upload';

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
  reasonAndJustification: z.string().min(5, { message: 'Please provide reason and justification.' }),
  medicalHistory: z.string().min(5, { message: 'Please provide relevant medical history.' }),

  pain: z.boolean().optional(),
  infection: z.boolean().optional(),
  swelling: z.boolean().optional(),
  badTaste: z.boolean().optional(),

  declaration: z.boolean().refine((val) => val, {
    message: 'You must agree to the declaration.',
  }),
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

export function OralSurgeryReferralFormContent() {
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
      reasonAndJustification: '',
      medicalHistory: '',

      pain: false,
      infection: false,
      swelling: false,
      badTaste: false,

      declaration: false,
    },
  });

  const { register, setValue } = form;

  const onSubmit = async (data: any) => {
    console.log('submitting');
    setLoading(true);

    try {
      const formData = new FormData();

      // Add referralType first
      formData.append('referralType', 'Oral Surgery');

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

      console.log('Form submitted successfully:', responseData);
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
    console.log('explanation', explanation);

    setExplanationLength(explanation.length); // Update the message length
  };

  const handleMedicialHistoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('e.target.value', e.target.value);

    const medicialHistory = e.target.value;
    setMedicialHistoryLength(medicialHistory.length); // Update the message length
  };

  // const handleSubmit = (data: any) => {
  //   console.log('Form data before submission:', data);
  //   onSubmit(data).catch(console.error);
  // };

  const handleSubmit = (data: any) => {
    console.log('SUBMIT', data);
    onSubmit(data).catch(console.error);
  };

  const onError = (errors: any) => {
    console.log('FORM ERRORS:', errors);
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
                    <h3 className='text-lg font-bold'>Referral Requirements: </h3>
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

                  <p>Select any symptoms that are being experienced:</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div>
                      <Checkbox
                        id='pain'
                        {...register('pain')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('pain', checked)}
                      />
                      <Label htmlFor='pain' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Pain
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='infection'
                        {...register('infection')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('infection', checked)}
                      />
                      <Label htmlFor='infection' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Infection
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='swelling'
                        {...register('swelling')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('swelling', checked)}
                      />
                      <Label htmlFor='swelling' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Swelling
                      </Label>
                    </div>
                    <div>
                      <Checkbox
                        id='badTaste'
                        {...register('badTaste')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('badTaste', checked)}
                      />
                      <Label htmlFor='badTaste' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Bad Taste
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
                    <span className='font-bold'>Declaration:</span> By completing the form below, you confirm that:
                  </p>
                  <div className='grid grid-cols-1 gap-2'>
                    <div>
                      <Checkbox
                        required
                        id='declaration'
                        {...register('declaration')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('declaration', checked)}
                      />
                      <Label htmlFor='declaration' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        I understand and agree to the processing of my personal data as the referring clinician. I
                        confirm that I have informed the patient about this referral, obtained their consent, and
                        explained any relevant information or risks involved.
                      </Label>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <p>
                      This confidential form provides us with the information required to receive a patient referral.
                      All information should be true and accurate to the best of your knowledge and provided with the
                      patient’s consent. By submitting this form, you agree to the secure collection, storage, and
                      processing of personal data in accordance with our{' '}
                      <a href='/privacy-policy' className='underline text-blue-600 hover:text-blue-800'>
                        Privacy Policy
                      </a>
                      .
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
