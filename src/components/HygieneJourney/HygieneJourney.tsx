'use client';

import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import React, { useState } from 'react';
import FreshBreath from '../../../public/assets/images/outerBuilding.jpg';
import HealthyGums from '../../../public/assets/images/service-banner.png';
import PlaqueRemoval from '../../../public/assets/images/toilet.jpeg';

export function HygieneJourney({ id }: { id: string }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const data = [
    {
      title: 'A - Clean',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Professional plaque and tartar removal to prevent cavities and gum disease.
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
      title: 'B - Freshen',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Eliminate bacteria and bad breath with deep cleaning and polishing.
          </p>
          <Image
            src={FreshBreath}
            alt='Fresh Breath'
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
      title: 'C - Protect',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Strengthen and maintain healthy gums for long-term oral health.
          </p>
          <Image
            src={HealthyGums}
            alt='Healthy Gums'
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
