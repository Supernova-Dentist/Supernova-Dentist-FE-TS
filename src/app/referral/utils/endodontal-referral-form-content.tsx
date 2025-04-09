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

const formSchema = z
  .object({
    // Required fields for referring dentist and patient
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    dateOfBirth: z.coerce.date({ message: 'Invalid date.' }),
    phone: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),
    referralType: z.string().min(1, { message: 'Please select a referral type.' }),
    message: z.string().min(5, { message: 'Message must be at least 5 characters.' }),

    // Required fields for practice information (added as required)
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

    // Referral-related information (all required)
    referralPurpose: z.string().min(5, { message: 'Please specify the referral purpose.' }),
    referralReason: z.string().min(5, { message: 'Please specify the referral reason.' }),
    explanation: z.string().min(5, { message: 'Please provide a detailed explanation.' }),
    medicalHistory: z.string().min(5, { message: 'Please provide relevant medical history.' }),

    // Endodontic treatment options (at least one treatment should be selected)
    consultation: z.boolean(),
    secondOpinion: z.boolean(),
    consultationAndTreatment: z.boolean(),
    rootCanalTreatment: z.boolean(),
    rootCanalRetreatment: z.boolean(),
    postOrInstrumentRemoval: z.boolean(),
    perforationRepair: z.boolean(),
    resorptionTreatment: z.boolean(),
    traumaTreatmentOrDiagnosis: z.boolean(),
    bleaching: z.boolean(),
    endodonticSurgery: z.boolean(),
    postEndo1: z.boolean(),
    postEndo2: z.boolean(),
    postEndo3: z.boolean(),
    postEndo4: z.boolean(),
    postEndo5: z.boolean(),

    // Consent fields (required for legal reasons)
    clinicianConsent: z.boolean().refine((val) => val, { message: 'Clinician consent is required.' }),
    patientConsent: z.boolean().refine((val) => val, { message: 'Patient consent is required.' }),
  })
  .refine(
    (data) => {
      // Ensure at least one endodontic treatment checkbox is selected
      const treatments = [
        data.consultation,
        data.secondOpinion,
        data.consultationAndTreatment,
        data.rootCanalTreatment,
        data.rootCanalRetreatment,
        data.postOrInstrumentRemoval,
        data.perforationRepair,
        data.resorptionTreatment,
        data.traumaTreatmentOrDiagnosis,
        data.bleaching,
        data.endodonticSurgery,
        data.postEndo1,
        data.postEndo2,
        data.postEndo3,
        data.postEndo4,
        data.postEndo5,
      ];
      if (treatments.every((treatment) => !treatment)) {
        return false; // At least one treatment needs to be selected
      }
      return true;
    },
    {
      message: 'Please select at least one endodontic treatment.',
      path: ['consultation'], // Error will appear on the first treatment checkbox field
    }
  );

