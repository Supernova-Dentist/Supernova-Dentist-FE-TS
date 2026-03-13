'use client';

import { TeethWhiteningTimeline } from '@/components/ServiceTimelines/TeethWhiteningTimeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TeethWhiteningProcessProps {
  id: string;
}

export function TeethWhiteningProcess({ id }: TeethWhiteningProcessProps) {
  const timelineData = [
    {
      title: 'Initial Examination & Shade Discussion',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your whitening journey begins with an examination to ensure your teeth and gums are healthy. We’ll discuss
            your current shade and what can be safely achieved, using an iTero digital scan to visualise your potential
            results.
          </p>
          <Image
            src='/assets/images/invisalign_p_1.jpg'
            alt='Initial Examination and Shade Discussion'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
    {
      title: 'Custom Whitening Trays Ready (2 Weeks)',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            In around two weeks, your custom trays will be ready. At this appointment, we’ll show you how to use your
            White Dental Beauty whitening kit safely at home. The trays fit perfectly to ensure even, gentle whitening
            across all teeth.
          </p>
          <Image
            src='/assets/images/invisalign_p_2.jpg'
            alt='Custom Whitening Trays Fitting'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
    {
      title: 'Two-Week Review',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            After completing your two-week at-home whitening, you’ll return for a review to check your progress and
            record your final shade. Your dentist will offer guidance on maintaining your brighter smile and when to top
            up if needed.
          </p>
          <Image
            src='/assets/images/teeth_whitening.jpg'
            alt='Teeth Whitening Review Appointment'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4 rounded-xl'
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
    <section ref={ref} className='w-full py-12 pt-24 '>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-gold'>Your Teeth Whitening Journey</h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-8' />
        <p className='text-lg md:text-xl text-center max-w-[35rem] mx-auto'>
          Your White Dental Beauty whitening treatment is simple and effective, completed over just a few weeks for
          lasting, natural results.
        </p>
        <TeethWhiteningTimeline data={timelineData} />
      </motion.div>
    </section>
  );
}
