import { DentallyPortal } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { CornerNav } from '../CornerNav/CornerNav';

export default function MobileNavigation() {
  const [active, setActive] = useState(false);
  const [showContent, setShowContent] = useState(true); // State for controlling content visibility during the close animation

  // Handle closing animation delay
  const handleClose = () => {
    setActive(false); // Trigger the closing animation
    setShowContent(false); // Hide content immediately
    setTimeout(() => {
      setShowContent(true); // Show content after animation (matching the duration of the animation)
    }, 500); // Ensure this matches the duration of your closing animation (adjust as necessary)
  };

  return (
    <nav className='relative flex items-center px-4 py-8'>
      {/* Logo centered */}
      {!active && showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='absolute left-1/2 transform -translate-x-1/2'
        >
          <Link href='/'>
            <img src='/favicon.ico' alt='Logo' className='h-12' />
          </Link>
        </motion.div>
      )}

      {/* CornerNav stays on the right */}
     
      <CornerNav active={active} setActive={setActive} handleClose={handleClose} />
     
    </nav>
  );
}
