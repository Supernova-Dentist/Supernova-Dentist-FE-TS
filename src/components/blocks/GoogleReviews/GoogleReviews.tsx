'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import OverallGoogleRating from '../OverallGoogleRating/OverallGoogleRating';

export default function GoogleReviews() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id='reviews' className='flex flex-col px-4 py-12' ref={ref}>
      <div className='flex justify-center mb-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'
        >
          Patient Reviews
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'
      >
        What Our Patients Say
      </motion.h2>

      <motion.hr
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8'
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='text-xl md:text-2xl lg:text-2xl text-center text-gray-800 mb-8'
      >
        Read real feedback from our patients on Google.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center gap-2 mb-8'
      >
        <OverallGoogleRating />
        <p className='text-sm text-gray-600'>Based on verified Google reviews</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <GoogleReviewsCarousel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='flex justify-center mt-10'
      >
        <button
          onClick={scrollToPromotionForm}
          className='bg-primary text-white px-6 py-4 rounded-lg bg-gold hover:bg-lightGold'
        >
          Book a Consultation
        </button>
      </motion.div>
    </div>
  );
}
