'use client';

import { CornerNav } from '@/components/CornerNav/CornerNav';
import DesktopNav from '@/components/DesktopNav/DesktopNav';

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';


// Custom hook to get window size
export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

// MainNav component for responsive navigation
const MainNav = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const scrollPosition = useRef(0); // Use ref to store scroll position

  useEffect(() => {
    // Initialize scroll position on mount
    scrollPosition.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < scrollPosition.current) {
        setNavbarVisible(true); // Show navbar when scrolling up
      } else if (currentScrollPosition > 100) {
        // Hide after scrolling down 100px
        setNavbarVisible(false); // Hide navbar when scrolling down
      }

      // Update scroll position after every scroll
      scrollPosition.current = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <nav></nav>; // Placeholder or a loading indicator
  }

  const isMobile = width <= 800; // Define your mobile breakpoint here

  return (
   
      <header
        className={`${
          !isMobile
            ? `z-50 fixed top-0 left-0 w-full transition-transform duration-300 ${
                navbarVisible ? 'translate-y-0' : '-translate-y-full'
              }`
            : ''
        }`}
      >
        {isMobile ? <CornerNav /> : <DesktopNav />}
      </header>
   
  );
};

export default MainNav;
