'use client';

import { InvisalignTimeline } from '@/components/ServiceTimelines/InvisalignTimeline';
import Image from 'next/image';
import React, { useState } from 'react';

export function InvisalignJourney({ id }) {
  const [imagesLoaded, setImagesLoaded] = useState(0); // Track number of loaded images

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const timelineData = [
    {
      title: 'Initial Consultation',
      content: (
        <div className='px-12 py-8'>
          <p className='text-xs md:text-sm font-normal mb-8'>
            Your journey begins with a consultation to discuss your goals and assess your dental health. The dentist
            will take digital scans and X-rays to create a customized treatment plan.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-33.jpg'
            alt='Initial Consultation'
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
      title: 'Receiving Your Aligners',
      content: (
        <div className='px-12 py-8'>
          <p className='text-xs md:text-sm font-normal mb-8'>
            Once your aligners are ready, you will receive them along with instructions on how to wear and care for
            them. Your dentist will check the fit and make adjustments if necessary.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-16.jpg'
            alt='Receiving Aligners'
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
      title: 'Progress Check-ups',
      content: (
        <div className='px-12 py-8'>
          <p className='text-xs md:text-sm font-normal mb-8'>
            Regular check-ups are scheduled to monitor your progress. Your dentist will ensure that your teeth are
            moving according to the treatment plan and make adjustments as needed.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-30.jpg'
            alt='Progress Check-ups'
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
      title: 'Final Stages and Retainers',
      content: (
        <div className='px-12 py-8'>
          <p className='text-xs md:text-sm font-normal mb-8'>
            As you near the end of your treatment, you will receive your final set of aligners. After completing the
            treatment, you will be given retainers to maintain the new position of your teeth.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-14.jpg'
            alt='Final Stages'
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
    <div id={id} className='w-full bg-cream py-6'>
      <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-gold'>Your Invisalign Journey</h2>
      <hr className='border-t-2 border-gold w-20 mx-auto mb-8' />
      <p className='text-lg md:text-xl text-center text-gray-800 max-w-[35rem] mx-auto'>
        Transforming your smile with Invisalign is a journey that involves several steps. Here&apos;s what you can
        expect along the way:
      </p>
      <InvisalignTimeline data={timelineData} setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} />
    </div>
  );
}
