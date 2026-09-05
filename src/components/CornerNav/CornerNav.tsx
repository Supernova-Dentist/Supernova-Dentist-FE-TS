'use client';

import { DentallyPortal } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

export const CornerNav = ({
  active,
  setActive,
  handleClose,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void; // Passing handleClose to CornerNav
}) => {
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

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} handleClose={handleClose} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  return (
    <nav id='mobile-navigation-panel' aria-label='Mobile site navigation' className='relative mx-auto top-4 z-51 h-[calc(100vh)] w-[calc(100vw)] overflow-y-scroll'>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, ease: 'easeOut' },
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
            delay: 0.04,
            duration: 0.2,
            ease: 'easeOut',
          },
        }}
        exit={{ opacity: 0, y: -8 }}
        className='flex justify-center w-full py-16 ' // Added mt-auto to push it to the bottom
      >
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href={DentallyPortal}
          className='inline-flex min-h-12 items-center justify-center rounded bg-gold px-6 py-3 text-base font-semibold text-grey transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'
        >
          Book Now
        </Link>
      </motion.div>

      <FooterCTAs />
    </nav>
  );
};

const LinksContainer = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
    <motion.div className='space-y-6 pt-2 pb-8 px-1 mx-auto overflow-y-auto'>
      {/* Grid layout for all links */}
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-2 xs:grid-cols-1'>
        {LINKS.map((l, idx) => (
          <NavLink
            key={l.title}
            href={l.href}
            idx={idx}
            subLinks={l.subLinks}
            isActive={activeLink === idx}
            onClick={() => {
              if (l.subLinks !== undefined && l.subLinks.length > 0) {
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
  const isReferral = typeof children === 'string' && children.toLowerCase() === 'referral';
  const hasSubLinks = subLinks !== undefined && subLinks.length > 0;
  const columnsClass = isReferral ? 'grid-cols-1' : hasSubLinks ? 'grid-cols-2' : '';
  return (
    <div>
      {hasSubLinks ? (
        <motion.button
          type='button'
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: Math.min(idx * 0.02, 0.08), duration: 0.18, ease: 'easeOut' } }}
          exit={{ opacity: 0, y: -8 }}
          onClick={onClick}
          aria-expanded={isActive}
          className='flex min-h-12 w-full items-center justify-between rounded-sm text-left text-lg font-semibold capitalize text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark md:text-3xl'
        >
          {children}
          <motion.div
            className='flex items-center'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.18, ease: 'easeOut' },
            }}
            exit={{ opacity: 0 }}
          >
            {isActive ? <FiChevronUp className='text-xl' /> : <FiChevronDown className='text-xl' />}
          </motion.div>
        </motion.button>
      ) : (
        <motion.a
          href={href}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: Math.min(idx * 0.02, 0.08), duration: 0.18, ease: 'easeOut' } }}
          exit={{ opacity: 0, y: -8 }}
          className='flex min-h-12 items-center rounded-sm text-lg font-semibold capitalize text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark md:text-3xl'
        >
          {children}
        </motion.a>
      )}

      {/* Only show sublinks when this link is active */}
      {isActive && subLinks !== undefined && (
        <AnimatePresence>
          <motion.div
            className={`mt-4 grid gap-4 ${columnsClass}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.18, ease: 'easeOut' },
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
                    delay: Math.min(subIndex * 0.015, 0.06),
                    duration: 0.18,
                    ease: 'easeOut',
                  },
                }}
                exit={{ opacity: 0, x: -10 }}
                className={`inline-flex min-h-11 items-center rounded-sm text-base font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark ${isActive ? 'highlight' : ''}`}
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
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      exit={{ opacity: 0, y: -12 }}
      href='/'
      aria-label='Supernova Dental home'
      className='rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'
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
        aria-label={active ? 'Close menu' : 'Open menu'}
        aria-expanded={active}
        aria-controls='mobile-navigation-panel'
        className={`bg-grey group fixed right-2 top-2 z-[60] h-[50px] w-[50px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark ${
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
          rel='noopener noreferrer'
          aria-label={l.label}
          initial={{ opacity: 0, y: -8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: Math.min(idx * 0.02, 0.06),
              duration: 0.18,
              ease: 'easeOut',
            },
          }}
          exit={{ opacity: 0, y: -8 }}
          className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'
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
    title: 'Cosmetic Dentistry',
    href: '#',
    subLinks: [
      // { title: 'Invisalign Open Day', href: '/cosmetic-dentistry/invisalign-open-day' },
      { title: 'Explore Cosmetic Dentistry', href: '/cosmetic-dentistry' },
      // { title: 'Invisalign Flash Sale', href: '/cosmetic-dentistry/invisalign-flash-sale' },
      // { title: 'Invisalign Open Day', href: '/cosmetic-dentistry/invisalign-open-day' },
      { title: 'Invisalign', href: '/cosmetic-dentistry/invisalign' },
      { title: 'Dental Implants', href: '/cosmetic-dentistry/dental-implants' },
      { title: 'Composite Bonding', href: '/cosmetic-dentistry/composite-bonding' },
      { title: 'Teeth Whitening', href: '/cosmetic-dentistry/teeth-whitening' },
    ],
  },
  {
    title: 'General Dentistry',
    href: '#',
    subLinks: [
      // { title: 'Invisalign Open Day', href: '/invisalign-open-day' },
      { title: 'Explore General Dentistry', href: '/general-dentistry' },
      { title: 'New Patient Examination', href: '/general-dentistry/new-patient-examination' },
      { title: 'Emergency Dentistry', href: '/general-dentistry/emergency-dentistry' },
      { title: 'Dental Membership Plans', href: '/general-dentistry/dental-membership-plans' },
      { title: 'White Composite Fillings', href: '/general-dentistry/white-composite-fillings' },
      { title: 'Root Canal Treatment', href: '/general-dentistry/root-canal-treatment' },
      { title: 'Dentures', href: '/general-dentistry/dentures' },
      { title: 'Dental Therapist', href: '/general-dentistry/dental-therapist' },
      { title: 'Dental Hygiene', href: '/general-dentistry/dental-hygiene' },
      { title: 'Dental Finance', href: '/general-dentistry/dental-finance' },
      { title: 'Sports Mouthguards', href: '/general-dentistry/sports-mouthguards' },
    ],
  },
  {
    title: 'about us',
    href: '#',
    subLinks: [
      // { title: 'Supernova Smile Stories', href: '/supernova-smile-stories' },
      { title: 'Practice', href: '/practice' },
      // { title: 'Our Journey', href: '/our-journey' },
      { title: 'Team', href: '/team' },
      { title: 'Find us', href: '/find-us' },
      // { title: 'Social', href: '/social' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Cancellations', href: '/cancellations' },
      {
        title: 'Enquiry',
        href: '/enquiry',
      },
      {
        title: 'Careers',
        href: '/careers',
      },
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
    label: 'Visit Supernova Dental on Facebook',
  },
  {
    Component: SiInstagram,
    href: 'https://www.instagram.com/supernova.dental',
    label: 'Visit Supernova Dental on Instagram',
  },
  {
    Component: SiWhatsapp,
    href: 'https://wa.me/447863338815',
    label: 'Contact Supernova Dental on WhatsApp',
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
    transition: { duration: 0.22, ease: 'easeOut' },
    background: 'var(--grey)',
  },
  closed: {
    width: '50px',
    height: '50px',
    background: 'transparent',
    transition: {
      background: {
        duration: 0.18,
        ease: 'easeOut',
      },
      width: {
        duration: 0.2,
      },
      height: {
        duration: 0.2,
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
