'use client';

import Image from 'next/image';
import React from 'react';
import ImpressionImage from '../../../public/assets/images/denture-impressions-bridgwater.webp';
import FittingImage from '../../../public/assets/images/dentures-support-bridgwater.webp';
import ConsultationImage from '../../../public/assets/images/sunlight_suite_supernova_dental_bridgwater.webp';
import { DenturesTimeline } from '../ServiceTimelines/DenturesTimeline';

export function DenturesJourney({ id }: { id: string }) {
  const data = [
    {
      title: '1 - Consultation & Assessment',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your dentures journey begins with a comprehensive consultation. The dentist will assess your oral health,
            discuss your concerns and goals, and determine whether full or partial dentures are the most suitable
            solution for restoring your smile and confidence.
          </p>
          <Image
            src={ConsultationImage}
            alt='Dentures consultation'
            width={ConsultationImage.width}
            height={ConsultationImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '2 - Impressions & Denture Creation',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Precise impressions and measurements are taken to ensure your dentures fit comfortably and look natural.
            These details are sent to a dental laboratory where your custom dentures are carefully crafted to match your
            facial features and bite.
          </p>
          <Image
            src={ImpressionImage}
            alt='Denture impressions'
            width={ImpressionImage.width}
            height={ImpressionImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '3 - Fitting & Ongoing Support',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Once your dentures are ready, they are fitted and adjusted to ensure optimal comfort and function.
            You&apos;ll receive guidance on cleaning, maintenance, and adapting to your new dentures, along with any
            follow-up appointments needed to achieve the best possible fit.
          </p>
          <Image
            src={FittingImage}
            alt='Denture fitting'
            width={FittingImage.width}
            height={FittingImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='w-full'>
      <DenturesTimeline data={data} />
    </div>
  );
}
