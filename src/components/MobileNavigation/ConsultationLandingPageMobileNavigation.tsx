'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CornerNav } from '../CornerNav/CornerNav';

interface ConsultationLandingPageMobileNavigationProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConsultationLandingPageMobileNavigation({
  active,
  setActive,
}: ConsultationLandingPageMobileNavigationProps) {
  const [showContent, setShowContent] = useState(true);

  /**
   * Lock body scroll when menu is open
   */
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    };
  }, [active]);

  /**
   * Handle delayed close to match animation timing
   */
  const handleClose = () => {
    setActive(false);
    setShowContent(false);

    setTimeout(() => {
      setShowContent(true);
    }, 500); // must match closing animation duration
  };

  return (
    <nav className='relative flex items-center px-4 py-4'>
      {/* Center Logo (hidden when menu open) */}
      {!active && showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='absolute left-1/2 -translate-x-1/2'
        >
          <Link href='/'>
            <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-12 w-auto' />
          </Link>
        </motion.div>
      )}
<a href='tel:01278228665' className='ml-auto'>
      <p className='text-xl text-center text-white mr-6 font-semibold'>
        <span className='text-gold'>📞 CALL</span>
      </p>
        </a>
    </nav>
  );
}
