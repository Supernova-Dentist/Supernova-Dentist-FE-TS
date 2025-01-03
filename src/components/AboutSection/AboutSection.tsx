'use client';

import { Button } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import OverallGoogleRating from '../blocks/OverallGoogleRating/OverallGoogleRating';
import Link from 'next/link';

export default function AboutSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      className='flex flex-col lg:flex-row-reverse bg-gradient-to-b from-cream to-white items-center justify-center lg:py-16'
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
        <OverallGoogleRating />
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>About Supernova Dental</h2>
        <p className='mt-4'>
          At Supernova Dental, we are a passionate team dedicated to providing the highest standard of dental care in
          Bridgewater. Now open and accepting new patients, our state-of-the-art practice blends advanced technology
          with a personal touch to ensure a comfortable and exceptional experience for every patient.
        </p>

        <Link href='/clinic'>
          <Button className='mt-6 w-fit p-6'>Learn more!</Button>
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className='flex justify-center'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
      >
        <Image
          src='/assets/images/outerBuilding.jpg'
          alt='About Us'
          width={600}
          height={600}
          layout={'responsive'}
          quality={100}
          className='object-contain h-auto w-auto max-w-[46rem] rounded-lg p-4'
        />
      </motion.div>
    </section>
  );
}
