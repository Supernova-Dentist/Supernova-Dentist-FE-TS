'use client';

import { InvisalignTimeline } from '@/components/ServiceTimelines/InvisalignTimeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface InvisalignJourneyProps {
  id: string;
}

export function InvisalignJourney({ id }: InvisalignJourneyProps) {
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

  return (
    <section ref={ref} className='w-full py-12 pt-24 bg-gradient-to-b from-cream to-white'>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }} // Initial state for the animation
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-gold'>Your Invisalign Journey</h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-8' />
        <p className='text-lg md:text-xl text-center max-w-[35rem] mx-auto'>
          Transforming your smile with Invisalign is a journey that involves several steps. Here&apos;s what you can
          expect along the way:
        </p>
        <InvisalignTimeline data={timelineData} />
      </motion.div>
    </section>
  );
}
