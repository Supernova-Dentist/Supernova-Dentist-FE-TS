'use client';

import Image from 'next/image';
import React from 'react';
import CompositePlacement from '../../../public/assets/images/curing_light.jpg';
import ExamImage from '../../../public/assets/images/therapy_1.jpg';
import CavityPrep from '../../../public/assets/images/therapy_2.jpg';
import BiteCheck from '../../../public/assets/images/therapy_3.jpg';
import { WhiteCompositFillingsTimeline } from '../ServiceTimelines/WhiteCompositeFillingsTimeline';

export function WhiteCompositeFillingJourney({ id }: { id: string }) {
  

  const data = [
    {
      title: '1 - Examination and Consultation',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your journey begins with a thorough examination to assess the tooth and discuss options. We explain the
            process and shade-match the composite for a natural look.
          </p>
          <Image
            src={ExamImage}
            alt='Dental Examination'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '2 - Tooth Preparation and Composite Placement',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            The tooth is gently cleaned and any decay removed to preserve as much natural structure as possible. We then
            layer and sculpt the white composite material, hardening each layer with a curing light to ensure a secure,
            natural-looking restoration.
          </p>
          <Image
            src={CavityPrep}
            alt='Tooth Preparation and Composite Placement'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
          {/* <Image
            src={CompositePlacement}
            alt='Composite Filling Placement'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            
          /> */}
        </div>
      ),
    },
    {
      title: '3 - Finishing and Bite Check',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Finally, the filling is polished for a smooth finish. We check your bite to ensure comfort and a natural
            feel, leaving you with a restored, durable, and aesthetic tooth.
          </p>
          <Image
            src={BiteCheck}
            alt='Bite Check'
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
      <WhiteCompositFillingsTimeline data={data} />
    </div>
  );
}
