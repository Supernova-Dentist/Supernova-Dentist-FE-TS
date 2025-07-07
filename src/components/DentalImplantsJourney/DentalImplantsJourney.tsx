'use client';

import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import React, { useState } from 'react';

// Placeholder images — replace these with your actual imports when ready
const ConsultationImage = '/assets/images/placeholder-consultation.jpg';
const SurgeryImage = '/assets/images/placeholder-surgery.jpg';
const RestorationImage = '/assets/images/placeholder-restoration.jpg';

export function DentalImplantsJourney() {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const data = [
    {
      title: '1 - Consultation & Treatment Planning',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your journey starts with a thorough consultation, clinical exam, and 3D imaging (CBCT) to evaluate your
            suitability and create a personalised implant treatment plan.
          </p>
          <Image
            src={ConsultationImage}
            alt='Dental implant consultation with 3D imaging'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
            onLoad={handleImageLoad}
            priority
          />
        </div>
      ),
    },
    {
      title: '2 - Implant Placement Surgery',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            The dental implant is gently placed into your jawbone under local anaesthetic. Over the following months,
            the implant integrates with the bone to provide a stable foundation.
          </p>
          <Image
            src={SurgeryImage}
            alt='Dental implant placement surgery'
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
      title: '3 - Final Restoration',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Once healing is complete, a custom-made crown, bridge, or denture is securely attached to the implant,
            restoring full function and a natural-looking smile.
          </p>
          <Image
            src={RestorationImage}
            alt='Final dental implant crown restoration'
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
    <div id='journey' className='w-full'>
      <Timeline data={data} setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} />
    </div>
  );
}
