'use client';

import Image from 'next/image';
import React from 'react';
import Airflow from '../../../public/assets/images/airflow.jpeg';
import DentalTherapyBuild from '../../../public/assets/images/therapy_1.jpg';
import TherapyAssess from '../../../public/assets/images/therapy_2.jpg';
import DentalTherapyCare from '../../../public/assets/images/therapy_3.jpg';
import { Timeline } from '../ui/timeline';

export function DentalTherapyJourney({ id }: { id: string }) {
  const data = [
    {
      title: 'A – Assess',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your oral health is assessed to identify any issues, including gum disease or tooth decay.
          </p>
          <Image
            src={TherapyAssess}
            alt='Dental Therapy Assess'
            width={TherapyAssess.width}
            height={TherapyAssess.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'B – Build',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            A personalised treatment plan is built to address your specific dental needs.
          </p>
          <Image
            src={DentalTherapyBuild}
            alt='Dental Therapy Build'
            width={DentalTherapyBuild.width}
            height={DentalTherapyBuild.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'C – Care',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Ongoing care for your teeth and gums through preventive treatments, restorative procedures, and maintenance.
          </p>
          <Image
            src={DentalTherapyCare}
            alt='Dental Therapy Care'
            width={DentalTherapyCare.width}
            height={DentalTherapyCare.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
