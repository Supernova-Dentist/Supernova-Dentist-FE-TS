'use client';

import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import React, { useState } from 'react';
import InvisalignImage from '../../../public/assets/images/invisalign_aligners.png';
import WhiteTeeth from '../../../public/assets/images/teeth-whitening.jpeg';
import Veneers from '../../../public/assets/images/veneers.jpeg';

export function Journey() {
  const [imagesLoaded, setImagesLoaded] = useState(0); // Track number of loaded images

  // This function is called when an image loads
  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const data = [
    {
      title: 'A - Align',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Potentially less than 6 months to straighten teeth to correct alignment
          </p>
          <Image
            src={InvisalignImage}
            alt='Invisalign'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad} // Pass handleImageLoad to onLoad
          />
        </div>
      ),
    },
    {
      title: 'B - Brighten',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            We use exclusive whitening products that can only be given by a dentist that really bring out the natural
            white smile to give you the Supernova shine.
          </p>
          <Image
            src={WhiteTeeth}
            alt='White teeth'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad} // Pass handleImageLoad to onLoad
          />
        </div>
      ),
    },
    {
      title: 'C - Contour',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Not always required and treatment is dependant on a case by case basis. With use of composite bonding or
            veneers we can really elevate cases when we have the teeth in the right position and colour.
          </p>
          <Image
            src={Veneers}
            alt='Veneers'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad} // Pass handleImageLoad to onLoad
          />
        </div>
      ),
    },
  ];

  return (
    <div id='journey' className='w-full'>
      <Timeline data={data} setImagesLoaded={setImagesLoaded} />
    </div>
  );
}
