'use client';

import { CosmeticDentistryTimeline } from '@/components/ServiceTimelines/CosmeticDentistryTimeline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Use actual imports if available; these placeholders are fine for now
import CompositeBondingImage from '../../../../public/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp';
import SurgeryImage from '../../../../public/assets/images/implant_referral.jpg';
import ConsultationImage from '../../../../public/assets/images/invisalign.jpeg';
import RestorationImage from '../../../../public/assets/images/teeth_whitening.jpg';

export function CosmeticDentistryJourney() {
  const data = [
    {
      title: 'Invisalign: clear aligners for a straighter smile.',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Discover how our Invisalign clear aligners can discreetly improve the alignment of your teeth without
            traditional braces.
            <Link href='/cosmetic-dentistry/invisalign' className='text-gold underline ml-1'>
              Invisalign
            </Link>{' '}
            is a popular orthodontic option that uses nearly invisible trays to gently move your teeth into place. At
            Supernova Dental, we’ll guide you through your Invisalign journey from consultation to completion.
          </p>
          <Image
            src={ConsultationImage}
            alt='Dental Invisalign consultation'
            width={ConsultationImage.width}
            height={ConsultationImage.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
            priority
          />
        </div>
      ),
    },
    {
      title: 'Dental Implants for long lasting tooth replacement',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            If you are missing one or more teeth,
            <Link href='/cosmetic-dentistry/dental-implants' className='text-gold underline ml-1'>
              dental implants
            </Link>{' '}
            can provide a permanent solution that looks, feels and functions like natural teeth. Our dental implants
            offer a natural‑looking, secure solution that restores your confidence. Implants are designed to feel and
            function like real teeth, helping you eat, speak and smile with ease. Our implant treatments include single
            implant crowns and advanced full‑arch options such as All‑on‑4/6, which can replace an entire set of teeth
            in a streamlined procedure.
          </p>
          <Image
            src={SurgeryImage}
            alt='Dental implant placement surgery'
            width={SurgeryImage.width}
            height={SurgeryImage.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'Composite Bonding: Repair chips & improve your smile',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Transform your smile with
            <Link href='/cosmetic-dentistry/composite-bonding' className='text-gold underline ml-1'>
              composite bonding
            </Link>{' '}
            a minimally invasive treatment that repairs chipped teeth, closes small gaps, and improves the shape of your
            teeth for a natural, radiant look. Composite bonding is quick, often completed in a single visit, and
            preserves your natural tooth structure.
          </p>
          <Image
            src={CompositeBondingImage}
            alt='Composite bonding cosmetic dental treatment'
            width={CompositeBondingImage.width}
            height={CompositeBondingImage.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'Teeth Whitening',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Enhance your smile with professional
            <Link href='/cosmetic-dentistry/teeth-whitening' className='text-gold underline ml-1'>
              teeth whitening
            </Link>{' '}
            tailored to your goals. Learn about our White Dental Beauty system, which provides a safe and effective way
            to lift stains and lighten your teeth’s natural colour, giving you a brighter smile. Treatment is
            straightforward and overseen by our experienced dental team to ensure excellent, long‑lasting results.
          </p>
          <Image
            src={RestorationImage}
            alt='Teeth whitening cosmetic treatment'
            width={RestorationImage.width}
            height={RestorationImage.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id='journey' className='w-full'>
      <CosmeticDentistryTimeline data={data} />
    </div>
  );
}
