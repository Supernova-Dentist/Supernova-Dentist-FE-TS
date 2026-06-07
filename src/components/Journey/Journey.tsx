'use client';

import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import React from 'react';
import InvisalignImage from '../../../public/assets/images/invisalign_aligners.png';
import WhiteTeeth from '../../../public/assets/images/teeth-whitening.jpeg';
import Veneers from '../../../public/assets/images/veneers.jpeg';

export function Journey() {
  const data = [
    {
      title: 'A - Align',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Potentially less than 6 months to straighten teeth to correct alignment
          </p>
          <Image
            src={InvisalignImage}
            alt='Invisalign'
            width={InvisalignImage.width}
            height={InvisalignImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'B - Brighten',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            We use exclusive whitening products that can only be given by a dentist that really bring out the natural
            white smile to give you the Supernova shine.
          </p>
          <Image
            src={WhiteTeeth}
            alt='Teeth whitening results'
            width={WhiteTeeth.width}
            height={WhiteTeeth.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'C - Contour',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Using composite bonding or veneers we can really elevate cases when we have the teeth in the right position
            and colour.
          </p>
          <Image
            src={Veneers}
            alt='Dental veneers result'
            width={Veneers.width}
            height={Veneers.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id='journey' className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
