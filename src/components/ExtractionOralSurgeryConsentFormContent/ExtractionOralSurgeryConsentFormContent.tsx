/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import BarLoader from '@/components/BarLoader/BarLoader';
import { SOCIAL_CTAS } from '@/components/CornerNav/CornerNav';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { type FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { z } from 'zod';
import SignatureField from '../SignatureField/SignatureField';

const CLINICIAN_GROUPS = [
  {
    label: 'Dentists & Oral Surgeons',
    clinicians: [
      'Dr. Alex Rawlings',
      'Dr. Scott Young',
      'Dr. Cameran Armaghani',
      'Dr. Souad Maddi',
      'Dr. Ashley Saredi',
    ],
  },
  {
    label: 'Dental Therapists',
    clinicians: ['Kayleigh Dowdle'],
  },
] as const;

const PASSCODE_LENGTH = 4;
const KEYPAD_DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

function getLocalDateAndTime() {
  const now = new Date();
  const pad = (value: number) => String(value).padStart(2, '0');

  return {
    date: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`,
    time: `${pad(now.getHours())}:${pad(now.getMinutes())}`,
  };
}

const formSchema = z.object({
  // Patient & Procedure Details
  patientName: z.string().min(2, { message: 'Please provide the patient’s name.' }),

  dateOfBirth: z.string().min(1, { message: 'Please provide the patient’s date of birth.' }),

  dateOfProcedure: z.string().min(1, { message: 'Please provide the date of the procedure.' }),

  treatingClinician: z.string().min(2, { message: 'Please provide the treating clinician or oral surgeon.' }),

  // Proposed Treatment
  teeth: z.string().min(1, { message: 'Please specify the tooth or teeth.' }),

  simpleExtraction: z.boolean(),
  surgicalExtraction: z.boolean(),
  retainedRoots: z.boolean(),
  wisdomToothRemoval: z.boolean(),

  otherProcedure: z.boolean(),
  otherProcedureDetails: z.string().optional(),

  // Risks & Possible Complications
  riskPain: z.boolean(),
  riskSwelling: z.boolean(),
  riskBleeding: z.boolean(),
  riskInfection: z.boolean(),
  riskDelayedHealing: z.boolean(),
  riskDrySocket: z.boolean(),
  riskTrismus: z.boolean(),
  riskAdjacentDamage: z.boolean(),
  riskFracture: z.boolean(),
  riskRetainedRoot: z.boolean(),
  riskBoneTissueDamage: z.boolean(),
  riskSutures: z.boolean(),
  riskFurtherTreatment: z.boolean(),

  // Additional Risks for Lower Teeth
  lowerTeethRisksApplicable: z.boolean(),
  lowerTeethRisksNotApplicable: z.boolean(),

  // Additional Risks for Upper Teeth
  upperTeethRisksApplicable: z.boolean(),
  upperTeethRisksNotApplicable: z.boolean(),

  // Patient-Specific / Additional Risks
  additionalRisks: z.string().optional(),

  // Alternatives to Extraction
  alternativeMonitoring: z.boolean(),
  alternativeRestorative: z.boolean(),
  alternativeRootCanal: z.boolean(),
  alternativeReferral: z.boolean(),
  alternativeOther: z.boolean(),
  alternativeOtherDetails: z.string().optional(),

  // Anaesthetic / Sedation
  anaestheticLocal: z.boolean(),
  anaestheticSedation: z.boolean(),
  anaestheticGeneral: z.boolean(),
  anaestheticOther: z.boolean(),
  anaestheticOtherDetails: z.string().optional(),

  // Patient Consent
  patientConsent: z.boolean().refine((value) => value, {
    message: 'Please confirm that you have read and understood the consent information.',
  }),

  // Patient Signature
  signaturePatientName: z.string().min(2, { message: 'Please provide the patient’s name.' }),

  signatureDateOfBirth: z.string().min(1, { message: 'Please provide the patient’s date of birth.' }),

  patientSignature: z.string().min(1, { message: 'Please provide the patient’s signature.' }),

  consentDate: z.string().min(1, { message: 'Please provide the consent date.' }),

  consentTime: z.string().min(1, { message: 'Please provide the consent time.' }),

  // Clinician Declaration
  clinicianDeclarationPatientName: z.string().min(2, { message: 'Please provide the patient’s name.' }),

  clinicianName: z.string().min(2, { message: 'Please provide the clinician’s name.' }),

  clinicianSignature: z.string().min(1, { message: 'Please provide the clinician’s signature.' }),

  clinicianDeclarationDate: z.string().min(1, { message: 'Please provide the declaration date.' }),

  clinicianDeclarationTime: z.string().min(1, { message: 'Please provide the declaration time.' }),

  clinicianDeclarationConfirmed: z.boolean().refine((value) => value, {
    message: 'Please confirm the clinician declaration.',
  }),

  // Interpreter / Witness
  interpreterWitnessName: z.string().optional(),

  interpreterWitnessRole: z.string().optional(),

  interpreterWitnessSignature: z.string().optional(),

  interpreterWitnessDate: z.string().optional(),

  interpreterWitnessTime: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;
type FormMode = 'clinicianPrep' | 'patientSigning' | 'clinicianReauth' | 'clinicianFinal';

const PREPARATION_FIELDS: Array<keyof FormValues> = [
  'patientName',
  'dateOfBirth',
  'dateOfProcedure',
  'treatingClinician',
  'teeth',
];

const PATIENT_FIELDS: Array<keyof FormValues> = [
  'patientConsent',
  'signaturePatientName',
  'signatureDateOfBirth',
  'patientSignature',
  'consentDate',
  'consentTime',
];
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
//   message: 'Please select either "Yes" or "No" for whether a stent will be worn-not both.',
//   path: ['stentToBeWornYes', 'stentToBeWornNo'],
// })
// // Validate report: exactly one must be selected
// .refine((data) => data.report1 !== data.report2, {
//   message: 'Please select either one reporting option, not both.',
//   path: ['report1', 'report2'],
// });

export function ExtractionOralSurgeryConsentFormContent() {
  const router = useRouter();
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [formMode, setFormMode] = useState<FormMode>('clinicianPrep');
  const [passcodeEntry, setPasscodeEntry] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [isVerifyingPasscode, setIsVerifyingPasscode] = useState(false);
  const patientSectionRef = useRef<HTMLElement | null>(null);
  const clinicianSectionRef = useRef<HTMLElement | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Patient & Procedure Details
      patientName: '',
      dateOfBirth: '',
      dateOfProcedure: '',
      treatingClinician: '',

      // Proposed Treatment
      teeth: '',

      simpleExtraction: false,
      surgicalExtraction: false,
      retainedRoots: false,
      wisdomToothRemoval: false,
      otherProcedure: false,
      otherProcedureDetails: '',

      // Risks & Possible Complications
      riskPain: false,
      riskSwelling: false,
      riskBleeding: false,
      riskInfection: false,
      riskDelayedHealing: false,
      riskDrySocket: false,
      riskTrismus: false,
      riskAdjacentDamage: false,
      riskFracture: false,
      riskRetainedRoot: false,
      riskBoneTissueDamage: false,
      riskSutures: false,
      riskFurtherTreatment: false,

      // Additional Risks
      lowerTeethRisksApplicable: false,
      lowerTeethRisksNotApplicable: false,

      upperTeethRisksApplicable: false,
      upperTeethRisksNotApplicable: false,

      additionalRisks: '',

      // Alternatives to Extraction
      alternativeMonitoring: false,
      alternativeRestorative: false,
      alternativeRootCanal: false,
      alternativeReferral: false,
      alternativeOther: false,
      alternativeOtherDetails: '',

      // Anaesthetic / Sedation
      anaestheticLocal: false,
      anaestheticSedation: false,
      anaestheticGeneral: false,
      anaestheticOther: false,
      anaestheticOtherDetails: '',

      // Patient Consent
      patientConsent: false,

      // Patient Signature
      signaturePatientName: '',
      signatureDateOfBirth: '',
      patientSignature: '',
      consentDate: '',
      consentTime: '',

      // Clinician Declaration
      clinicianDeclarationPatientName: '',
      clinicianName: '',
      clinicianSignature: '',
      clinicianDeclarationDate: '',
      clinicianDeclarationTime: '',
      clinicianDeclarationConfirmed: false,

      // Interpreter / Witness
      interpreterWitnessName: '',
      interpreterWitnessRole: '',
      interpreterWitnessSignature: '',
      interpreterWitnessDate: '',
      interpreterWitnessTime: '',
    },
  });

  const { register, setValue } = form;

  const resetPasscodeEntry = () => {
    setPasscodeEntry('');
    setPasscodeError('');
  };

  const scrollToSection = (section: HTMLElement | null) => {
    window.requestAnimationFrame(() => section?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const unlockClinicianMode = () => {
    resetPasscodeEntry();
    setFormMode('clinicianFinal');
    scrollToSection(clinicianSectionRef.current);
  };

  const verifyClinicianPasscode = async (passcode: string) => {
    setIsVerifyingPasscode(true);

    try {
      const response = await fetch('/api/consent-forms/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      if (!response.ok) {
        setPasscodeEntry('');
        setPasscodeError('Incorrect passcode. Please try again.');
        return;
      }

      unlockClinicianMode();
    } catch {
      setPasscodeEntry('');
      setPasscodeError('Unable to check the passcode. Please try again.');
    } finally {
      setIsVerifyingPasscode(false);
    }
  };

  const handleKeypadDigit = (digit: string) => {
    if (isVerifyingPasscode || passcodeEntry.length >= PASSCODE_LENGTH) return;

    const nextEntry = `${passcodeEntry}${digit}`;
    setPasscodeEntry(nextEntry);
    setPasscodeError('');

    if (nextEntry.length === PASSCODE_LENGTH) void verifyClinicianPasscode(nextEntry);
  };

  const handleBeginPatientMode = async () => {
    const preparationIsValid = await form.trigger(PREPARATION_FIELDS, { shouldFocus: true });

    if (!preparationIsValid) return;

    setValue('signaturePatientName', form.getValues('patientName'));
    setValue('signatureDateOfBirth', form.getValues('dateOfBirth'));
    setValue('clinicianDeclarationPatientName', form.getValues('patientName'));
    setValue('clinicianName', form.getValues('treatingClinician'));
    form.clearErrors(PATIENT_FIELDS);
    setFormMode('patientSigning');
    scrollToSection(patientSectionRef.current);
  };

  const handlePatientSignatureChange = (signature: string, onChange: (value: string) => void) => {
    onChange(signature);

    if (signature === '') {
      setValue('consentDate', '');
      setValue('consentTime', '');
      return;
    }

    const signedAt = getLocalDateAndTime();
    setValue('consentDate', signedAt.date, { shouldValidate: true });
    setValue('consentTime', signedAt.time, { shouldValidate: true });
  };

  const handleFinishPatientSigning = async () => {
    const patientSectionIsValid = await form.trigger(PATIENT_FIELDS, { shouldFocus: true });

    if (!patientSectionIsValid) return;

    resetPasscodeEntry();
    setFormMode('clinicianReauth');
  };

  const handleClinicianSignatureChange = (signature: string, onChange: (value: string) => void) => {
    onChange(signature);

    if (signature === '') {
      setValue('clinicianDeclarationDate', '');
      setValue('clinicianDeclarationTime', '');
      return;
    }

    const signedAt = getLocalDateAndTime();
    setValue('clinicianDeclarationDate', signedAt.date, { shouldValidate: true });
    setValue('clinicianDeclarationTime', signedAt.time, { shouldValidate: true });
  };

  const handleWitnessSignatureChange = (signature: string, onChange: (value: string) => void) => {
    onChange(signature);

    if (signature === '') {
      setValue('interpreterWitnessDate', '');
      setValue('interpreterWitnessTime', '');
      return;
    }

    const signedAt = getLocalDateAndTime();
    setValue('interpreterWitnessDate', signedAt.date, { shouldValidate: true });
    setValue('interpreterWitnessTime', signedAt.time, { shouldValidate: true });
  };

  const handleEditClinicalDetails = () => {
    const shouldEdit = window.confirm(
      'Changing the clinical details will clear the patient and clinician approvals. The patient will need to review and sign again. Continue?'
    );

    if (!shouldEdit) return;

    setValue('patientConsent', false);
    setValue('patientSignature', '');
    setValue('consentDate', '');
    setValue('consentTime', '');
    setValue('clinicianSignature', '');
    setValue('clinicianDeclarationDate', '');
    setValue('clinicianDeclarationTime', '');
    setValue('clinicianDeclarationConfirmed', false);
    setValue('interpreterWitnessSignature', '');
    setValue('interpreterWitnessDate', '');
    setValue('interpreterWitnessTime', '');
    form.clearErrors();
    setFormMode('clinicianPrep');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const response = await fetch('/api/consent-forms/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit consent form');
      }

      const contentType = response.headers.get('content-type');

      const responseData =
        contentType !== null && contentType.includes('application/json')
          ? await response.json()
          : await response.text();

      console.log('Consent form submitted successfully:', responseData);

      setSubmittedData(data);
      setSuccessModalVisible(true);

      form.reset();
    } catch (error) {
      console.error('There was a problem submitting the consent form:', error);

      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  function handleSuccessModalClose() {
    setSuccessModalVisible(false);
    setSubmittedData(null);
    resetPasscodeEntry();
    form.reset();
    router.replace('/consent-forms');
  }

  const handleSubmit = async (data: FormValues) => {
    await onSubmit(data);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (formMode !== 'clinicianFinal') {
      event.preventDefault();
      return;
    }

    form.handleSubmit(handleSubmit)(event).catch(console.error);
  };

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className='container mx-auto pt-6 md:px-6'>
          <motion.div
            className='mx-auto max-w-2xl space-y-6 bg-white p-8 md:p-12 rounded-lg shadow-lg'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form id='extraction-oral-surgery-consent-form' onSubmit={handleFormSubmit} className='space-y-8'>
                <div
                  role='status'
                  className={`rounded-2xl border p-2 ${
                    formMode === 'patientSigning'
                      ? 'border-blue-200 bg-blue-50'
                      : formMode === 'clinicianFinal'
                        ? 'border-green-200 bg-green-50'
                        : 'border-primary/20 bg-primary/5'
                  }`}
                >
                  <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>Form mode</p>
                      <h1 className='mt-1 text-lg font-semibold'>
                        {formMode === 'patientSigning'
                          ? 'Patient consent and signature'
                          : formMode === 'clinicianFinal'
                            ? 'Clinician final review'
                            : 'Clinician preparation'}
                      </h1>
                      <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                        {formMode === 'patientSigning'
                          ? 'The clinical details are locked. Review the form, confirm consent and sign in the patient section.'
                          : formMode === 'clinicianFinal'
                            ? 'The signed patient record is locked. Complete the clinician declaration, then submit.'
                            : 'Complete the treatment details before handing the device to the patient.'}
                      </p>
                    </div>

                    {formMode === 'clinicianFinal' && (
                      <Button type='button' variant='outline' onClick={handleEditClinicalDetails}>
                        Edit clinical details
                      </Button>
                    )}
                  </div>
                </div>

                <div className='space-y-10'>
                  <fieldset disabled={formMode !== 'clinicianPrep'} className='m-0 min-w-0 space-y-10 border-0 p-0'>
                    {/* Patient & Procedure Details */}
                    <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                      <div className='mb-6 border-b pb-5'>
                        <h2 className='text-xl font-semibold tracking-tight'>Patient & Procedure Details</h2>
                        <p className='mt-1 text-sm text-muted-foreground'>
                          Please complete the following information before proceeding with the consent form.
                        </p>
                      </div>

                      <div className='grid gap-6 md:grid-cols-2'>
                        {/* Patient Name */}
                        <div className='space-y-2 md:col-span-2'>
                          <Label htmlFor='patientName' className='text-sm font-semibold'>
                            Patient Name
                          </Label>

                          <FormField
                            control={form.control}
                            name='patientName'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    id='patientName'
                                    maxLength={75}
                                    placeholder='Enter patient name'
                                    {...field}
                                    className='h-12 text-base'
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Date of Birth */}
                        <div className='space-y-2'>
                          <Label htmlFor='dateOfBirth' className='text-sm font-semibold'>
                            Date of Birth
                          </Label>

                          <FormField
                            control={form.control}
                            name='dateOfBirth'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input id='dateOfBirth' type='date' {...field} className='h-12 text-base' />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Date of Procedure */}
                        <div className='space-y-2'>
                          <Label htmlFor='dateOfProcedure' className='text-sm font-semibold'>
                            Date of Procedure
                          </Label>

                          <FormField
                            control={form.control}
                            name='dateOfProcedure'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input id='dateOfProcedure' type='date' {...field} className='h-12 text-base' />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Clinician */}
                        <div className='space-y-2 md:col-span-2'>
                          <Label htmlFor='treatingClinician' className='text-sm font-semibold'>
                            Treating Clinician / Oral Surgeon
                          </Label>

                          <FormField
                            control={form.control}
                            name='treatingClinician'
                            render={({ field }) => (
                              <FormItem>
                                <Select
                                  value={field.value}
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    setValue('clinicianName', value);
                                  }}
                                >
                                  <FormControl>
                                    <SelectTrigger id='treatingClinician' className='h-12 text-base'>
                                      <SelectValue placeholder='Select treating clinician or oral surgeon' />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {CLINICIAN_GROUPS.map((group) => (
                                      <SelectGroup key={group.label}>
                                        <SelectLabel>{group.label}</SelectLabel>
                                        {group.clinicians.map((clinician) => (
                                          <SelectItem key={clinician} value={clinician}>
                                            {clinician}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </section>

                    {/* Proposed Treatment */}
                    <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                      <div className='mb-6 border-b pb-5'>
                        <h2 className='text-xl font-semibold tracking-tight'>Proposed Treatment</h2>
                        <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                          I consent to the extraction or removal of the following tooth/teeth.
                        </p>
                      </div>

                      <div className='space-y-6'>
                        {/* Teeth */}
                        <div className='space-y-2'>
                          <Label htmlFor='teeth' className='text-sm font-semibold'>
                            Tooth / Teeth
                          </Label>

                          <FormField
                            control={form.control}
                            name='teeth'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    id='teeth'
                                    maxLength={50}
                                    placeholder='e.g. 16, 26, 36'
                                    {...field}
                                    className='h-12 text-base'
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Procedure */}
                        <div className='space-y-3'>
                          <div>
                            <h3 className='text-sm font-semibold'>Procedure</h3>
                            <p className='mt-1 text-sm text-muted-foreground'>
                              Please select the procedure(s) that apply.
                            </p>
                          </div>

                          <div className='grid space-y-2 sm:grid-cols-2'>
                            {[
                              {
                                id: 'simpleExtraction',
                                label: 'Simple Extraction',
                              },
                              {
                                id: 'surgicalExtraction',
                                label: 'Surgical Extraction',
                              },
                              {
                                id: 'retainedRoots',
                                label: 'Removal of retained root(s)',
                              },
                              {
                                id: 'wisdomToothRemoval',
                                label: 'Wisdom tooth removal',
                              },
                              {
                                id: 'otherProcedure',
                                label: 'Other',
                              },
                            ].map((option) => (
                              <label
                                key={option.id}
                                htmlFor={option.id}
                                className='flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50'
                              >
                                <Checkbox
                                  id={option.id}
                                  {...register(option.id as any)}
                                  onCheckedChange={(checked) => setValue(option.id as any, checked === true)}
                                />

                                <span className='text-sm font-medium'>{option.label}</span>
                              </label>
                            ))}
                          </div>

                          {form.watch('otherProcedure') && (
                            <FormField
                              control={form.control}
                              name='otherProcedureDetails'
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className='text-sm font-semibold'>Please specify</FormLabel>

                                  <FormControl>
                                    <Input placeholder='Please specify the procedure' {...field} className='h-12' />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                      </div>

                      <div className='mt-8 rounded-xl bg-muted/40 p-2'>
                        <p className='text-sm leading-6 text-muted-foreground'>
                          I confirm that the proposed treatment has been explained to me, including why the extraction
                          or surgical procedure has been recommended.
                        </p>
                      </div>
                    </section>

                    {/* Risks and Possible Complications */}
                    <section className='mt-8 space-y-5'>
                      <div>
                        <h3 className='text-sm font-semibold'>Risks and Possible Complications</h3>

                        <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                          I understand that, as with any dental or surgical procedure, there are risks and possible
                          complications. These have been discussed with me where relevant to my treatment and may
                          include:
                        </p>
                      </div>

                      <div className='grid gap-3 sm:grid-cols-2'>
                        {[
                          {
                            id: 'riskPain',
                            label: 'Pain, discomfort and tenderness following treatment',
                          },
                          {
                            id: 'riskSwelling',
                            label: 'Swelling and bruising',
                          },
                          {
                            id: 'riskBleeding',
                            label: 'Bleeding following the procedure',
                          },
                          {
                            id: 'riskInfection',
                            label: 'Infection',
                          },
                          {
                            id: 'riskDelayedHealing',
                            label: 'Delayed healing',
                          },
                          {
                            id: 'riskDrySocket',
                            label: 'Dry socket (alveolar osteitis)',
                          },
                          {
                            id: 'riskTrismus',
                            label: 'Difficulty opening the mouth (trismus)',
                          },
                          {
                            id: 'riskAdjacentDamage',
                            label: 'Damage to adjacent teeth, crowns, bridges, fillings or other dental work',
                          },
                          {
                            id: 'riskFracture',
                            label: 'Fracture of a tooth/root during removal, which may require further treatment',
                          },
                          {
                            id: 'riskRetainedRoot',
                            label:
                              'A small piece of root being intentionally left in place where removal presents a greater risk',
                          },
                          {
                            id: 'riskBoneTissueDamage',
                            label: 'Damage to surrounding bone or soft tissues',
                          },
                          {
                            id: 'riskSutures',
                            label: 'Need for stitches/sutures',
                          },
                          {
                            id: 'riskFurtherTreatment',
                            label: 'Need for further treatment or referral if complications occur',
                          },
                        ].map((risk) => (
                          <label
                            key={risk.id}
                            htmlFor={risk.id}
                            className='flex cursor-pointer items-start gap-3 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50'
                          >
                            <Checkbox
                              id={risk.id}
                              {...register(risk.id as any)}
                              onCheckedChange={(checked) => setValue(risk.id as any, checked === true)}
                              className='mt-0.5'
                            />

                            <span className='text-sm leading-5 font-medium'>{risk.label}</span>
                          </label>
                        ))}
                      </div>
                    </section>

                    <div className='space-y-10'>
                      {/* Additional Risks for Lower Teeth */}
                      <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                        <div className='mb-6 border-b pb-5'>
                          <h2 className='text-xl font-semibold tracking-tight'>Additional Risks for Lower Teeth</h2>
                        </div>

                        <div className='space-y-5'>
                          <p className='text-sm leading-6 text-muted-foreground'>
                            Where relevant, I understand that lower tooth/wisdom tooth surgery may carry a risk of
                            injury to nearby nerves, including the{' '}
                            <span className='font-semibold text-foreground'>
                              inferior alveolar nerve and/or lingual nerve
                            </span>
                            .
                          </p>

                          <p className='text-sm leading-6 text-muted-foreground'>
                            This may result in altered sensation, numbness, tingling or other sensory changes affecting
                            the lower lip, chin, teeth, gums and/or tongue. These changes may be temporary but, in some
                            cases, can be prolonged or permanent.
                          </p>

                          <div className='space-y-3'>
                            <p className='text-sm font-semibold'>
                              Please confirm whether this risk has been discussed or is applicable:
                            </p>

                            <div className='grid gap-3 sm:grid-cols-2'>
                              {[
                                {
                                  id: 'lowerTeethRisksApplicable',
                                  label: 'Discussed / Applicable',
                                },
                                {
                                  id: 'lowerTeethRisksNotApplicable',
                                  label: 'Not Applicable',
                                },
                              ].map((option) => (
                                <label
                                  key={option.id}
                                  htmlFor={option.id}
                                  className='flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50'
                                >
                                  <Checkbox
                                    id={option.id}
                                    {...register(option.id as any)}
                                    onCheckedChange={(checked) => setValue(option.id as any, checked === true)}
                                  />

                                  <span className='text-sm font-medium'>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Additional Risks for Upper Teeth */}
                      <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                        <div className='mb-6 border-b pb-5'>
                          <h2 className='text-xl font-semibold tracking-tight'>Additional Risks for Upper Teeth</h2>
                        </div>

                        <div className='space-y-5'>
                          <p className='text-sm leading-6 text-muted-foreground'>
                            Where relevant, I understand that the roots of upper teeth may be close to the maxillary
                            sinus. Extraction can occasionally result in an opening or communication between the mouth
                            and sinus, which may require additional treatment or surgical repair.
                          </p>

                          <p className='text-sm leading-6 text-muted-foreground'>
                            There is also a small risk of a tooth or root fragment being displaced into the sinus or
                            surrounding tissues.
                          </p>

                          <div className='space-y-3'>
                            <p className='text-sm font-semibold'>
                              Please confirm whether this risk has been discussed or is applicable:
                            </p>

                            <div className='grid gap-3 sm:grid-cols-2'>
                              {[
                                {
                                  id: 'upperTeethRisksApplicable',
                                  label: 'Discussed / Applicable',
                                },
                                {
                                  id: 'upperTeethRisksNotApplicable',
                                  label: 'Not Applicable',
                                },
                              ].map((option) => (
                                <label
                                  key={option.id}
                                  htmlFor={option.id}
                                  className='flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50'
                                >
                                  <Checkbox
                                    id={option.id}
                                    {...register(option.id as any)}
                                    onCheckedChange={(checked) => setValue(option.id as any, checked === true)}
                                  />

                                  <span className='text-sm font-medium'>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Patient-Specific Risks */}
                      <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                        <div className='mb-6 border-b pb-5'>
                          <h2 className='text-xl font-semibold tracking-tight'>Patient-Specific / Additional Risks</h2>

                          <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                            The clinician has discussed the following additional risks relevant to my individual
                            treatment:
                          </p>
                        </div>

                        <FormField
                          control={form.control}
                          name='additionalRisks'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-sm font-semibold'>Additional Risks</FormLabel>

                              <FormControl>
                                <Textarea
                                  placeholder='Please describe any additional risks discussed with the patient...'
                                  {...field}
                                  className='min-h-[140px] resize-y text-base'
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </section>

                      {/* Alternatives */}
                      <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                        <div className='mb-6 border-b pb-5'>
                          <h2 className='text-xl font-semibold tracking-tight'>Alternatives to Extraction</h2>

                          <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                            I understand that reasonable alternatives to extraction have been discussed with me where
                            clinically appropriate. These may include:
                          </p>
                        </div>

                        <div className='space-y-5'>
                          <div className='grid gap-3 sm:grid-cols-2'>
                            {[
                              {
                                id: 'alternativeMonitoring',
                                label: 'No treatment / monitoring',
                              },
                              {
                                id: 'alternativeRestorative',
                                label: 'Restorative treatment',
                              },
                              {
                                id: 'alternativeRootCanal',
                                label: 'Root canal treatment',
                              },
                              {
                                id: 'alternativeReferral',
                                label: 'Referral for specialist opinion/treatment',
                              },
                              {
                                id: 'alternativeOther',
                                label: 'Other',
                              },
                            ].map((option) => (
                              <label
                                key={option.id}
                                htmlFor={option.id}
                                className='flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50'
                              >
                                <Checkbox
                                  id={option.id}
                                  {...register(option.id as any)}
                                  onCheckedChange={(checked) => setValue(option.id as any, checked === true)}
                                />

                                <span className='text-sm font-medium'>{option.label}</span>
                              </label>
                            ))}
                          </div>

                          {form.watch('alternativeOther') && (
                            <FormField
                              control={form.control}
                              name='alternativeOtherDetails'
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className='text-sm font-semibold'>Please specify</FormLabel>

                                  <FormControl>
                                    <Input placeholder='Please specify the alternative' {...field} className='h-12' />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}

                          <div className='rounded-xl bg-muted/40 p-2'>
                            <p className='text-sm leading-6 text-muted-foreground'>
                              I understand that the potential consequences of choosing not to proceed with the
                              recommended treatment have also been explained to me.
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* Anaesthetic / Sedation */}
                      <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                        <div className='mb-6 border-b pb-5'>
                          <h2 className='text-xl font-semibold tracking-tight'>Anaesthetic / Sedation</h2>

                          <p className='mt-2 text-sm text-muted-foreground'>
                            Please select the planned anaesthesia or sedation.
                          </p>
                        </div>

                        <div className='space-y-5'>
                          <div className='grid gap-3 sm:grid-cols-2'>
                            {[
                              {
                                id: 'anaestheticLocal',
                                label: 'Local anaesthetic',
                              },
                              {
                                id: 'anaestheticSedation',
                                label: 'Sedation',
                              },
                              {
                                id: 'anaestheticGeneral',
                                label: 'General anaesthetic',
                              },
                              {
                                id: 'anaestheticOther',
                                label: 'Other',
                              },
                            ].map((option) => (
                              <label
                                key={option.id}
                                htmlFor={option.id}
                                className='flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50'
                              >
                                <Checkbox
                                  id={option.id}
                                  {...register(option.id as any)}
                                  onCheckedChange={(checked) => setValue(option.id as any, checked === true)}
                                />

                                <span className='text-sm font-medium'>{option.label}</span>
                              </label>
                            ))}
                          </div>

                          {form.watch('anaestheticOther') && (
                            <FormField
                              control={form.control}
                              name='anaestheticOtherDetails'
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className='text-sm font-semibold'>Please specify</FormLabel>

                                  <FormControl>
                                    <Input placeholder='Please specify' {...field} className='h-12' />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}

                          <div className='rounded-xl bg-muted/40 p-2'>
                            <p className='text-sm leading-6 text-muted-foreground'>
                              Any separate consent requirements relating to sedation or other forms of anaesthesia will
                              be completed where applicable.
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>

                    {formMode === 'clinicianPrep' && (
                      <div className='rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center'>
                        <h2 className='text-lg font-semibold'>Ready to hand over?</h2>
                        <p className='mx-auto mt-2 max-w-lg text-sm leading-6 text-muted-foreground'>
                          Check the details, then hand the iPad to the patient.
                        </p>
                        <Button type='button' className='mt-5 min-h-12 px-8 text-base' onClick={handleBeginPatientMode}>
                          Continue to patient
                        </Button>
                      </div>
                    )}
                  </fieldset>

                  <fieldset disabled={formMode !== 'patientSigning'} className='m-0 min-w-0 space-y-10 border-0 p-0'>
                    {/* Patient Consent */}
                    <section ref={patientSectionRef} className='scroll-mt-28 rounded-2xl border bg-card p-2 shadow-sm '>
                      <div className='mb-6 border-b pb-5'>
                        <h2 className='text-xl font-semibold tracking-tight'>Patient Consent</h2>

                        <p className='mt-2 text-sm text-muted-foreground'>I confirm that:</p>
                      </div>

                      <div className='rounded-xl border bg-muted/20 p-2'>
                        <ul className='space-y-4'>
                          {[
                            'The proposed procedure has been explained to me in a way that I understand.',
                            'I have had the opportunity to discuss the benefits, material risks and reasonable alternatives to the proposed treatment.',
                            'I have had the opportunity to ask questions and these have been answered to my satisfaction.',
                            'I have informed the clinician of relevant medical conditions, medications, allergies and changes to my medical history.',
                            'I understand that treatment outcomes cannot be guaranteed.',
                            'I understand that unexpected findings during the procedure may require the treatment plan to be altered where clinically necessary and appropriate.',
                            'I understand that I may withdraw my consent at any time before the procedure.',
                            'I voluntarily consent to the extraction/oral surgical procedure described above.',
                          ].map((statement, index) => (
                            <li key={index} className='flex items-start gap-3 text-sm leading-6'>
                              <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground' />
                              <span>{statement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className='mt-6'>
                        <FormField
                          control={form.control}
                          name='patientConsent'
                          render={({ field, fieldState }) => (
                            <FormItem>
                              <label
                                htmlFor='patientConsent'
                                className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors hover:bg-muted/50 ${
                                  fieldState.invalid ? 'border-destructive bg-destructive/5' : 'border-border'
                                }`}
                              >
                                <FormControl>
                                  <Checkbox
                                    id='patientConsent'
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(checked === true)}
                                    className='mt-1'
                                  />
                                </FormControl>

                                <span className='text-sm font-semibold leading-6'>
                                  I confirm that I have read and understood the above information and voluntarily
                                  consent to the proposed treatment.
                                </span>
                              </label>

                              <FormMessage className='text-sm font-semibold' />
                            </FormItem>
                          )}
                        />
                      </div>
                    </section>

                    {/* Patient Signature */}
                    <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                      <div className='mb-6 border-b pb-5'>
                        <h2 className='text-xl font-semibold tracking-tight'>Patient Signature</h2>

                        <p className='mt-2 text-sm text-muted-foreground'>
                          Please complete the following details to confirm your consent.
                        </p>
                      </div>

                      <div className='grid gap-6 md:grid-cols-2'>
                        {/* Patient Name */}
                        <FormField
                          control={form.control}
                          name='signaturePatientName'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-sm font-semibold'>Patient Name</FormLabel>

                              <FormControl>
                                <Input {...field} readOnly aria-readonly='true' className='h-12 bg-muted/40' />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Date of Birth */}
                        <FormField
                          control={form.control}
                          name='signatureDateOfBirth'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-sm font-semibold'>Date of Birth</FormLabel>

                              <FormControl>
                                <Input
                                  type='date'
                                  {...field}
                                  readOnly
                                  aria-readonly='true'
                                  className='h-12 bg-muted/40'
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Signature */}
                        <FormField
                          control={form.control}
                          name='patientSignature'
                          render={({ field, fieldState }) => (
                            <SignatureField
                              label='Patient Signature'
                              value={field.value}
                              onChange={(signature) => handlePatientSignatureChange(signature, field.onChange)}
                              error={fieldState.error?.message}
                              disabled={formMode !== 'patientSigning'}
                            />
                          )}
                        />

                        {/* Time */}
                        <FormField
                          control={form.control}
                          name='consentTime'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-sm font-semibold'>Time</FormLabel>

                              <FormControl>
                                <Input
                                  type='time'
                                  {...field}
                                  readOnly
                                  aria-readonly='true'
                                  className='h-12 bg-muted/40'
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Date */}
                        <FormField
                          control={form.control}
                          name='consentDate'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-sm font-semibold'>Date</FormLabel>

                              <FormControl>
                                <Input
                                  type='date'
                                  {...field}
                                  readOnly
                                  aria-readonly='true'
                                  className='h-12 bg-muted/40'
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </section>

                    <div className='rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center'>
                      <h2 className='text-lg font-semibold'>Finished signing?</h2>
                      <p className='mx-auto mt-2 max-w-lg text-sm leading-6 text-muted-foreground'>
                        Tap below and return the device to the clinician. The four-digit passcode will be required to
                        continue.
                      </p>
                      <Button type='button' className='mt-5' onClick={handleFinishPatientSigning}>
                        Finish patient signing
                      </Button>
                    </div>
                  </fieldset>

                  <fieldset disabled={formMode !== 'clinicianFinal'} className='m-0 min-w-0 border-0 p-0'>
                    <div className='space-y-10'>
                      {/* Clinician Declaration */}
                      <section
                        ref={clinicianSectionRef}
                        className='scroll-mt-28 rounded-2xl border bg-card p-2 shadow-sm '
                      >
                        <div className='mb-6 border-b pb-5'>
                          <h2 className='text-xl font-semibold tracking-tight'>Clinician Declaration</h2>

                          <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                            I confirm that I have discussed the proposed procedure with the patient, including its
                            purpose, expected benefits, material risks, reasonable alternatives and the consequences of
                            declining treatment. The patient has been given an opportunity to ask questions.
                          </p>
                        </div>

                        <div className='grid gap-6 md:grid-cols-2'>
                          {/* Patient Name */}
                          <FormField
                            control={form.control}
                            name='clinicianDeclarationPatientName'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Patient Name</FormLabel>

                                <FormControl>
                                  <Input
                                    {...field}
                                    readOnly
                                    aria-readonly='true'
                                    className='h-12 bg-muted/40 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Clinician Name */}
                          <FormField
                            control={form.control}
                            name='clinicianName'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Clinician Name</FormLabel>

                                <Select value={field.value} onValueChange={field.onChange}>
                                  <FormControl>
                                    <SelectTrigger className='h-12 text-base'>
                                      <SelectValue placeholder='Select clinician' />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {CLINICIAN_GROUPS.map((group) => (
                                      <SelectGroup key={group.label}>
                                        <SelectLabel>{group.label}</SelectLabel>
                                        {group.clinicians.map((clinician) => (
                                          <SelectItem key={clinician} value={clinician}>
                                            {clinician}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    ))}
                                  </SelectContent>
                                </Select>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Signature */}
                          <FormField
                            control={form.control}
                            name='clinicianSignature'
                            render={({ field, fieldState }) => (
                              <SignatureField
                                label='Clinician Signature'
                                value={field.value}
                                onChange={(signature) => handleClinicianSignatureChange(signature, field.onChange)}
                                error={fieldState.error?.message}
                                disabled={formMode !== 'clinicianFinal'}
                              />
                            )}
                          />

                          {/* Date */}
                          <FormField
                            control={form.control}
                            name='clinicianDeclarationDate'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Date</FormLabel>

                                <FormControl>
                                  <Input
                                    type='date'
                                    {...field}
                                    readOnly
                                    aria-readonly='true'
                                    className='h-12 bg-muted/40 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Time */}
                          <FormField
                            control={form.control}
                            name='clinicianDeclarationTime'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Time</FormLabel>

                                <FormControl>
                                  <Input
                                    type='time'
                                    {...field}
                                    readOnly
                                    aria-readonly='true'
                                    className='h-12 bg-muted/40 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className='mt-6 rounded-xl border bg-muted/20 p-2'>
                          <label
                            htmlFor='clinicianDeclarationConfirmed'
                            className='flex cursor-pointer items-start gap-3'
                          >
                            <Checkbox
                              id='clinicianDeclarationConfirmed'
                              {...register('clinicianDeclarationConfirmed')}
                              onCheckedChange={(checked) => setValue('clinicianDeclarationConfirmed', checked === true)}
                              className='mt-1'
                            />

                            <span className='text-sm font-medium leading-6'>
                              I confirm that I have discussed the proposed procedure, its risks, benefits and
                              alternatives with the patient and have given them an opportunity to ask questions.
                            </span>
                          </label>
                          {form.formState.errors.clinicianDeclarationConfirmed?.message !== undefined && (
                            <p role='alert' className='mt-2 text-sm font-medium text-destructive'>
                              {form.formState.errors.clinicianDeclarationConfirmed.message}
                            </p>
                          )}
                        </div>
                      </section>

                      {/* Interpreter / Witness */}
                      <section className='rounded-2xl border bg-card p-2 shadow-sm '>
                        <div className='mb-6 border-b pb-5'>
                          <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                            <h2 className='text-xl font-semibold tracking-tight'>Interpreter / Witness</h2>

                            <span className='w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground'>
                              If applicable
                            </span>
                          </div>

                          <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                            Complete this section where an interpreter or witness has been involved in the consent
                            process.
                          </p>
                        </div>

                        <div className='grid gap-6 md:grid-cols-2'>
                          {/* Name */}
                          <FormField
                            control={form.control}
                            name='interpreterWitnessName'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Name</FormLabel>

                                <FormControl>
                                  <Input
                                    placeholder='Enter full name'
                                    maxLength={100}
                                    {...field}
                                    className='h-12 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Role / Relationship */}
                          <FormField
                            control={form.control}
                            name='interpreterWitnessRole'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Role / Relationship</FormLabel>

                                <FormControl>
                                  <Input
                                    placeholder='e.g. Interpreter, parent, carer or witness'
                                    maxLength={100}
                                    {...field}
                                    className='h-12 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Signature */}
                          <FormField
                            control={form.control}
                            name='interpreterWitnessSignature'
                            render={({ field, fieldState }) => (
                              <SignatureField
                                label='Signature'
                                value={field.value}
                                onChange={(signature) => handleWitnessSignatureChange(signature, field.onChange)}
                                error={fieldState.error?.message}
                                disabled={formMode !== 'clinicianFinal'}
                              />
                            )}
                          />

                          {/* Date */}
                          <FormField
                            control={form.control}
                            name='interpreterWitnessDate'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Date</FormLabel>

                                <FormControl>
                                  <Input
                                    type='date'
                                    {...field}
                                    readOnly
                                    aria-readonly='true'
                                    className='h-12 bg-muted/40 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Time */}
                          <FormField
                            control={form.control}
                            name='interpreterWitnessTime'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-semibold'>Time</FormLabel>

                                <FormControl>
                                  <Input
                                    type='time'
                                    {...field}
                                    readOnly
                                    aria-readonly='true'
                                    className='h-12 bg-muted/40 text-base'
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </section>
                      {formMode === 'clinicianFinal' && (
                        <div className='flex justify-center'>
                          <Button
                            type='submit'
                            className={`w-full max-w-[15rem] py-3 text-lg ${
                              loading ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                            disabled={loading}
                          >
                            {loading ? <BarLoader /> : <span className='text-md lg:text-lg'>Sign & Submit Form</span>}
                          </Button>
                        </div>
                      )}
                    </div>
                  </fieldset>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.section>

      {formMode === 'clinicianReauth' && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
          role='dialog'
          aria-modal='true'
          aria-labelledby='clinicianUnlockTitle'
        >
          <div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl'>
            <div className='text-center'>
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary'>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='h-7 w-7'
                >
                  <rect width='14' height='11' x='5' y='10' rx='2' />
                  <path d='M8 10V7a4 4 0 0 1 8 0v3' />
                </svg>
              </div>
              <h2 id='clinicianUnlockTitle' className='mt-6 text-2xl font-semibold tracking-tight'>
                Return to clinician
              </h2>
              <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                Enter the clinician passcode to continue to final review and submission.
              </p>
            </div>

            <div className='mx-auto mt-6 max-w-xs'>
              <div
                className='flex h-8 items-center justify-center gap-4'
                aria-label={`${passcodeEntry.length} of 4 digits entered`}
              >
                {[0, 1, 2, 3].map((index) => (
                  <span
                    key={index}
                    aria-hidden='true'
                    className={`h-3.5 w-3.5 rounded-full border-2 border-primary transition-colors ${
                      index < passcodeEntry.length ? 'bg-primary' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>

              <p className='mt-1 text-center text-sm font-medium text-muted-foreground' aria-live='polite'>
                {passcodeEntry.length} of 4 digits entered
              </p>

              <p
                id='unlockPasscodeError'
                role='alert'
                className='mt-2 min-h-5 text-center text-sm font-medium text-destructive'
              >
                {isVerifyingPasscode ? 'Checking passcode…' : passcodeError}
              </p>

              <div className='mt-4 grid grid-cols-3 gap-3' aria-label='Numeric keypad'>
                {KEYPAD_DIGITS.map((digit) => (
                  <button
                    key={digit}
                    type='button'
                    onClick={() => handleKeypadDigit(digit)}
                    disabled={isVerifyingPasscode}
                    className='h-16 rounded-2xl border bg-white text-2xl font-medium shadow-sm transition-colors hover:bg-muted active:scale-95 active:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                    aria-label={digit}
                  >
                    {digit}
                  </button>
                ))}
                <span aria-hidden='true' />
                <button
                  type='button'
                  onClick={() => handleKeypadDigit('0')}
                  disabled={isVerifyingPasscode}
                  className='h-16 rounded-2xl border bg-white text-2xl font-medium shadow-sm transition-colors hover:bg-muted active:scale-95 active:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  aria-label='0'
                >
                  0
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setPasscodeEntry((entry) => entry.slice(0, -1));
                    setPasscodeError('');
                  }}
                  disabled={isVerifyingPasscode || passcodeEntry.length === 0}
                  className='flex h-16 items-center justify-center rounded-2xl text-muted-foreground transition-colors hover:bg-muted active:scale-95 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  aria-label='Delete last digit'
                >
                  <svg
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='h-7 w-7'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 6H8l-5 6 5 6h13a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z'
                    />
                    <path strokeLinecap='round' d='m10 10 4 4m0-4-4 4' />
                  </svg>
                </button>
              </div>

              {formMode === 'clinicianReauth' && (
                <Button
                  type='button'
                  variant='ghost'
                  className='mt-4 min-h-12 w-full text-base'
                  disabled={isVerifyingPasscode}
                  onClick={() => {
                    resetPasscodeEntry();
                    setFormMode('patientSigning');
                    scrollToSection(patientSectionRef.current);
                  }}
                >
                  Back to patient signature
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {successModalVisible && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm'>
          <div className='relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl'>
            {/* Close */}
            <button
              type='button'
              onClick={handleSuccessModalClose}
              aria-label='Close confirmation'
              className='absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
            >
              <FaTimes className='text-lg' />
            </button>

            {/* Success Icon */}
            <div className='flex justify-center'>
              <div className='flex h-14 w-14 items-center justify-center rounded-full bg-green-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='h-7 w-7 text-green-600'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m5 12 4 4L19 6' />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <div className='mt-6 text-center'>
              <h2 className='text-2xl font-semibold tracking-tight text-foreground'>Consent Form Submitted</h2>

              <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                The consent form has been successfully completed and submitted.
              </p>
            </div>

            {/* Patient */}
            {submittedData !== null && submittedData.patientName !== '' && (
              <div className='mt-6 rounded-xl border bg-muted/40 p-4'>
                <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>Patient</p>

                <p className='mt-1 text-sm font-semibold text-foreground'>{submittedData.patientName}</p>
              </div>
            )}

            {/* Confirmation */}
            <div className='mt-6 rounded-xl border border-green-200 bg-green-50 p-4'>
              <p className='text-sm leading-6 text-green-800'>
                The completed consent documentation has been received successfully. You can now close this window.
              </p>
            </div>

            {/* Close button */}
            <div className='mt-6'>
              <button
                type='button'
                onClick={handleSuccessModalClose}
                className='w-full rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]'
              >
                Done
              </button>
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
