'use client';

import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const SlideTabsExample = ({ isGeneralServicePage = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state for the animation
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
      transition={{ duration: 0.5 }} // Duration of the animation
      ref={ref}
      className='bg-transparent pt-4 pb-24 px-4'
    >
      <SlideTabs isGeneralServicePage={isGeneralServicePage} />
    </motion.div>
  );
};

type SlideTabsProps = {
  isGeneralServicePage: boolean;
};

const SlideTabs = ({ isGeneralServicePage }: SlideTabsProps) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 176; // 9rem in pixels
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto flex flex-wrap justify-center w-full ${
        isGeneralServicePage ? 'max-w-[36rem]' : 'max-w-[56rem]'
      } rounded-full border-2 border-black bg-lightGrey p-1`}
    >
      {/* <Tab setPosition={setPosition} onClick={() => scrollToSection('smileView')}>
        Virtual Smile
      </Tab> */}
      <Tab setPosition={setPosition} onClick={() => scrollToSection('info')}>
        Introduction
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection('benefits')}>
        Benefits
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection('journey')}>
        Journey
      </Tab>
      {!isGeneralServicePage && (
        <>
          <Tab setPosition={setPosition} onClick={() => scrollToSection('comparison')}>
            Comparisons
          </Tab>
        </>
      )}
      <Tab setPosition={setPosition} onClick={() => scrollToSection('faq')}>
        FAQs
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<any>>;
  onClick: () => void;
}) => {
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
      onClick={onClick}
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className='hidden lg:block absolute z-0 h-7 rounded-full bg-black sm:h-8 md:h-10 lg:h-12'
    />
  );
};
