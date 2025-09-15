'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

function SaraSection() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });
  return (
    <motion.div
      ref={ref}
      className='relative w-full mx-auto max-w-7xl pb-8 px-4 md:pb-20 flex flex-col lg:flex-row items-center gap-8 justify-center'
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Text + Button */}
      <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
        <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>
          Meet Dr. Sara D Banuri
        </h2>
        <p className='mt-4 text-lg md:text-xl'>
          Find out more about Dr. Sara D Banuri’s experience in dental implants and full-arch treatments. She combines
          clinical expertise with a caring approach to ensure every patient enjoys a personalised, comfortable, and
          professional treatment journey.
        </p>
        <a
          href={`/team/dr-sara-d-banuri?ref=${encodeURIComponent('cosmetic-dentistry/dental-implants')}`}
          className='mt-6 mx-auto inline-block px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition'
        >
          Find Out More
        </a>
      </div>

      {/* Image */}
      <motion.div
        className='w-full lg:w-1/2 flex justify-center'
        initial='hidden'
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
      >
        <Image
          src='/assets/images/Headshots/sara.jpg'
          alt='Dr. Sara D Banuri'
          width={600}
          height={800}
          quality={100}
          className='object-contain h-auto w-full max-w-[30rem] rounded-lg'
        />
      </motion.div>
    </motion.div>
  );
}

export default SaraSection;
