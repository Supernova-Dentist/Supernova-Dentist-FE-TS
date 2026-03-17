'use client';

import Image from 'next/image';
import React from 'react';
import ConsultationImage from '../../../public/assets/images/root-canal-consultation.webp';
import RestorationImage from '../../../public/assets/images/root-canal-restoration.webp';
import TreatmentImage from '../../../public/assets/images/root-canal-treatment.webp';
import { NewPatientTimeline } from '../ServiceTimelines/NewPatientTimeline';
import { RootCanalTimeline } from '../ServiceTimelines/RootCanalTimeline';

export function RootCanalJourney({ id }: { id: string }) {
  const data = [
    {
      title: '1 - Consultation & Diagnosis',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your root canal journey begins with a consultation where the dentist examines your tooth, reviews your
            dental history, and identifies the source of pain or infection. This ensures a tailored treatment plan for
            safe and effective care.
          </p>
          <Image
            src={ConsultationImage}
            alt='Root canal consultation'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '2 - Root Canal Treatment',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            During the procedure, the dentist removes infected pulp, cleans and disinfects the root canals, and shapes
            them for sealing. Modern anaesthesia ensures the treatment is comfortable and precise.
          </p>
          <Image
            src={TreatmentImage}
            alt='Root canal procedure'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '3 - Tooth Restoration & Aftercare',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            After cleaning the canals, the tooth is sealed and may be restored with a filling or crown. You’ll receive
            instructions for care, guidance on managing any sensitivity, and follow-up plans to ensure long-term oral
            health.
          </p>
          <Image
            src={RestorationImage}
            alt='Root canal tooth restoration'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='w-full'>
      <RootCanalTimeline data={data} />
    </div>
  );
}
