'use client';
import { DentallyPortal } from '@/lib/constants';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import smileImage from '../../../public/assets/images/Invisalign_Smile_View.jpg';

export const CosmeticFloatingPhone = () => {
  return (
    <div
      className='mx-auto relative my-6 scale-100 md:scale-110 lg:scale-125'
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        initial={{
          transform: 'translateZ(8px) translateY(-2px)',
        }}
        animate={{
          transform: 'translateZ(32px) translateY(-10px)',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className='relative w-72 h-[540px] rounded-[40px] bg-gold p-[10px] shadow-2xl'
      >
        {/* Phone body */}
        <div className='relative h-full w-full rounded-[34px] border-[2px] border-white bg-neutral-900 overflow-hidden'>
          <HeaderBar />

          <Screen />
        </div>
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className='absolute left-1/2 top-3 z-10 h-2 w-20 -translate-x-1/2 rounded-md bg-neutral-800' />

      <div className='absolute right-4 top-3 z-10 flex gap-2'>
        <FiWifi className='text-neutral-500' />
        <FiBatteryCharging className='text-neutral-500' />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className='relative h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden'>
      {/* Main image (clinic / smile zone) */}
      <div className='absolute inset-y-14 left-0 right-0'>
        <Image
          src={smileImage}
          alt='Supernova Dental Smile Consultation Zone Bridgwater'
          width={800}
          height={600}
          className='object-cover opacity-95'
        />
      </div>

      {/* CTA button */}
      <button
        onClick={scrollToPromotionForm}
        className='absolute bottom-3 left-5 right-5 rounded-xl bg-gold py-3 text-sm font-semibold text-white shadow-lg hover:bg-lightGold transition'
      >
        Preview My Smile
      </button>
    </div>
  );
};
