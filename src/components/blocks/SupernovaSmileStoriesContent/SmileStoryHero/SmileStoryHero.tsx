'use client';

import { ScrollToPromotionFormMotionButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormMotionButton';

import { FlipWords } from '@/components/ui/flip-words';
import { motion, useMotionTemplate } from 'framer-motion';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ImagesSlider } from '../../../ui/images-slider';

export function SmileStoryHero() {
  const desktopImages = [
    '/assets/images/outerBuilding.jpg',
    '/assets/images/invisalign_2.jpg',
    '/assets/images/invisalign_3.jpg',
    '/assets/images/invisalign_openday_4.jpg',
    '/assets/images/invisalign_5.jpg',
    '/assets/images/adam_mia_reception.jpg',
  ];

  const mobileImages = [
    '/assets/images/outerBuilding.jpg',
    '/assets/images/invisalign_4.jpg',
    '/assets/images/invis_6.jpg',
    '/assets/images/invis_7.jpg',
    '/assets/images/invis_8.jpg',
  ];

  const border = useMotionTemplate`1px solid #a4693d`;
  const boxShadow = useMotionTemplate`0px 4px 24px #a4693d`;

  const words = [
    'Real Patient Stories',
    'Smile Transformations',
    'Confident Smiles',
    'Recognised for Customer Care',
    '100+ 5-Star Reviews',
    'Before & After',
    'Safe & Comfortable',
    'Your Journey Starts Here',
    'Book a Consultation',
  ];

  return (
    <>
      {/* Desktop Hero */}
      <div className='hidden md:block h-[100vh]'>
        <ImagesSlider images={desktopImages}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='z-40 flex flex-col justify-center items-center'
          >
            <motion.h1 className='font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 mb-4'>
              Supernova Smile Stories <br /> <br /> <FlipWords words={words} /> 
            </motion.h1>
            <ScrollToPromotionFormMotionButton
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className='group relative flex w-fit items-center gap-1.5 lg:mt-8 rounded-full text-md md:text-lg lg:text-xl bg-gray-950/10 px-4 py-1.5 text-gray-50 transition-colors hover:bg-gray-950/50'
            >
              Start Your Story
              <FiArrowRight className='transition-transform rotate-90 lg:rotate-0 lg:group-hover:rotate-90 group-active:-rotate-12' />
            </ScrollToPromotionFormMotionButton>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Mobile Hero */}
      <div className='block md:hidden h-[100vh]'>
        <ImagesSlider images={mobileImages}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='z-30 relative flex flex-col justify-center items-center'
          >
            <motion.p className='font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4'>
              Supernova Dental <br /> Smile Stories <br /> <br />
              <FlipWords words={words} />
            </motion.p>
            <ScrollToPromotionFormMotionButton
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className='group relative flex w-fit items-center gap-1.5 mt-6 lg:mt-8 rounded-full text-md md:text-lg lg:text-xl bg-gray-950/10 px-4 py-1.5 text-gray-50 transition-colors hover:bg-gray-950/50'
            >
              Start Your Story
              <FiArrowRight className='transition-transform rotate-90 lg:rotate-0 lg:group-hover:rotate-90 group-active:-rotate-12' />
            </ScrollToPromotionFormMotionButton>
          </motion.div>
        </ImagesSlider>
      </div>
    </>
  );
}
