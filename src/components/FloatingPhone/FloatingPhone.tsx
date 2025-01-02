'use client';
import { DentallyPortal } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';

export const FloatingPhone = () => {
  return (
    <div
      className='rounded-[24px] bg-gold mx-auto w-56 h-84 relative my-6 transform md:scale-90 scale-50 sm:transform sm:rotate-y-[-30deg] sm:rotate-x-[15deg]'
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        initial={{
          transform: 'translateZ(8px) translateY(-2px)',
        }}
        animate={{
          transform: 'translateZ(32px) translateY(-8px)',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className='relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]'
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className='absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900'></div>
      <div className='absolute right-3 top-2 z-10 flex gap-2'>
        <FiWifi className='text-neutral-600' />
        <FiBatteryCharging className='text-neutral-600' />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className='relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white'>
      {/* Example logo from logoispum */}
      <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-16 md:h-24 w-auto inline' />

      <Link target='_blank' href={`${DentallyPortal}`}>
        <button className='absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-gold backdrop-blur'>
          Get Started
        </button>
      </Link>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className='absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-gold' />
    </div>
  );
};
