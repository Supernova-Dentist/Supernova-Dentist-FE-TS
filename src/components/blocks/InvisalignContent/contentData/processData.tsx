'use client';

import { InvisalignTimeline } from '@/components/ServiceTimelines/InvisalignTimeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import FinalStages from '../../../../../public/assets/images/Invisalign/Supernova-14.jpg';
import ReceivingAligners from '../../../../../public/assets/images/Invisalign/Supernova-16.jpg';
import ProgressCheck from '../../../../../public/assets/images/Invisalign/Supernova-30.jpg';
import InitialConsultation from '../../../../../public/assets/images/Invisalign/Supernova-33.jpg';

interface InvisalignJourneyProps {
  id: string;
}

export function InvisalignJourney({ id }: InvisalignJourneyProps) {
  const data = [
    {
      title: '1 - Initial Consultation',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Your journey begins with a consultation to discuss your goals and assess your dental health. The dentist
            will discuss your digital scans and treatment objectives in detail to create a customised treatment plan.
          </p>
          <Image
            src={InitialConsultation}
            alt='Initial Consultation'
            width={InitialConsultation.width}
            height={InitialConsultation.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '2 - Receiving Your Aligners',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Once your aligners are ready, they will be fitted by your dentist. Instructions will be provided on how to
            wear and care for your aligners.
          </p>
          <Image
            src={ReceivingAligners}
            alt='Receiving Aligners'
            width={ReceivingAligners.width}
            height={ReceivingAligners.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '3 - Progress Check-ins',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Regular check-ins are scheduled to monitor your progress. Your dentist will ensure that your teeth are
            moving according to the treatment plan.
          </p>
          <Image
            src={ProgressCheck}
            alt='Progress Check-ups'
            width={ProgressCheck.width}
            height={ProgressCheck.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '4 - Final Stages and Retainers',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            As you near the end of your treatment, you will receive your final set of aligners. After completing the
            treatment, you will be given retainers to maintain the new position of your teeth.
          </p>
          <Image
            src={FinalStages}
            alt='Final Stages'
            width={FinalStages.width}
            height={FinalStages.height}
            placeholder='blur'
            quality={75}
            className='max-w-[30rem] w-full mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className='w-full py-12 pt-24'>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-gold'>Your Invisalign Journey</h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-8' />
        <p className='text-lg md:text-xl text-center max-w-[35rem] mx-auto'>
          Transforming your smile with Invisalign is a journey that involves several steps. Here&apos;s what you can
          expect along the way:
        </p>
        <InvisalignTimeline data={data} />
      </motion.div>
    </section>
  );
}
