/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client';

import { SOCIAL_CTAS } from '@/components/CornerNav/CornerNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PatientToggleSection from '@/components/ui/toggle';
import { DentallyPortal } from '@/lib/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { referAFriendSignupSchema, type ReferAFriendFormData } from '../../../../../types/ReferAFriendForm';
import BarLoader from '../../../BarLoader/BarLoader';
import PrivacyPolicyModal from '../../../PrivacyModal/PrivacyModal';

const defaultValues: ReferAFriendFormData = {
  fullname: '',
  email: '',
  phone: '',
  optOutEmails: false,
  referrerName: '',
};

interface ServiceFormProps {
  serviceName: string;
  serviceChip: string;
  serviceDescription: string;
  formTitle: string;
  formDescription: string;
}

export default function ReferAFriendForm({
  serviceChip,
  serviceName,
  serviceDescription,
  formTitle,
  formDescription,
}: ServiceFormProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isExistingPatient, setIsExistingPatient] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [referralLink, setReferralLink] = useState('');
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    clearErrors,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<ReferAFriendFormData>({
    resolver: zodResolver(referAFriendSignupSchema),
    defaultValues,
  });

  const values = getValues();

  async function onSubmit(data: ReferAFriendFormData) {
    try {
      if (isExistingPatient) {
        data.referrerName = data.referrerName.trim();
      } else {
        data.referrerName = 'NoFriendReferral';
      }
      const decodedSource = decodeURIComponent(pathname);
      const cleanedSource = decodedSource.startsWith('/') ? decodedSource.slice(1) : decodedSource;
      const dataWithSource = { ...data, source: cleanedSource };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL}/refer-a-friend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataWithSource),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'There was a problem with your submission. Please try again later.');
        throw new Error(errorData.message);
      }

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16737398524/x3ILCLDm7eYZEPzdga0-',
        });
      }

      setShowSuccessModal(true);
    } catch (error) {
      setShowErrorModal(true);
    }
  }

  function handleSuccessModalClose() {
    setShowSuccessModal(false);
    reset();
  }

  function handlePrivacyModalClose() {
    setShowPrivacyModal(false);
    clearErrors();
  }

  function handlePrivacyModalOpen() {
    setShowPrivacyModal(true);
  }

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#form') {
        const formElement = document.querySelector(hash);
        if (formElement) {
          const formPosition = formElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: formPosition, behavior: 'smooth' });
        }
      }
    }
  }, []);

  const referrerName = watch('referrerName');

  const computedReferralLink = useMemo(() => {
    if (referrerName && typeof window !== 'undefined') {
      const params = new URLSearchParams({
        referrerName,
      });
      return `${window.location.origin}/refer-a-friend?referrerName=${params.toString()}#form`;
    }
    return null;
  }, [referrerName, pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const name = searchParams.get('referrerName');
      if (name) {
        setValue('referrerName', name);
      }
    }
  }, [setValue]);

  const isValidFullName = (name: string) => {
    // Check if name has at least two words separated by space
    const words = name.trim().split(/\s+/);
    if (words.length < 2) return false;

    // Check that each word contains only letters (and maybe apostrophes/hyphens)
    const nameRegex = /^[a-zA-Z'-]+$/;
    return words.every((word) => nameRegex.test(word));
  };

  const shouldShowReferralLink = isValidFullName(referrerName);

  useEffect(() => {
    if (shouldShowReferralLink) {
      const encodedName = encodeURIComponent(referrerName || '');
      setReferralLink(`${window.location.origin}/refer-a-friend?referrerName=${encodedName.toString()}#form`);
    } else {
      setReferralLink('');
    }
  }, [referrerName, shouldShowReferralLink]);

  const handleCopyLink = async () => {
    if (computedReferralLink) {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
  };

  const handleShareLink = async () => {
    if (computedReferralLink) {
      const shareData = {
        title: 'Check out this referral link!',
        text: `I recommend you to visit our dental practice. Here is my referral link: ${computedReferralLink}`,
        url: computedReferralLink,
      };
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <>
      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={handlePrivacyModalClose} />

      <section id='form' ref={ref} className='w-full py-12 min-h-screen flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='container max-w-[1250px] mx-auto px-4 flex flex-col gap-8'>
            <div className='flex flex-col lg:flex-row lg:items-start gap-8'>
              {/* Description */}
              <div className='lg:w-1/2 space-y-6'>
                <div className='bg-grey px-4 py-2 text-md text-gray-50 rounded-lg inline-block'>{serviceChip}</div>
                <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                  Begin Your {serviceName} Journey
                </h2>
                <p className='text-muted-foreground md:text-2xl'>{serviceDescription}</p>
              </div>

              {/* Form */}
              <Card className='lg:w-1/2 w-full bg-gray-50 shadow-2xl p-2 md:p-6'>
                <PatientToggleSection
                  isExistingPatient={isExistingPatient}
                  setIsExistingPatient={setIsExistingPatient}
                />

                <form onSubmit={handleSubmit(onSubmit)}>
                  <CardHeader className='text-center mb-4'>
                    <CardTitle className='text-xl md:text-2xl'>
                      {isExistingPatient ? 'Refer a Friend' : 'Register as a New Patient'}
                    </CardTitle>
                    <CardDescription className='text-md md:text-lg text-gray-500'>
                      {isExistingPatient
                        ? formDescription
                        : 'Join our dental practice today. Fill in your details and we’ll be in touch soon.'}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='p-2 md:p-4 md:pt-0 space-y-5'>
                    {isExistingPatient && (
                      <div>
                        <h3 className='text-lg font-semibold mb-1'>Referrer&apos;s Details (Existing Patient)</h3>
                        <div className='grid gap-1'>
                          <Label htmlFor='referrerName'>Full Name</Label>
                          <Input
                            id='referrerName'
                            placeholder='Jane Doe'
                            className='py-1 text-lg px-3'
                            {...register('referrerName')}
                          />
                          <div className='h-5'>
                            {errors.referrerName && (
                              <p className='text-red-500 text-sm'>{errors.referrerName.message}</p>
                            )}
                          </div>
                        </div>

                        <div className='mt-2 mb-4 h-[42px] flex items-center justify-center'>
                          <div
                            className={`transition-opacity flex gap-8 duration-300 ${
                              referralLink ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                          >
                            <Button onClick={handleShareLink} type='button' size='lg'>
                              Share Link
                            </Button>
                            <Button onClick={handleCopyLink} type='button' size='lg'>
                              {copied ? 'Copied!' : 'Copy Link'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Friend */}
                    <div>
                      <h3 className='text-lg font-semibold mt-4 mb-1'>Friend&apos;s Details</h3>
                      <div className='grid gap-1'>
                        <Label htmlFor='fullname'>Full Name</Label>
                        <Input
                          id='fullname'
                          placeholder='John Smith'
                          className='py-1 text-lg px-3'
                          {...register('fullname')}
                        />
                        <div className='h-5'>
                          {errors.fullname && <p className='text-red-500 text-sm'>{errors.fullname.message}</p>}
                        </div>
                      </div>
                      <div className='grid gap-1'>
                        <Label htmlFor='email'>Email Address</Label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='john@example.com'
                          className='py-1 text-lg px-3'
                          {...register('email')}
                        />
                        <div className='h-5'>
                          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className='grid gap-1'>
                        <Label htmlFor='phone'>Contact Number</Label>
                        <Input
                          id='phone'
                          type='tel'
                          placeholder='(+44) 1234567890'
                          className='py-1 text-lg px-3'
                          {...register('phone')}
                        />
                        <div className='h-5'>
                          {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
                        </div>
                      </div>
                    </div>
                    <div className='grid gap-1 mb-4'>
                      <div className='flex items-center mt-2'>
                        <Checkbox
                          id='optOutEmails'
                          {...register('optOutEmails')}
                          onCheckedChange={(checked: boolean) => setValue('optOutEmails', checked)}
                        />
                        <Label htmlFor='optOutEmails' className='ml-3 text-sm text-muted-foreground'>
                          I don’t want to receive emails.
                        </Label>
                      </div>
                      {errors.optOutEmails && <p className='text-red-500 text-sm'>{errors.optOutEmails?.message}</p>}
                    </div>
                    <p>By signing up, you acknowledge and agree to our</p>
                    <Button
                      type='button'
                      variant='link'
                      className='px-0 text-md text-blue-500 underline hover:text-blue-400 transition mb-4 sm:mb-0'
                      onClick={handlePrivacyModalOpen}
                    >
                      Privacy Policy
                    </Button>
                  </CardContent>

                  <CardFooter className='pt-4'>
                    <Button type='submit' className='w-full' disabled={isSubmitting} size='lg'>
                      {isSubmitting ? <BarLoader /> : 'Submit Referral'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>

            {/* Full-width Poster Below */}
            <div className='md:w-2/3 mt-8 mx-auto'>
              <img
                src='/assets/images/sd_refer_friend.png'
                alt='Refer a Friend Poster'
                className='w-full h-auto object-cover rounded-xl shadow-lg'
              />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-center mx-auto gap-4 pt-12'>
            <img src='/assets/images/supernova_dental_cover.png' alt='Invisalign Logo' className='' />
            <img src='/assets/images/Invisalign_Logo.png' alt='Invisalign Logo' className='w-56' />
          </div>
        </motion.div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full relative'>
            <button
              onClick={handleSuccessModalClose}
              className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900'
            >
              <FaTimes />
            </button>
            <h2 className='text-3xl font-semibold mb-6'>Thank you, {values.fullname}, for your enquiry!</h2>
            <div className='mb-6 flex flex-col gap-2'>
              <p>You&apos;ve been successfully signed up. We&apos;ll send details to {values.email}.</p>
              <p>Please check your spam folder if you don&apos;t see it in your inbox.</p>
            </div>

            {/* New text and button */}
            <p className='mb-2'>Prefer to book yourself in? Use our patient portal by pressing the button below:</p>
            <div className='w-full flex justify-center mb-4'>
              <Link target='_blank' href={`${DentallyPortal}`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Book Now!
                </button>
              </Link>
            </div>
            <div className='flex gap-4 items-center justify-center mt-6 pt-4'>
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
                      delay: 1 + idx * 0.125,
                      duration: 0.5,
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
      {showErrorModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-3xl font-semibold mb-6'>Submission Failed</h2>
            <p className='mb-6'>{error}</p>
            <Button onClick={() => setShowErrorModal(false)} className='w-full text-xl py-3'>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
