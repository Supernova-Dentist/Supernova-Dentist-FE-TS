'use client';

import { motion } from 'framer-motion';
import React from 'react';
import SteppedProgress from '../SteppedProgress/SteppedProgress';
import { stepContent } from './utils/stepContent';

export default function DentallyTutorial() {
  return (
    <section className='py-16 bg-gradient-to-b from-cream to-white'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        {/* Patient Portal section */}
        <div className='flex justify-center mb-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
            animate={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.5 }} // Animation duration
          >
            <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>Patient Portal</div>
          </motion.div>
        </div>

        {/* Title with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-gold'
        >
          Easy Online Booking
        </motion.h2>

        {/* Horizontal line with animation */}
        <motion.hr
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8'
        />

        {/* Description with animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='text-lg mb-16 pb-4 text-center max-w-2xl mx-auto'
        >
          Booking your appointment has never been easier—anytime, anywhere, even from your mobile device! Our seamless
          online system lets you schedule your visit with ease.
        </motion.p>

        {/* Steps to get set up */}
        <div className='grid grid-cols-1 gap-8'>
          <div className='flex flex-col justify-center'>
            <motion.h3
              initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
              animate={{ opacity: 1, y: 0 }} // Animate when in view
              transition={{ duration: 0.5 }} // Animation duration
              className='text-xl font-bold px-6 text-gold text-center'
            >
              First time? Let us help you get setup:
            </motion.h3>
            <SteppedProgress stepContent={stepContent} />
          </div>
        </div>
      </div>
    </section>
  );
}
