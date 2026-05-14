'use client';
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedLogo from '../AnimatedSVGLogo/AnimatedSVGLogo';
import { SparklesCore } from '../ui/Sparkles';

export function ImplantSparklesPreview() {
  return (
    <motion.div
      id='form'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='pt-20 lg:py-4 w-full flex flex-col items-center justify-center overflow-hidden rounded-md'
    >
      <div className='relative flex flex-col items-center justify-center md:mb-8 px-4 sm:px-6 text-center text-white'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className='flex flex-col items-center justify-center h-auto text-gray-50'
        >
          <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 flex flex-col lg:flex-row items-center justify-center text-gold'>
            Fixed Teeth <br />
            That Feel Natural.
          </h1>

          <p className='my-2 text-sm uppercase tracking-[0.12em] text-gray-400 md:text-base'>
            Dental Implants | Full Arch Solutions | Missing Teeth Replacement | Natural Results
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='w-[40rem] h-4 relative mb-4'
      >
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />
      </motion.div>
    </motion.div>
  );
}
