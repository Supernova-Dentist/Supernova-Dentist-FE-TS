'use client';

import Image from 'next/image';
import React from 'react';
import ConsultationImage from '../../../public/assets/images/new-patient-examination-1.webp';
import ExaminationImage from '../../../public/assets/images/new-patient-examination-2.webp';
import TreatmentPlanImage from '../../../public/assets/images/new-patient-examination-3.webp';
import { NewPatientTimeline } from '../ServiceTimelines/NewPatientTimeline';

export function NewPatientJourney({ id }: { id: string }) {
  const data = [
    {
      title: '1 - Consultation & Medical History',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your journey starts with a consultation where the dentist reviews your medical and dental history, discusses
            any concerns, and understands your oral health goals. This step ensures we provide safe, personalised care.
          </p>
          <Image
            src={ConsultationImage}
            alt='New patient consultation'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '2 - Comprehensive Oral Examination',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            During the examination, your dentist checks your teeth, gums, bite, and overall oral health. Digital scans
            or X-rays may be used to detect hidden issues such as cavities, gum disease, or early signs of other dental
            problems.
          </p>
          <Image
            src={ExaminationImage}
            alt='Comprehensive dental examination'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '3 - Personalised Treatment Plan & Advice',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            After the examination, the clinician create a personalised treatment plan if required. You’ll also receive
            advice on oral hygiene, preventive care, and next steps to keep your smile healthy for years to come.
          </p>
          <Image
            src={TreatmentPlanImage}
            alt='Personalised dental treatment plan'
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
      <NewPatientTimeline data={data} />
    </div>
  );
}
