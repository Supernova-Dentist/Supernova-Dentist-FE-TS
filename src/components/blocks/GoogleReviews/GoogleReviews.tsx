'use client';

import { motion } from 'framer-motion';
import React from 'react';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import OverallGoogleRating from '../OverallGoogleRating/OverallGoogleRating';
import { useInView } from 'react-intersection-observer';

export default function GoogleReviews() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <div
      id='reviews'
      className='flex flex-col bg-cream px-4 py-12 bg-gradient-to-b from-white to-cream'
      ref={ref} // Attach the ref to the section
    >
      <div className='flex justify-center mb-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'
        >
          Our Reviews
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.5 }} // Animation duration
        className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'
      >
        What Our Patients Say
      </motion.h2>
      <motion.hr
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.5 }} // Animation duration
        className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8'
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.5 }} // Animation duration
        className='text-xl md:text-2xl lg:text-2xl text-center text-gray-800 mb-6'
      >
        See what our team&apos;s previous patients have to say about them
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.5 }} // Animation duration
      >
        <OverallGoogleRating />
        <GoogleReviewsCarousel />
      </motion.div>
    </div>
  );
}
