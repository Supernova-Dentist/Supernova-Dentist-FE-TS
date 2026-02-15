'use client';

import { InvisalignTimeline } from '@/components/ServiceTimelines/InvisalignTimeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { OurJourneyTimeline } from './OurJourneyTimeline';

interface OurJourneyProps {
  id: string;
}

export function OurJourney({ id }: OurJourneyProps) {
  const timelineData = [
    {
      title: 'Initial Consultation',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your journey begins with a consultation to discuss your goals and assess your dental health. The dentist
            will discuss your digital scans and treatment objectives in detail to create a customised treatment plan.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-33.jpg'
            alt='Initial Consultation'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'Receiving Your Aligners',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Once your aligners are ready, they will be fitted by your dentist. Instructions will be provided on how to
            wear and care for your aligners.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-16.jpg'
            alt='Receiving Aligners'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'Progress Check-ins',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Regular check-ins are scheduled to monitor your progress. Your dentist will ensure that your teeth are
            moving according to the treatment plan.
          </p>
          <Image
            src='/assets/images/Invisalign/Supernova-30.jpg'
            alt='Progress Check-ups'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: 'Final Stages and Retainers',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
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
          />
        </div>
      ),
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.05, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return <OurJourneyTimeline data={timelineData} />;
}
