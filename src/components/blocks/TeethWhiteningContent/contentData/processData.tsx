'use client';

import { TeethWhiteningTimeline } from '@/components/ServiceTimelines/TeethWhiteningTimeline';
import Image from 'next/image';
import React from 'react';
import InitialExam from '../../../../../public/assets/images/invisalign_p_1.jpg';
import CustomTrays from '../../../../../public/assets/images/invisalign_p_2.jpg';
import Review from '../../../../../public/assets/images/teeth_whitening.jpg';

export function TeethWhiteningProcess({ id }: { id: string }) {
  const data = [
    {
      title: '1 - Initial Examination & Shade Discussion',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your whitening journey begins with an examination to ensure your teeth and gums are healthy. We’ll discuss
            your current shade and what can be safely achieved, using an iTero digital scan to visualise your potential
            results.
          </p>
          <Image
            src={InitialExam}
            alt='Initial Examination and Shade Discussion'
            width={InitialExam.width}
            height={InitialExam.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
    {
      title: '2 - Custom Whitening Trays Ready (2 Weeks)',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            In around two weeks, your custom trays will be ready. At this appointment, we’ll show you how to use your
            White Dental Beauty whitening kit safely at home. The trays fit perfectly to ensure even, gentle whitening
            across all teeth.
          </p>
          <Image
            src={CustomTrays}
            alt='Custom Whitening Trays Fitting'
            width={CustomTrays.width}
            height={CustomTrays.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
    {
      title: '3 - Two-Week Review',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            After completing your two-week at-home whitening, you’ll return for a review to check your progress and
            record your final shade. Your dentist will offer guidance on maintaining your brighter smile and when to top
            up if needed.
          </p>
          <Image
            src={Review}
            alt='Teeth Whitening Review Appointment'
            width={Review.width}
            height={Review.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='w-full'>
      <TeethWhiteningTimeline data={data} />
    </div>
  );
}
