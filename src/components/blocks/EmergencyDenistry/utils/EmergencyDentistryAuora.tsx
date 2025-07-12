'use client';

import { SparklesPreview } from '@/components/SparklesPreview/SparklesPreview';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { EmergencyDentistryContainerTextFlip } from './EmergencyDentistryContainerTextFlip';

const COLORS_TOP = [
  '#FFD700', // Gold
  '#B0C4DE', // Light Slate Gray
  '#708090', // Slate Gray
  '#006400', // Dark Green
  '#1E67C6', // Dark Navy
];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate the color value to cycle through COLORS_TOP
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

  const sharedProps = {
    style: { border, boxShadow },
    whileHover: { scale: 1.025 },
    whileTap: { scale: 0.975 },
    className:
      'rounded-full px-4 py-2 text-sm md:text-base lg:text-lg bg-gray-900/40 text-white hover:bg-gray-800/70 transition-colors',
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        backgroundImage,
      }}
      className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='relative z-10 flex flex-col items-center'
      >
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.7 }}>
          <EmergencyDentistryContainerTextFlip />
        </motion.span>

        <div className='flex flex-wrap justify-center items-center gap-3 mt-8'>
          <motion.a href='tel:01278228665' {...sharedProps}>
            📞 Call
          </motion.a>
          <motion.a href='https://wa.me/447863338815' target='_blank' rel='noopener noreferrer' {...sharedProps}>
            💬 WhatsApp
          </motion.a>
          <motion.button onClick={scrollToPromotionForm} {...sharedProps}>
            📝 Book Online
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className='absolute inset-0 z-0'
      >
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </motion.div>
    </motion.section>
  );
};

export default AuroraHero;
