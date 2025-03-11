'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Airflow from '../../../public/assets/images/airflow.jpeg';
import HygieneAdvice from '../../../public/assets/images/carousel-1.png';
import PaediatricCare from '../../../public/assets/images/Invisalign_Smile_View.jpg';
import PlaqueRemoval from '../../../public/assets/images/plaque_removal.jpeg';
import { Timeline } from '../ui/timeline';

export function DentalTherapyJourney({ id }: { id: string }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const data = [
    {
      title: 'A – Assess',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            your oral health and identify any issues, including gum disease or tooth decay.
          </p>
          <Image
            src={PlaqueRemoval}
            alt='Plaque Removal'
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
      title: 'B – Build',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            a personalized treatment plan to address your specific dental needs.
          </p>
          <Image
            src={Airflow}
            alt='Airflow'
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
      title: 'C – Care',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            for your teeth and gums through preventive care, restorative treatments, and ongoing maintenance.
          </p>
          <Image
            src={HygieneAdvice}
            alt='Gum Health Advice'
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
      <Timeline data={data} setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} />
    </div>
  );
}
