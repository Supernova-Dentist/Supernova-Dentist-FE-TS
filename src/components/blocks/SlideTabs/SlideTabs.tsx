'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

export const SlideTabsExample = () => {
  return (
    <div className='bg-transparent pt-4 pb-24'>
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className='relative mx-auto flex w-fit rounded-full border-2 border-black bg-lightGrey p-1'
    >
      <Tab setPosition={setPosition} to='/dental-implants'>
        Dental Implants
      </Tab>
      <Tab setPosition={setPosition} to='/invisalign'>
        Invisalign
      </Tab>
      <Tab setPosition={setPosition} to='/general-dentistry'>
        General Dentistry
      </Tab>
      <Tab setPosition={setPosition} to='/composite-bonding'>
        Composite Bonding
      </Tab>
      <Tab setPosition={setPosition} to='/tooth-whitening'>
        Tooth Whitening
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, to }: { children: React.ReactNode, setPosition: React.Dispatch<React.SetStateAction<any>>, to: string }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = (ref.current as HTMLElement).getBoundingClientRect();

        setPosition({
          left: (ref.current as HTMLElement).offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      <Link href={to}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className='absolute z-0 h-7 rounded-full bg-black md:h-12'
    />
  );
};
