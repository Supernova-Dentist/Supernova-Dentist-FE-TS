'use client';

import ConsultationLandingPageDesktopNav from '@/components/DesktopNav/ConsultationLandingPageDesktopNav';
import DesktopNav from '@/components/DesktopNav/DesktopNav';
import ConsultationLandingPageMobileNavigation from '@/components/MobileNavigation/ConsultationLandingPageMobileNavigation';
import MobileNavigation from '@/components/MobileNavigation/MobileNavigation';
import { usePathname } from 'next/navigation';
// import { OpenDayBanner } from '@/components/StickyBanner/OpenDayBanner';
import React, { useEffect, useRef, useState } from 'react';

// Hook to get window size
export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

// MainNav component
const MainNav = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  // const [showBanner, setShowBanner] = useState(false);
  const scrollPosition = useRef(0);
  const isMobile = width <= 1024;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const showConsultationLandingPage = pathname === '/smile-makeover-consultation' || pathname === '/book-appointment';

  // Check banner visibility from localStorage
  /* useEffect(() => {
        const dismissed = localStorage.getItem('bannerDismissed');
        if (dismissed !== 'true') {
          setShowBanner(true);
        }
        // If we are on the invisalign open day page we don't want to show the banner
        if (window.location.pathname === '/cosmetic-dentistry/invisalign-open-day' || window.location.pathname === '/general-dentistry/emergency-dentistry' || window.location.pathname === '/cosmetic-dentistry/dental-implants') {
          setShowBanner(false);
        }
      }, [
      ]); */

  // useEffect(() => {
  //   setShowConsultationLandingPage(window.location.pathname === '/book-your-consultation');
  // }, [window.location.pathname]);

  // Handle scroll-based navbar visibility
  useEffect(() => {
    if (isMobile) setNavbarVisible(true);

    scrollPosition.current = window.scrollY;

    const handleScroll = () => {
      if (mobileMenuOpen) return; // ⛔ STOP scroll logic if menu open

      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < scrollPosition.current) {
        setNavbarVisible(true);
      } else if (currentScrollPosition > 100) {
        setNavbarVisible(false);
      }

      scrollPosition.current = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, mobileMenuOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <nav />;

  return (
    <>
      {/* ✅ Only render banner if not dismissed */}
      {/* {showBanner && (
        <div className='fixed top-0 left-0 w-full z-[60]'>
          <OpenDayBanner onDismiss={() => setShowBanner(false)} />
        </div>
      )} */}

      {/* ✅ Navigation */}
      <header
        className={`fixed left-0 top-0 w-full z-50 transition-transform duration-300 ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {showConsultationLandingPage ? (
          isMobile ? (
            <div className='bg-grey'>
              <ConsultationLandingPageMobileNavigation active={mobileMenuOpen} setActive={setMobileMenuOpen} />
            </div>
          ) : (
            <ConsultationLandingPageDesktopNav />
          )
        ) : isMobile ? (
          <div className='bg-grey'>
            <MobileNavigation active={mobileMenuOpen} setActive={setMobileMenuOpen} />
          </div>
        ) : (
          <DesktopNav />
        )}
      </header>
    </>
  );
};

export default MainNav;
