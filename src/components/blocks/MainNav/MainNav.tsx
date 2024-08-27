'use client';

import DesktopNav from '@/components/DesktopNav/DesktopNav';
import MobileMenu from '@/components/MobileNav';
import MenuManager from '@/components/MobileNav/MenuManager';
import React, { useState, useEffect } from 'react';

// Custom hook to get window size
const useWindowSize = () => {
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <nav></nav>; // Placeholder or a loading indicator
  }

  const isMobile = width <= 768; // Define your mobile breakpoint here

  return (
    <>
      {isMobile ? (
        <MenuManager>
          <MobileMenu />
        </MenuManager>
      ) : (
        <DesktopNav />
      )}
    </>
  );
};

export default MainNav;
