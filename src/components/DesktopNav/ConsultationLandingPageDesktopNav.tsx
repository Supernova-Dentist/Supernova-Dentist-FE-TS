'use client';

import { DentallyPortal, navLinks } from '@/lib/constants';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function ConsultationLandingPageDesktopNav() {
  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }} // Initial state for the animation
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
      transition={{ duration: 1.5 }} // Duration of the animation
    >
      <nav className='bg-grey p-4 relative'>
        <ul className='flex items-center justify-between'>
          {/* Left: Logo */}
          <li>
            <FlyoutLink href='/' flyoutItems={[]}>
              <p className='text-xl text-center text-white mr-2 ml-6 xl:block hidden'>Supernova Dental</p>
              <Image
                width={120}
                height={120}
                priority
                src='/favicon.ico'
                alt='Supernova Dental Logo - Bridgwater Dentist'
                className='h-16 w-auto inline'
              />
            </FlyoutLink>
          </li>

          {/* Center: flyout links - absolutely positioned */}
          <li
            className='flex gap-8 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            style={{ pointerEvents: 'auto' }} // keep links clickable
          >
            <p className='text-xl text-center text-white mr-6 xl:block hidden font-semibold'>
              <span className='text-gold'>📞 CALL US:</span> 01278 228665
            </p>
          </li>

          {/* Right: Contact + Button */}
          <li className='flex gap-6 items-center'>
            {/* <p className='text-base sm:text-lg text-center text-white'>
              Email:{' '}
              <a href='mailto:enquiries@supernovadental.co.uk' className='underline'>
                enquiries@supernovadental.co.uk
              </a>
            </p> */}
            <Link target='_blank' href={`${DentallyPortal}`}>
              <Button className='text-white'>BOOK YOUR CONSULTATION</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
