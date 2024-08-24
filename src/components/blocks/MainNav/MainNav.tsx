'use client';

import DesktopNav from '@/components/DesktopNav/DesktopNav';
import MobileMenu from '@/components/MobileNav';
import MenuManager from '@/components/MobileNav/MenuManager';
import React from 'react';

// Custom hook to get window size
const useWindowSize = () => {
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away to set initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

// MainNav component for responsive navigation
const MainNav = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768; // Define your mobile breakpoint here

  return (
    <nav>
      {isMobile ? (
        <MenuManager>
          <MobileMenu />
        </MenuManager>
      ) : (
        <DesktopNav />
      )}
    </nav>
  );
};

export default MainNav;
