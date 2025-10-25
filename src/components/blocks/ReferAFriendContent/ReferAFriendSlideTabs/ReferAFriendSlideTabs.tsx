'use client';

import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const ReferAFriendSlideTabs = ({ isGeneralServicePage = false }) => {
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
      className='bg-transparent pt-4 pb-8 px-4'
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

    const offset = 20; // 9rem in pixels
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition,
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
      } rounded-full border-2 border-black bg-transparent p-1`}
    >
      {/* <Tab setPosition={setPosition} onClick={() => scrollToSection('smileView')}>
        Virtual Smile
      </Tab> */}
      <Tab setPosition={setPosition} onClick={() => scrollToSection('form')}>
        Refer A Friend
      </Tab>

      <Tab setPosition={setPosition} onClick={() => scrollToSection('leaderboard')}>
        Dental Credit
      </Tab>

      {!isGeneralServicePage && (
        <>
          <Tab setPosition={setPosition} onClick={() => scrollToSection('journey')}>
            Journey
          </Tab>
        </>
      )}
      <Tab setPosition={setPosition} onClick={() => scrollToSection('results')}>
        Results
      </Tab>
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
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase  rounded-xl shadow-xl mr-2 my-2 border border-solid lg:bg-transparent  text-gold  sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  );
};
