'use client';

import { navLinks } from '@/lib/constants';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <nav className='bg-grey p-6'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }} // Initial state for the animation
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <ul className='flex gap-8 items-center justify-between'>
          <div>
            <FlyoutLink href='#welcome' flyoutItems={[]}>
              Supernova Dental{' '}
              <img src='/favicon.ico' alt='Supernova Dental Logo' className='ml-2 h-10 w-auto inline ' />
            </FlyoutLink>
          </div>

          <div className='flex-1 flex gap-8 items-center justify-center'>
            {navLinks.map(({ name, flyout, url }) => (
              <FlyoutLink key={name} href={url} flyoutItems={flyout}>
                {name}
              </FlyoutLink>
            ))}
          </div>
          <li>
            <Button
              onClick={scrollToPromotionForm}
              className='text-md bg-gold hover:bg-amber-700 text-cream px-4 py-2 rounded'
            >
              Sign Up!
            </Button>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
