import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import Chevron icons
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

export const CornerNav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />

      <AnimatePresence>{active && <LinksOverlay setActive={setActive} />}</AnimatePresence>

    </>
  );
};


const LinksOverlay = ({ setActive }: any) => {
  return (
    <div className='fixed right-4 top-4 z-50 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-y-scroll'>
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
      <FooterCTAs />
    </div>
  );
};

const LinksContainer = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
    <motion.div className='space-y-6 py-8 px-12 pl-4 md:pl-20'>
      {LINKS.map((l, idx) => (
        <NavLink
          key={l.title}
          href={l.href}
          idx={idx}
          subLinks={l.subLinks}
          isActive={activeLink === idx}
          onClick={() => {
            if (idx === 0) {
              // Redirect to the homepage
              window.location.href = '/'; // For client-side navigation in Next.js
            } else {
              // Toggle the active link
              setActiveLink(activeLink === idx ? null : idx);
            }
          }}
        >

          {l.title}
        </NavLink>
      ))}
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
        onClick={handleClick} // Attach the click handler
        className='flex items-center justify-between text-lg font-semibold text-cream transition-colors md:text-3xl cursor-pointer capitalize'
      >
        {children}
      </motion.a>
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
      href='/'
      className='grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-lightGrey transition-colors hover:bg-violet-50'
    >
      <img src='/favicon.ico' alt='Supernova Dental Logo' className='w-16 h-auto inline' />
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? 'open' : 'closed'}
        variants={UNDERLAY_VARIANTS}
        className={cn('fixed z-50', active ? 'top-0 right-0' : 'top-2 right-2')}
      />

      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => setActive((pv) => !pv)}
        className={` bg-grey group fixed right-2 top-2 z-[60] h-[50px] w-[50px] transition-all ${
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
    <div className='absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-4 md:flex-col'>
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
    title: 'home',
    href: '/',
  },
  {
    title: 'cosmetic dentistry',
    href: '/cosmetic-dentistry',
    subLinks: [
      { title: 'invisalign', href: '/cosmetic-dentistry/invisalign' },
      { title: 'bonding', href: '/cosmetic-dentistry/composite-bonding' },
      { title: 'whitening', href: '/cosmetic-dentistry/tooth-whitening' },
      { title: 'implants', href: '/cosmetic-dentistry/dental-implants' },
    ],
  },
  {
    title: 'general dentistry',
    href: '/general-dentistry',
    subLinks: [
      { title: 'check-up', href: '/general-dentistry/general-checkup' },
      { title: 'fillings', href: '/general-dentistry/filling' },
      { title: 'root canal', href: '/general-dentistry/root-canal-treatment' },
      { title: 'emergency', href: '/general-dentistry/emergency' },
    ],
  },
  {
    title: 'about us',
    href: '#',
    subLinks: [
      { title: 'our clinic', href: '/clinic' },
      { title: 'meet the team', href: '/team' },
      { title: 'find us', href: '/find-us' },
      { title: 'pricing', href: '/pricing' },
      { title: 'enquiry', href: '/enquiry' },
      { title: 'faq', href: '/faq' },
    ],
  },
  {
    title: 'media',
    href: '#',
    subLinks: [
      { title: 'blog', href: '/blog' },
      { title: 'gallery', href: '/gallery' },
      { title: 'social', href: '/social' },
    ],
  },
];

const SOCIAL_CTAS = [
  {
    Component: SiFacebook,
    href: '#',
  },
  {
    Component: SiInstagram,
    href: '#',
  },
  {
    Component: SiLinkedin,
    href: '#',
  },
  {
    Component: SiYoutube,
    href: '#',
  },
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
