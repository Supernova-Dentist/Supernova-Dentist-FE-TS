'use client';
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedLogo from '../AnimatedSVGLogo/AnimatedSVGLogo';
import { SparklesCore } from '../ui/Sparkles';

export function SparklesPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-[19rem] md:h-[27.5rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md'
    >
      <div className='relative flex flex-col items-center justify-center md:mb-8 px-4 sm:px-6 text-center text-white'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className='flex flex-col items-center justify-center h-auto text-gray-50'
        >
          <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 flex flex-col lg:flex-row items-center justify-center'>
            <span className='lg:hidden my-2'>Supernova</span> {/* Shown on small screens */}
            <span className='hidden lg:inline-flex items-center px-4'>
              {/* Shown on large screens */}
              Supernova
            </span>
            Dental
            <span className='w-20 md:w-24 lg:w-28 mt-2 lg:mt-0 inline-flex items-center justify-center lg:ml-4'>
              <AnimatedLogo />
            </span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='w-[16rem] md:w-[40rem] h-24 md:h-40 relative mb-4'
      >
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className='absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </motion.div>
    </motion.div>
  );
}
