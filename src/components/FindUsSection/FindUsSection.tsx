'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Map } from 'react-feather';

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
    <section
      className='flex flex-col lg:flex-row bg-gradient-to-b from-cream to-white items-center justify-center lg:py-16'
      ref={ref}
    >
      {/* Text Section */}
      <motion.div
        className='w-full lg:w-1/2 p-4 max-w-prose md:p-12 flex flex-col items-center text-center lg:text-left'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>
          Find Us at Supernova Dental
        </h2>
        <p className='mt-4'>
          Visit our dental practice located in Bridgewater! Find our contact details, opening hours, parking
          information, and more on our Find Us page.
        </p>

        <Link href='/find-us'>
          <Button className='mt-6 w-fit p-6'>Find Us</Button>
        </Link>
      </motion.div>

      {/* Icon Section */}
      <motion.div
        className='flex justify-center'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
      >
        <Map className='h-12 w-12 text-gray-800' /> {/* Customize size and color */}
      </motion.div>
    </section>
  );
}
