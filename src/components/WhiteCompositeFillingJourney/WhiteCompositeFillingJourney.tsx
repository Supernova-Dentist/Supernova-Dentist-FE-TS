'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import CompositePlacement from '../../../public/assets/images/curing_light.jpg';
import ExamImage from '../../../public/assets/images/therapy_1.jpg';
import CavityPrep from '../../../public/assets/images/therapy_2.jpg';
import BiteCheck from '../../../public/assets/images/therapy_3.jpg';
import { HygieneTimeline as FillingTimeline } from '../ServiceTimelines/HygieneTimeline';

export function WhiteCompositeFillingJourney({ id }: { id: string }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

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
            onLoad={handleImageLoad}
          />
        </div>
      ),
    },
    {
      title: '2 - Tooth Preparation',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            The tooth is gently cleaned and any decay removed. We prepare the area for bonding while preserving as much
            natural tooth structure as possible.
          </p>
          <Image
            src={CavityPrep}
            alt='Cavity Preparation'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad}
          />
        </div>
      ),
    },
    {
      title: '3 - Composite Placement and Shaping',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            We carefully layer and sculpt the white composite material, hardening each layer with a curing light. The
            filling is shaped to blend seamlessly with your natural tooth.
          </p>
          <Image
            src={CompositePlacement}
            alt='Composite Filling Placement'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad}
          />
        </div>
      ),
    },
    {
      title: '4 - Finishing and Bite Check',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            The filling is polished for a smooth finish. We check your bite to ensure comfort and a natural feel,
            leaving you with a restored, durable, and aesthetic tooth.
          </p>
          <Image
            src={BiteCheck}
            alt='Bite Check'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad}
          />
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='w-full'>
      <FillingTimeline data={data} setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} />
    </div>
  );
}
