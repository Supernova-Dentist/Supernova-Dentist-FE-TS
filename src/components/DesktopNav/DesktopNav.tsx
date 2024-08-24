'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/lib/constants';
import Link from 'next/link';
import Button from '../Button/Button';

export default function DesktopNav() {
  return (
    <div className='flex justify-end gap-8 items-center bg-grey p-6'>
      <FlyoutLink href='/' flyoutItems={[]}>
        Home
      </FlyoutLink>
      {navLinks.map(({ name, flyout }) => (
        <FlyoutLink key={name} href='#' flyoutItems={flyout}>
          {name}
        </FlyoutLink>
      ))}

      <Link href='/'>
        <Button className='text-md bg-gold hover:bg-amber-700 text-cream px-4 py-2 rounded'>Book Now</Button>
      </Link>
    </div>
  );
}

type FlyoutLinkProps = {
  children: React.ReactNode;
  href: string;
  flyoutItems: Array<{ name: string; link: string }>; // Array of sub-links
};

const FlyoutLink = ({ children, href, flyoutItems }: FlyoutLinkProps) => {
  const [open, setOpen] = useState(false);

  const showFlyout = flyoutItems.length > 0 && open;

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='relative w-fit h-fit z-50'>
      <a href={href} className='relative text-white'>
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out'
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-12 bg-white text-black shadow-lg'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
            <div className='w-64 bg-white p-6 shadow-xl z-50'>
              {flyoutItems.map(({ name, link }) => (
                <a key={name} href={link} className='block text-sm hover:underline'>
                  {name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
