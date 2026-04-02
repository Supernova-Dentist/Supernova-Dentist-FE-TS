'use client';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import React, { type SVGProps, useEffect, useState } from 'react';

export const StickyBanner = ({
  onDismiss,
  className,
  children,
  hideOnScroll = false,
}: {
  onDismiss?: () => void;
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();

  // ✅ Check localStorage on mount
  useEffect(() => {
    const dismissed = localStorage.getItem('bannerDismissed');
    if (dismissed === 'true') {
      setOpen(false);
    }
  }, []);

  // ✅ Handle scroll hide/show if enabled
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else if (!localStorage.getItem('bannerDismissed')) {
      setOpen(true);
    }
  });

  // ✅ Handle close (and notify parent)
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('bannerDismissed', 'true');
    if (onDismiss) onDismiss(); // ← this is the missing piece
  };

  return (
    <motion.div
      className={cn(
        'sticky inset-x-0 top-0 z-40 flex h-20 md:h-28 w-full items-center justify-center bg-transparent px-4 py-1 cursor-pointer',
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: open ? 0 : -100, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className='absolute right-2 cursor-pointer flex items-center justify-center'
        onClick={handleClose}
        aria-label='Close banner'
      >
        <CloseIcon className='h-5 w-5 text-white' />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M18 6l-12 12' />
    <path d='M6 6l12 12' />
  </svg>
);