export function EndodontalReferralFormContent() {
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
      consultation: false,
      secondOpinion: false,
      consultationAndTreatment: false,
      rootCanalTreatment: false,
      rootCanalRetreatment: false,
      postOrInstrumentRemoval: false,
      perforationRepair: false,
      resorptionTreatment: false,
      traumaTreatmentOrDiagnosis: false,
      bleaching: false,
      endodonticSurgery: false,
      postEndo1: false,
      postEndo2: false,
      postEndo3: false,
      postEndo4: false,
      postEndo5: false,
      patientConsent: false,
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

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className='container mx-auto md:px-6'>
          <motion.div
            className='mx-auto max-w-2xl space-y-6 bg-white p-8 md:p-12 rounded-lg shadow-lg'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold text-center'>Endodontal Referral</h2>
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
                  <div className='flex flex-col space-y-1'>
                    <h3 className='text-lg font-bold'>Endodontic Treatment</h3>
                    <p className='mt-4 mb-2'>Endodontic treatment:</p>
                    <div className='flex items-center mt-2'>
                      <Checkbox
                        id='consultation'
                        {...register('consultation')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('consultation', checked)}
                      />
                      <Label htmlFor='consultation' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Consultation
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='secondOpinion'
                        {...register('secondOpinion')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('secondOpinion', checked)}
                      />
                      <Label htmlFor='secondOpinion' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Second Opinion
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='consultationAndTreatment'
                        {...register('consultationAndTreatment')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('consultationAndTreatment', checked)}
                      />
                      <Label htmlFor='optOutEmails' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Consultation and Treatment
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='rootCanalTreatment'
                        {...register('rootCanalTreatment')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('rootCanalTreatment', checked)}
                      />
                      <Label htmlFor='rootCanalTreatment' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Root canal treatment
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='rootCanalRetreatment'
                        {...register('rootCanalRetreatment')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('rootCanalRetreatment', checked)}
                      />
                      <Label
                        htmlFor='rootCanalRetreatment'
                        className='ml-3 text-sm text-muted-foreground text-gray-500'
                      >
                        Root canal retreatment
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postOrInstrumentRemoval'
                        {...register('postOrInstrumentRemoval')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postOrInstrumentRemoval', checked)}
                      />
                      <Label
                        htmlFor='postOrInstrumentRemoval'
                        className='ml-3 text-sm text-muted-foreground text-gray-500'
                      >
                        Removal of post / instrument
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='perforationRepair'
                        {...register('perforationRepair')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('perforationRepair', checked)}
                      />
                      <Label htmlFor='perforationRepair' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Repair of perforation
                      </Label>
                    </div>

                    <div className='flex items-center'>
                      <Checkbox
                        id='resorptionTreatment'
                        {...register('resorptionTreatment')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('resorptionTreatment', checked)}
                      />
                      <Label htmlFor='resorptionTreatment' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Treatment of resorption
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='traumaTreatmentOrDiagnosis'
                        {...register('traumaTreatmentOrDiagnosis')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('traumaTreatmentOrDiagnosis', checked)}
                      />
                      <Label
                        htmlFor='traumaTreatmentOrDiagnosis'
                        className='ml-3 text-sm text-muted-foreground text-gray-500'
                      >
                        Diagnosis / Treatment of trauma
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='bleaching'
                        {...register('bleaching')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('bleaching', checked)}
                      />
                      <Label htmlFor='bleaching' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Internal non-vital bleaching following specialist root treatment
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='endodonticSurgery'
                        {...register('endodonticSurgery')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('endodonticSurgery', checked)}
                      />
                      <Label htmlFor='endodonticSurgery' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Endodontic Surgery (Apicectomy, Hemisection, Amputation, Fracture investigation)
                      </Label>
                    </div>
                    <p className='mt-4 mb-2'>Post-endodontic treatment:</p>
                    <div className='flex items-center mt-2'>
                      <Checkbox
                        id='postEndo1'
                        {...register('postEndo1')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo1', checked)}
                      />
                      <Label htmlFor='postEndo1' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please provide root canal treatment and send the patient back for the restoration
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postEndo2'
                        {...register('postEndo2')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo2', checked)}
                      />
                      <Label htmlFor='postEndo2' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please preserve old crown if possible
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postEndo3'
                        {...register('postEndo3')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo3', checked)}
                      />
                      <Label htmlFor='postEndo3' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please provide root canal treatment, core build up and post where necessary
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postEndo4'
                        {...register('postEndo4')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo4', checked)}
                      />
                      <Label htmlFor='postEndo4' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please provide root canal treatment and leave space for a post
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postEndo5'
                        {...register('postEndo5')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo5', checked)}
                      />
                      <Label htmlFor='postEndo5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please provide root canal treatment and place onlay/crown in Supernova Dental Practice
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postEndo5'
                        {...register('postEndo5')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo5', checked)}
                      />
                      <Label htmlFor='postEndo5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please organise extraction of the tooth in the Bond Dental Clinic if unrestorable or fractured
                      </Label>
                    </div>
                    <div className='flex items-center'>
                      <Checkbox
                        id='postEndo5'
                        {...register('postEndo5')}
                        defaultChecked={false}
                        onCheckedChange={(checked: boolean) => setValue('postEndo5', checked)}
                      />
                      <Label htmlFor='postEndo5' className='ml-3 text-sm text-muted-foreground text-gray-500'>
                        Please arrange for a consultation in the Bond Dental Clinic for a possible implant placement if
                        required
                      </Label>
                    </div>
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
                  <div className='flex items-center'>
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
