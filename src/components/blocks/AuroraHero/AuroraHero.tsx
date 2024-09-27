'use client';

import { SparklesPreview } from '@/components/SparklesPreview/SparklesPreview';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const COLORS_TOP = [
  '#FFD700', // Gold
  '#B0C4DE', // Light Slate Gray
  '#708090', // Slate Gray
  '#006400', // Dark Green
  '#1E67C6', // Dark Navy
];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    void animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 15,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'
    >
      <div className='relative z-10 flex flex-col items-center'>
        <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
          Limited Time Offer Now Live!
        </span>
        <SparklesPreview />

        <motion.button
          onClick={scrollToPromotionForm}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className='group relative flex w-fit items-center gap-1.5 lg:mt-4 rounded-full text-md md:text-lg lg:text-xl bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50'
        >
          Sign Up Now
          <FiArrowRight className='transition-transform rotate-90 lg:rotate-0 lg:group-hover:rotate-90 group-active:-rotate-12' />
        </motion.button>
      </div>

      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;
