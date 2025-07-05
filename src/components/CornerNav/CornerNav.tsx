'use client';

import { DentallyPortal } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';
import Button from '../Button/Button';

export const CornerNav = ({
  active,
  setActive,
  handleClose,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void; // Passing handleClose to CornerNav
}) => {
  return (
    <>
      <HamburgerButton active={active} setActive={setActive} handleClose={handleClose} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  return (
    <div className='relative mx-auto top-4 z-51 h-[calc(100vh)] w-[calc(100vw)] overflow-y-scroll'>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
        }}
        exit={{ opacity: 0, y: -12 }}
        className='flex flex-col items-center sm:flex-row gap-1 sm:gap-4 justify-center pt-20 pb-10'
      >
        <Logo />
        <div className='bg-gray-400/50 h-[50px] w-[1px] hidden sm:block' />
        <h2 className='text-3xl text-gray-50 items-center font-light'>Supernova Dental</h2>
      </motion.div>
      <LinksContainer />

      {/* Flexbox container for "Book Now" button at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.5, // Adjust the delay as needed
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        exit={{ opacity: 0, y: -8 }}
        className='flex justify-center w-full py-6 ' // Added mt-auto to push it to the bottom
      >
        <Link target='_blank' href={`${DentallyPortal}`}>
          <Button className='text-white'>Book Now</Button>
        </Link>
      </motion.div>

      <FooterCTAs />
    </div>
  );
};

const LinksContainer = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
    <motion.div className='space-y-6 pt-2 pb-8 px-4 mx-auto overflow-y-auto'>
      {/* Grid layout for all links */}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 xs:grid-cols-1'>
        {LINKS.map((l, idx) => (
          <NavLink
            key={l.title}
            href={l.href}
            idx={idx}
            subLinks={l.subLinks}
            isActive={activeLink === idx}
            onClick={() => {
              if (l.subLinks && l.subLinks.length > 0) {
                // Toggle active state for the clicked link with subLinks
                setActiveLink(activeLink === idx ? null : idx);
              } else {
                // If no subLinks, redirect to the href
                window.location.href = l.href;
              }
            }}
          >
            {l.title}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  idx,
  subLinks,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  idx: number;
  subLinks?: any[];
  isActive: boolean;
  onClick: () => void;
}) => {
  // Determine the number of columns based on the number of subLinks
  const columnsClass = subLinks && subLinks.length > 4 ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <div>
      <motion.a
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.75 + idx * 0.125,
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        exit={{ opacity: 0, y: -8 }}
        onClick={onClick} // Attach the click handler
        className='flex items-center justify-between text-lg font-semibold text-cream md:text-3xl cursor-pointer capitalize'
      >
        {children}
        {subLinks && subLinks.length > 0 && (
          <motion.div
            className='flex items-center'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
            }}
            exit={{ opacity: 0 }}
          >
            {isActive ? <FiChevronUp className='text-xl' /> : <FiChevronDown className='text-xl' />}
          </motion.div>
        )}
      </motion.a>

      {/* Only show sublinks when this link is active */}
      {isActive && subLinks && (
        <AnimatePresence>
          <motion.div
            className={`mt-4 grid gap-4 ${columnsClass}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            exit={{ opacity: 0 }}
          >
            {subLinks.map((subLink, subIndex) => (
              <motion.a
                key={subLink.href}
                href={subLink.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: subIndex * 0.1,
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                }}
                exit={{ opacity: 0, x: -10 }}
                className={`text-md font-medium text-white ${isActive ? 'highlight' : ''}`} // Add active state class
              >
                {subLink.title}
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

const Logo = () => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
      }}
      exit={{ opacity: 0, y: -12 }}
      className=''
    >
      <img src='/favicon.ico' alt='Supernova Dental Logo - Bridgwater Dentist' className='w-20 h-auto inline' />
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
  handleClose, // Pass the handleClose function here
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void; // Define the handleClose prop type
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? 'open' : 'closed'}
        variants={UNDERLAY_VARIANTS}
        className={cn('fixed z-51', active ? 'top-0 right-0' : 'top-2 right-2')}
      />

      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => {
          setActive((pv) => !pv);
          if (active) handleClose(); // Close the menu when clicked
        }}
        aria-label='Menu Button'
        className={`bg-grey group fixed right-2 top-2 z-[60] h-[50px] w-[50px] transition-all ${
          active ? 'rounded-bl-xl rounded-tr-xl' : 'rounded-xl'
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className='absolute block h-1 w-8 bg-white'
          style={{ y: '-50%', left: '50%', x: '-50%' }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className='absolute block h-1 w-8 bg-white'
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className='absolute block h-1 w-5 bg-white'
          style={{ x: '-50%', y: '50%', left: '50%' }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <div className='absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-4'>
      {SOCIAL_CTAS.map((l, idx) => (
        <motion.a
          key={idx}
          href={l.href}
          target='_blank'
          initial={{ opacity: 0, y: -8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1 + idx * 0.125,
              duration: 0.5,
              ease: 'easeInOut',
            },
          }}
          exit={{ opacity: 0, y: -8 }}
        >
          <l.Component className='text-3xl text-white transition-colors' />
        </motion.a>
      ))}
    </div>
  );
};

const LINKS = [
  {
    title: 'Home',
    href: '/',
  },

  //  TODO: Uncomment when there's an insta post
  // {
  //   title: 'Social',
  //   href: '#social',
  // },

  {
    title: 'Practice',
    href: '/practice',
  },
  // {
  //   title: 'Cosmetic Dentistry',
  //   href: '#',
  //   subLinks: [
  //     // { title: 'Invisalign Open Day', href: '/invisalign-open-day' },
  //     { title: 'Invisalign', href: '/invisalign' },
  //   ],
  // },
  {
    title: 'Services',
    href: '#',
    subLinks: [
      { title: 'Invisalign', href: '/invisalign' },
      { title: 'Dental Therapist', href: '/dental-therapist' },
      { title: 'Dental Hygiene', href: '/dental-hygiene' },
      { title: 'Dental Finance', href: '/dental-finance' },
    ],
  },
  {
    title: 'about us',
    href: '#',
    subLinks: [
      { title: 'Team', href: '/team' },
      { title: 'Find us', href: '/find-us' },
      // { title: 'Social', href: '/social' },
      { title: 'Pricing', href: '/pricing' },
      {
        title: 'Enquiry',
        href: '/enquiry',
      }
    ],
  },
  {
    title: 'Referral',
    href: '#',
    subLinks: [
      {
        title: 'Professional Referrals',
        href: '/professional-referrals',
      },
      {
        title: 'Refer A Friend',
        href: '/refer-a-friend',
      },
    ],
  },
];

export const SOCIAL_CTAS = [
  {
    Component: SiFacebook,
    href: 'https://www.facebook.com/profile.php?id=61567279201971',
  },
  {
    Component: SiInstagram,
    href: 'https://www.instagram.com/supernova.dental',
  },
  // {
  //   Component: SiLinkedin,
  //   href: '#',
  // },
  // {
  //   Component: SiYoutube,
  //   href: '#',
  // },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: '100%',
    height: '100%',
    transition: { type: 'spring', mass: 3, stiffness: 400, damping: 50 },
    background: 'var(--grey)',
  },
  closed: {
    width: '50px',
    height: '50px',
    background: 'transparent',
    transition: {
      background: {
        delay: 0.5,
        duration: 1,
        ease: 'easeInOut',
      },
      width: {
        duration: 0.5,
      },
      height: {
        duration: 0.5,
      },
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: 'calc(50% + 6px)',
    },
  },
};
