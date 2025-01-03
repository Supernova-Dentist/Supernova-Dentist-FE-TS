'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Map, MapPin } from 'react-feather';

export default function FindUsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section className='flex flex-col bg-gradient-to-b from-white to-cream items-center justify-center' ref={ref}>
      {/* Text Section */}
      <motion.div
        className='space-y-2 w-full lg:w-3/4 p-4 max-w-prose md:p-12 flex flex-col items-center text-center lg:text-left'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className='flex justify-center mb-4'>
          <div className='rounded-xl bg-grey px-4 py-1 text-sm text-gray-50'>Location</div>
        </div>
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl pb-6'>Find Us in Bridgwater</h2>
        <hr className='border-t-2 border-grey w-20 mx-auto mt-4 pb-8' />
        <p className='mt-4 p-2'>
          Visit our dental practice located in Bridgwater! Find our contact details, opening hours, parking information
          and more on our Find Us page.
        </p>

        {/* Icon Section */}
        <motion.div
          className='flex justify-center my-4'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        >
          <MapPin className='h-12 w-12' /> {/* Customize size and color */}
        </motion.div>

        <Link href='/find-us'>
          <Button className='mt-6 w-fit p-6'>Find Us</Button>
        </Link>
      </motion.div>
    </section>
  );
}
