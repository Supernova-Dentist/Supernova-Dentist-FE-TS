'use client';
import React from 'react';
import { SparklesCore } from '../ui/Sparkles';

export function SparklesPreview() {
  return (
    <div className='h-[16rem] md:h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md'>
      <div className='flex flex-col items-center py-4'>
        <h1 className=' text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-nowrap text-center text-white relative z-20'>
          Supernova Dental
        </h1>
        <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-14 md:h-24 lg:h-36 w-auto inline ' />
      </div>

      <div className='w-[16rem] md:w-[40rem] h-24 md:h-40 relative'>
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
        <div className='absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </div>
    </div>
  );
}
