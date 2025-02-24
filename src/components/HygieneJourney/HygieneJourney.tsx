'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Airflow from '../../../public/assets/images/airflow.jpeg';
import HygieneAdvice from '../../../public/assets/images/Supernova-23.jpg';
import PlaqueRemoval from '../../../public/assets/images/plaque_removal.jpeg';
import { HygieneTimeline } from '../ServiceTimelines/HygieneTimeline';

export function HygieneJourney({ id }: { id: string }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const data = [
    {
      title: '1 - PMPR',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your journey beings with professional mechanical plaque removal which helps prevent
            cavities and gum disease, getting you one step closer to your Supernova Smile.
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
      title: '2 - Polishing/Airflow',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            In this step, polishing and airflow technology are used to remove bacteria, plaque, and surface stains. It
            also helps freshen breath and ensures a smooth, clean surface for your teeth.
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
      title: '3 - Oral Hygiene',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Lastly receive personalised advice on maintaining your oral hygiene at home between appointments, including tips on
            brushing, flossing, and proper care for your teeth and gums.
          </p>
          <Image
            src={HygieneAdvice}
            alt='Hygiene Advice'
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
      <HygieneTimeline data={data} setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} />
    </div>
  );
}
