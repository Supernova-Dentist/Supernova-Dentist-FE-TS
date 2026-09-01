'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CornerNav } from '../CornerNav/CornerNav';

interface MobileNavigationProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavigation({ active, setActive }: MobileNavigationProps) {
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
    }, 200);
  };

  return (
    <div className='relative flex min-h-20 items-center border-b border-white/10 px-4 py-4'>
      {/* Center Logo (hidden when menu open) */}
      {!active && showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='absolute left-1/2 -translate-x-1/2'
        >
          <Link href='/' className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
            <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-10 w-auto' />
          </Link>
        </motion.div>
      )}

      {/* Corner Nav (hamburger + overlay) */}
      <CornerNav active={active} setActive={setActive} handleClose={handleClose} />
    </div>
  );
}
