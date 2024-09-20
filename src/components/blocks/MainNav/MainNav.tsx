'use client';

import { CornerNav } from '@/components/CornerNav/CornerNav';
import DesktopNav from '@/components/DesktopNav/DesktopNav';
import React, { useEffect, useState } from 'react';

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

  const isMobile = width <= 800; // Define your mobile breakpoint here

  return <header>{isMobile ? <CornerNav /> : <DesktopNav />}</header>;
};

export default MainNav;
