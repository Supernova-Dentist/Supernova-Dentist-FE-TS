'use client';

import Image from 'next/image';
import React from 'react';
import { DentalImplantTimeline } from '../ServiceTimelines/DentalImplantTimeline';

// Static imports so we can use intrinsic width/height
import ConsultationImage from '../../../public/assets/images/equipment.jpg';
import RestorationImage from '../../../public/assets/images/implant_journey_3.jpeg';
import SurgeryImage from '../../../public/assets/images/surgery2.jpg';

export function DentalImplantsJourney() {
  const data = [
    {
      title: '1 - Consultation & Treatment Planning',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your journey starts with a thorough consultation, clinical exam and 3D imaging (CBCT) to evaluate your
            suitability and create a personalised implant treatment plan.
          </p>
          <Image
            src={ConsultationImage}
            alt='Dental implant consultation with 3D imaging'
            width={ConsultationImage.width}
            height={ConsultationImage.height}
            //
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
            priority
          />
        </div>
      ),
    },
    {
      title: '2 - Implant Placement Surgery',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            The dental implant is gently placed under local anaesthetic. Over the following months, the implant
            integrates with the bone to provide a stable foundation.
          </p>
          <Image
            src={SurgeryImage}
            alt='Dental implant placement surgery'
            width={SurgeryImage.width}
            height={SurgeryImage.height}
            //
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '3 - Final Restoration',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Once healing is complete, an aesthetic custom-made crown, bridge, or denture is securely attached to the
            implant, restoring full function and a natural-looking Supernova smile.
          </p>
          <Image
            src={RestorationImage}
            alt='Final dental implant crown restoration'
            width={RestorationImage.width}
            height={RestorationImage.height}
            //
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id='journey' className='w-full'>
      <DentalImplantTimeline data={data} />
    </div>
  );
}
