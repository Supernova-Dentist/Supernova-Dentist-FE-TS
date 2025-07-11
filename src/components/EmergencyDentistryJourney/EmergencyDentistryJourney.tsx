'use client';

import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import React, { useState } from 'react';
import { DentalImplantTimeline } from '../ServiceTimelines/DentalImplantTimeline';
import { EmergencyDentistryTimeline } from '../ServiceTimelines/EmergencyDentistryTimeline';

// Placeholder images — replace these with your actual imports when ready
const ConsultationImage = '/assets/images/emerg_2.jpg';
const TreatmentImage = '/assets/images/emerg_3.jpg';
const FollowUpImage = '/assets/images/emerg_4.jpg';

export function EmergencyDentistryJourney() {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const data = [
    {
      title: '1 - Immediate Consultation & Diagnosis',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your emergency dental journey begins with a quick consultation and diagnosis. We assess your condition
            through a detailed examination and any necessary imaging to determine the cause of the pain or injury.
          </p>
          <Image
            src={ConsultationImage}
            alt='Emergency dental consultation and examination'
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
      title: '2 - Emergency Treatment & Pain Relief',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Once diagnosed, we provide immediate treatment, including pain relief, infection control, and procedures
            like fillings, crowns, or root canals to address the emergency. The goal is to stop the pain and stabilize
            your dental health.
          </p>
          <Image
            src={TreatmentImage}
            alt='Emergency dental treatment and pain relief'
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
      title: '3 - Follow-Up Call & Examination Scheduling',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            After your emergency treatment, we’ll schedule a follow-up call to ensure you&apos;re feeling better. If
            needed, we can arrange a more detailed examination to address any ongoing concerns.
          </p>
          <Image
            src={FollowUpImage}
            alt='Emergency follow-up and examination scheduling'
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
      <EmergencyDentistryTimeline data={data} setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} />
    </div>
  );
}
