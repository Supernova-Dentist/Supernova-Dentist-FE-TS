'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!ref.current) return [0, 0];

    const rect = (ref.current as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
        cursor: 'pointer',
      }}
      className='relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300'
    >
      <div
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
        className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg'
      >
        <div className='flex justify-center items-center mt-4'>
          <img src={icon} alt={`${title} icon`} className='w-24 h-24 object-contain' loading='lazy' />
        </div>

        <div className='text-center mt-6 p-2'>
          <p className='text-xl font-semibold'>{title}</p>
          <p>{text}</p> {/* Ensure to include the text if needed */}
        </div>
      </div>
    </motion.div>
  );
};
