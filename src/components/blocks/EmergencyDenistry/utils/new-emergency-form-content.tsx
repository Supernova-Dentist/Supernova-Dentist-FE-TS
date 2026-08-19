/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import BarLoader from '@/components/BarLoader/BarLoader';
import { SOCIAL_CTAS } from '@/components/CornerNav/CornerNav';
import RedirectProgressBar from '@/components/RedirectProgressBar/RedirectProgressBar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FileUpload } from '@/components/ui/file-upload';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { DentallyPortal } from '@/lib/constants';
import { getTracking } from '@/lib/tracking';
import { zodResolver } from '@hookform/resolvers/zod';
import { half } from '@tsparticles/engine';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { MdFileUpload } from 'react-icons/md';
import { z } from 'zod';

// Define the max character limit
const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  // Patient information
  patientTitle: z.string().min(1, { message: 'Please provide the patient’s title.' }),
  firstName: z.string().min(2, { message: 'Please provide the patient’s first name.' }),
  lastName: z.string().min(2, { message: 'Please provide the patient’s last name.' }),
  address: z.string().min(1, { message: 'Please provide the patient’s address.' }),
  postcode: z.string().min(1, { message: 'Please provide the patient’s postcode.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  dateOfBirth: z.coerce.date({ message: 'Invalid date.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),

  // Referral details
  reasonAndJustification: z.string().min(5, { message: 'Please provide reason and justification.' }),

  // Pain, swelling, medication, treatment history
  painExplanation: z.string().optional(),
  swellingExplanation: z.string().optional(),
  handleMedicationExplanation: z.string().optional(),
  previousDentalTreatmentExplanation: z.string().optional(),

  currentlyInPain: z.boolean(),
  currentlyNotInPain: z.boolean(),

  // Sleep impact & pain relief checkboxes
  awakeAtNightYes: z.boolean(),
  awakeAtNightNo: z.boolean(),
  takenPainReliefYes: z.boolean(),
  takenPainReliefNo: z.boolean(),

  hotSensitivity: z.boolean(),
  coldSensitivity: z.boolean(),
  noTemperatureSensitivity: z.boolean(),

  painReliefHelping: z.boolean(),
  painReliefWorsening: z.boolean(),
  painReliefConsistent: z.boolean(),
  painReliefNA: z.boolean(),
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

export function NewEmergencyFormContent() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [explanationLength, setExplanationLength] = useState(0);
  const [painExplanationLength, setPainExplanationLength] = useState(0);
  const [swellingExplanationLength, setSwellingExplanationLength] = useState(0);
  const [showRedirectBar, setShowRedirectBar] = useState(false);
  const redirectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const redirectedRef = useRef(false);
  const [medicationExplanationLength, setMedicationExplanationLength] = useState(0);
  const [previousDentalTreatmentExplanationLength, setPreviousDentalTreatmentExplanationLength] = useState(0);
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientTitle: '',
      firstName: '',
      lastName: '',
      address: '',
      postcode: '',
      phone: '',
      email: '',
      dateOfBirth: '',

      reasonAndJustification: '',
      painExplanation: '',
      swellingExplanation: '',
      handleMedicationExplanation: '',
      previousDentalTreatmentExplanation: '',

      currentlyInPain: false,
      currentlyNotInPain: false,

      awakeAtNightYes: false,
      awakeAtNightNo: false,

      takenPainReliefYes: false,
      takenPainReliefNo: false,

      referralPurpose: '',

      hotSensitivity: false,
      coldSensitivity: false,
      noTemperatureSensitivity: false,

      painReliefHelping: false,
      painReliefWorsening: false,
      painReliefConsistent: false,
      painReliefNA: false,
    },
  });

  const { register, setValue } = form;

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const decodedSource = decodeURIComponent(pathname);
      const cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;

      const tracking = getTracking();

      const conversionPage = {
        pageUrl: window.location.href,
        pagePath: window.location.pathname,
        visitDate: new Date().toISOString(),
      };

      const formData = new FormData();

      // Basic fields
      formData.append('referralType', 'Exisiting-PT-Emergency');
      formData.append('source', cleanedSource);

      // Form fields
      for (const key in data) {
        if (key !== 'referralType' && data[key]) {
          formData.append(key, data[key]);
        }
      }

      // Tracking fields
      for (const [key, value] of Object.entries(tracking ?? {})) {
        if (value !== undefined && value !== null) {
          formData.append(`tracking[${key}]`, String(value));
        }
      }

      // Conversion page
      formData.append('tracking[conversionPage][pageUrl]', conversionPage.pageUrl);
      formData.append('tracking[conversionPage][pagePath]', conversionPage.pagePath);
      formData.append('tracking[conversionPage][visitDate]', conversionPage.visitDate);

      // Files
      uploadedFiles.slice(0, 3).forEach((file: File) => {
        formData.append('attachments', file);
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/referral`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const contentType = response.headers.get('content-type');

      const responseData = contentType?.includes('application/json') ? await response.json() : await response.text();

      setSubmittedData(data);
      setSuccessModalVisible(true);

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: 'EmergencyPatientLead',
      });

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'EmergencyPatientLead');
      }

      setShowRedirectBar(true);

      // 5 second delay before redirecting to patient portal =>

      redirectTimeoutRef.current = setTimeout(handleRedirect, 5000);

      form.reset();
    } catch (error) {
      console.error('There was a problem with the form submission:', error);
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  function goToPortal() {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    window.location.href = `${DentallyPortal}/book`;
  }

  function handleRedirect() {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'redirect_to_patient_portal', {
        send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        event_callback: goToPortal,
      });

      setTimeout(goToPortal, 500);
    } else {
      goToPortal();
    }
  }

  function handleWaitForCallClick() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }
    // Trigger Google Ads event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'wait_for_call', {
        send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
      });
    }

    setSuccessModalVisible(false);
    setShowRedirectBar(false);
    form.reset();
  }

  function handlePatientPortalClick() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }

    window.gtag('event', 'click_to_patient_portal_in_modal', {
      send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
      event_callback: goToPortal,
    });

    setTimeout(goToPortal, 500);

    setSuccessModalVisible(false);
    setShowRedirectBar(false);
    form.reset();
  }

  const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const explanation = e.target.value;

    setExplanationLength(explanation.length); // Update the message length
  };

  const handlePainExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const painExlanation = e.target.value;
    setPainExplanationLength(painExlanation.length); // Update the message length
  };
  const handleSwellingExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const swellingExplanation = e.target.value;
    setSwellingExplanationLength(swellingExplanation.length); // Update the message length
  };
  const handleMedicationExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const medicationExplanation = e.target.value;
    setMedicationExplanationLength(medicationExplanation.length); // Update the message length
  };
  const handlePreviousDentalTreatmentExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const previousDentalTreatmentExplanation = e.target.value;
    setPreviousDentalTreatmentExplanationLength(previousDentalTreatmentExplanation.length); // Update the message length
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
              <form
                id='emergency-enquiry-form'
                onSubmit={form.handleSubmit(handleSubmit, onError)}
                className='space-y-8'
              >
                <div className='grid gap-6'>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='space-y-3'>
                      <Label htmlFor='patientTitle' className='text-lg font-medium'>
                        Title
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
                      <Label htmlFor='phone' className='text-lg font-medium'>
                        Home/Mobile Number
                      </Label>
                      <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                id='phone'
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

                  {/* Issue Explanation */}
                  <div className='space-y-3'>
                    <h3 className='text-lg font-bold'>Tell us about the problem: </h3>
                    <p>The answers to the following will help us more efficiently prepare for your appointment.</p>
                  </div>

                  {/* Reason and Justification */}
                  <div className='space-y-3'>
                    <Label htmlFor='reasonAndJustification' className='text-lg font-medium'>
                      What is the issue? Where is the issue? Which side? Which tooth?
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
                    <div className='text-sm text-gray-500'>
                      {explanationLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>
                  </div>

                  {/* Are you in pain? */}
                  <div className='flex flex-col justify-center items-center mt-2 space-y-3'>
                    <h3 className='text-lg font-bold'>Are you currently in pain?:</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          disabled={form.watch('currentlyNotInPain')}
                          id='currentlyInPain'
                          {...register('currentlyInPain')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('currentlyInPain', checked)}
                        />
                        <Label htmlFor='currentlyInPain' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Yes
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('currentlyInPain')}
                          id='currentlyNotInPain'
                          {...register('currentlyNotInPain')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('currentlyNotInPain', checked)}
                        />
                        <Label
                          htmlFor='currentlyNotInPain'
                          className='ml-3 text-sm text-muted-foreground text-gray-500'
                        >
                          No
                        </Label>
                      </div>
                    </div>

                    {/* Pain Explanation */}
                    <Label htmlFor='painExplanation' className='text-lg font-medium'>
                      If so, how long have you been in pain and what&apos;s the severity of the pain? Can it be
                      described (e.g., sharp/dull)?
                    </Label>
                    <FormField
                      control={form.control}
                      name='painExplanation'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl className='w-full'>
                            <Textarea
                              id='painExplanation'
                              {...register('painExplanation')}
                              placeholder='Pain Explanation'
                              rows={5}
                              {...field}
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handlePainExplanationChange(e);
                              }}
                              className='text-md lg:text-lg p-3 w-full'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='text-sm text-gray-500 pb-2'>
                      {painExplanationLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>

                    {/* Awake at night */}
                    <p className='mt-3'>Are you being kept awake at night?</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          disabled={form.watch('awakeAtNightNo')}
                          id='awakeAtNightYes'
                          {...register('awakeAtNightYes')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('awakeAtNightYes', checked)}
                        />
                        <Label htmlFor='awakeAtNightYes' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Yes
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('awakeAtNightYes')}
                          id='awakeAtNightNo'
                          {...register('awakeAtNightNo')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('awakeAtNightNo', checked)}
                        />
                        <Label htmlFor='awakeAtNightNo' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          No
                        </Label>
                      </div>
                    </div>

                    {/* Pain relief */}
                    <p className='mt-3'>Have you taken pain relief?</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          disabled={form.watch('takenPainReliefNo')}
                          id='takenPainReliefYes'
                          {...register('takenPainReliefYes')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('takenPainReliefYes', checked)}
                        />
                        <Label
                          htmlFor='takenPainReliefYes'
                          className='ml-3 text-sm text-muted-foreground text-gray-500'
                        >
                          Yes
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('takenPainReliefYes')}
                          id='takenPainReliefNo'
                          {...register('takenPainReliefNo')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('takenPainReliefNo', checked)}
                        />
                        <Label htmlFor='takenPainReliefNo' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          No
                        </Label>
                      </div>
                    </div>

                    {/* Temperature Sensitivity */}
                    <p className='mt-3'>Is there pain with too hot or cold temperatures?</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                      <div>
                        <Checkbox
                          disabled={form.watch('noTemperatureSensitivity')}
                          id='hotSensitivity'
                          {...register('hotSensitivity')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('hotSensitivity', checked)}
                        />
                        <Label htmlFor='hotSensitivity' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Yes - Hot
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('noTemperatureSensitivity')}
                          id='coldSensitivity'
                          {...register('coldSensitivity')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('coldSensitivity', checked)}
                        />
                        <Label htmlFor='coldSensitivity' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Yes - Cold
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={form.watch('coldSensitivity') || form.watch('hotSensitivity')}
                          id='noTemperatureSensitivity'
                          {...register('noTemperatureSensitivity')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('noTemperatureSensitivity', checked)}
                        />
                        <Label
                          htmlFor='noTemperatureSensitivity'
                          className='ml-3 text-sm text-muted-foreground text-gray-500'
                        >
                          No
                        </Label>
                      </div>
                    </div>

                    {/* Swelling */}
                    <Label htmlFor='swellingExplanation' className='text-lg font-medium py-2'>
                      Is swelling occurring? If so, where is it, and does it affect swallowing, breathing, or eye/mouth
                      opening?
                    </Label>
                    <FormField
                      control={form.control}
                      name='swellingExplanation'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl className='w-full'>
                            <Textarea
                              id='swellingExplanation'
                              {...register('swellingExplanation')}
                              placeholder='Swelling Explanation'
                              rows={5}
                              {...field}
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handleSwellingExplanationChange(e);
                              }}
                              className='text-md lg:text-lg p-3 w-full'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='text-sm text-gray-500'>
                      {swellingExplanationLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>

                    {/* Medication */}
                    <Label htmlFor='handleMedicationExplanation' className='text-lg font-medium py-2'>
                      Are you currently taking any medication for the pain? If so, what type and what dosage?
                    </Label>
                    <FormField
                      control={form.control}
                      name='handleMedicationExplanation'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl className='w-full'>
                            <Textarea
                              id='handleMedicationExplanation'
                              {...register('handleMedicationExplanation')}
                              placeholder='Medication Explanation'
                              rows={5}
                              {...field}
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handleMedicationExplanationChange(e);
                              }}
                              className='text-md lg:text-lg p-3 w-full'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='text-sm text-gray-500'>
                      {medicationExplanationLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>

                    {/* Pain relief effectiveness */}
                    <p className='mt-3 py-2'>
                      Is the pain getting better, worse, or staying consistent with pain relief?
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      <div>
                        <Checkbox
                          disabled={
                            form.watch('painReliefWorsening') ||
                            form.watch('painReliefConsistent') ||
                            form.watch('painReliefNA')
                          }
                          id='painReliefHelping'
                          {...register('painReliefHelping')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('painReliefHelping', checked)}
                        />
                        <Label htmlFor='painReliefHelping' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          Better
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={
                            form.watch('painReliefHelping') ||
                            form.watch('painReliefConsistent') ||
                            form.watch('painReliefNA')
                          }
                          id='worse'
                          {...register('painReliefWorsening')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('painReliefWorsening', checked)}
                        />
                        <Label
                          htmlFor='painReliefWorsening'
                          className='ml-3 text-sm text-muted-foreground text-gray-500'
                        >
                          Worse
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={
                            form.watch('painReliefHelping') ||
                            form.watch('painReliefWorsening') ||
                            form.watch('painReliefNA')
                          }
                          id='painReliefConsistent'
                          {...register('painReliefConsistent')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('painReliefConsistent', checked)}
                        />
                        <Label
                          htmlFor='painReliefConsistent'
                          className='ml-3 text-sm text-muted-foreground text-gray-500'
                        >
                          Consistent
                        </Label>
                      </div>
                      <div>
                        <Checkbox
                          disabled={
                            form.watch('painReliefWorsening') ||
                            form.watch('painReliefConsistent') ||
                            form.watch('painReliefHelping')
                          }
                          id='painReliefNA'
                          {...register('painReliefNA')}
                          defaultChecked={false}
                          onCheckedChange={(checked: boolean) => setValue('painReliefNA', checked)}
                        />
                        <Label htmlFor='painReliefNA' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                          N/A
                        </Label>
                      </div>
                    </div>

                    {/* Previous Dental Treatment */}
                    <Label htmlFor='previousDentalTreatmentExplanation' className='text-lg font-medium py-2'>
                      Has there been previous dental treatment in the area?
                    </Label>
                    <FormField
                      control={form.control}
                      name='previousDentalTreatmentExplanation'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl className='w-full'>
                            <Textarea
                              id='previousDentalTreatmentExplanation'
                              {...register('previousDentalTreatmentExplanation')}
                              placeholder='Previous Treatment Explanation'
                              rows={5}
                              {...field}
                              maxLength={MAX_MESSAGE_LENGTH}
                              onChange={(e) => {
                                field.onChange(e);
                                handlePreviousDentalTreatmentExplanationChange(e);
                              }}
                              className='text-md lg:text-lg p-3 w-full'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='text-sm text-gray-500'>
                      {previousDentalTreatmentExplanationLength} / {MAX_MESSAGE_LENGTH} characters
                    </div>

                    {/* File Upload */}
                    <div className='max-w-lg mx-auto p-4'>
                      <label htmlFor='fileUpload' className='block mb-2 font-semibold text-gray-800'>
                        File Upload (Relevant photographs)
                      </label>
                      <FileUpload onChange={(files: File[]) => setUploadedFiles(files)} />
                    </div>

                    <Button
                      type='submit'
                      className={`w-full mx-auto max-w-[15rem] text-lg py-3 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={loading}
                    >
                      {loading ? <BarLoader /> : <span className='text-md lg:text-lg'>Submit Form</span>}
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
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='relative w-full max-w-sm rounded-lg bg-white p-8 shadow-lg'>
            <button
              onClick={() => setSuccessModalVisible(false)}
              className='absolute right-2 top-2 text-2xl text-gray-600 hover:text-gray-900'
            >
              <FaTimes />
            </button>

            <h2 className='mb-4 text-2xl font-semibold'>
              Thank you, we have successfully received the emergency dentistry form for {submittedData.firstName}!
            </h2>

            {showRedirectBar && (
              <>
                <p>Preparing your secure booking area…</p>
                <RedirectProgressBar />
              </>
            )}

            <div className='mt-6 flex w-full justify-center gap-4'>
              <button
                onClick={handlePatientPortalClick}
                className='rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95'
              >
                Book Now!
              </button>

              <button
                onClick={handleWaitForCallClick}
                className='rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95'
              >
                Wait For A Call
              </button>
            </div>

            <div className='mt-6 flex justify-center gap-4'>
              {SOCIAL_CTAS.map((l, idx) => (
                <motion.a
                  key={idx}
                  href={l.href}
                  onClick={() => {
                    if (redirectTimeoutRef.current) {
                      clearTimeout(redirectTimeoutRef.current);
                      setShowRedirectBar(false);
                    }
                  }}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: -8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5 + idx * 0.125,
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <l.Component className='text-3xl text-grey transition-colors' />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 relative rounded-lg shadow-lg max-w-md w-full'>
            <button
              onClick={() => setErrorModalVisible(false)}
              className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900'
            >
              <FaTimes />
            </button>
            <h2 className='text-3xl font-semibold mb-6'>Submission Failed</h2>
            <p className='mb-6'>There was a problem with your submission. Please try again later.</p>
            <p className='my-2'>Prefer to book yourself in? Use our patient portal by pressing the button below:</p>
            <div className='w-full flex justify-center mb-4'>
              <Link target='_blank' href={`${DentallyPortal}`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Book Now!
                </button>
              </Link>
            </div>
            <div className='flex gap-4 justify-center mt-6'>
              {SOCIAL_CTAS.map((l, idx) => (
                <motion.a
                  key={idx}
                  href={l.href}
                  target='_blank'
                  initial={{ opacity: 0, y: -8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5 + idx * 0.125,
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                  }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <l.Component className='text-3xl text-grey transition-colors' />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
