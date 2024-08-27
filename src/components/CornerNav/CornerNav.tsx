import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import Chevron icons
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';

export const CornerNav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  return (
    <nav className='fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden'>
      <Logo />
      <LinksContainer />
      <FooterCTAs />
    </nav>
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

const NavLink = ({ children, href, idx, subLinks, isActive, onClick }) => {
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
        onClick={onClick}
        className='flex items-center justify-between text-lg font-semibold text-cream transition-colors md:text-3xl cursor-pointer'
      >
        {children}.
        {subLinks && (
          <motion.div initial={{ rotate: 0 }} animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isActive ? <FiChevronUp /> : <FiChevronDown />}
          </motion.div>
        )}
      </motion.a>

      <AnimatePresence>
        {isActive && subLinks && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' },
            }}
            exit={{ opacity: 0, y: -8 }}
            className='grid grid-cols-2 gap-2 mt-2 ml-4'
          >
            {subLinks.map((subLink, subIdx) => (
              <motion.a
                key={subLink.title}
                href={subLink.href}
                className='block text-sm font-medium text-cream transition-colors hover:text-gold md:text-lg'
                initial={{ opacity: 0, y: -8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 + subIdx * 0.1,
                    duration: 0.4,
                    ease: 'easeInOut',
                  },
                }}
                exit={{ opacity: 0, y: -8 }}
              >
                {subLink.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
      <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-16 md:h-24 w-auto inline' />
    </motion.a>
  );
};

const HamburgerButton = ({ active, setActive }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? 'open' : 'closed'}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className='fixed z-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 shadow-lg shadow-gray-800/20'
      />

      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${
          active ? 'rounded-bl-xl rounded-tr-xl' : 'rounded-xl'
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className='absolute block h-1 w-10 bg-white'
          style={{ y: '-50%', left: '50%', x: '-50%' }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className='absolute block h-1 w-10 bg-white'
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className='absolute block h-1 w-5 bg-white'
          style={{ x: '-50%', y: '50%' }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 md:flex-col'>
      {SOCIAL_CTAS.map((l, idx) => (
        <motion.a
          key={idx}
          href={l.href}
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
          <l.Component className='text-xl text-white transition-colors' />
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
      { title: 'root canal', href: '/general-dentistry/root-canal' },
      { title: 'emergency', href: '/general-dentistry/emergency' },
    ],
  },
  {
    title: 'about us',
    href: '#',
    subLinks: [
      { title: 'our clinic', href: '/clinic' },
      { title: 'find us', href: '/find-us' },
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
    Component: SiTwitter,
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
    width: 'calc(100% - 32px)',
    height: 'calc(100vh - 32px)',
    transition: { type: 'spring', mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: '80px',
    height: '80px',
    transition: {
      delay: 0.75,
      type: 'spring',
      mass: 3,
      stiffness: 400,
      damping: 50,
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
      left: 'calc(50% + 10px)',
    },
  },
};
