'use client';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

// Styled ListItem component for menu links, reused from your first snippet
const ListItem = ({ href, title }: { href: string; title: string }) => (
  <Link href={href} legacyBehavior passHref>
    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-gold hover:bg-grey hover:text-cream p-2`}>
      {title}
    </NavigationMenuLink>
  </Link>
);

// MainNav component for responsive navigation
const MainNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { width } = useWindowSize();

  // Close the navigation drawer when the window is resized to desktop width
  useEffect(() => {
    if (width >= 768 && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [width, drawerOpen]);

  // Reuse your original desktop navigation structure
  const DesktopNavigation = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuHover = (menuName: string | null) => {
      setActiveMenu(menuName);
    };

    const handleCloseMenu = () => {
      setActiveMenu(null);
    };

    return (
      <div className='hidden lg:block'>
        <NavigationMenu delayDuration={0} className='mx-auto justify-end bg-grey py-6 px-4'>
          <NavigationMenuList className='text-cream'>
            {/* Home link */}
            <NavigationMenuItem>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-gold`}>
                  <text className='text-lg'>Home</text>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Cosmetic Services dropdown */}
            <NavigationMenu
              delayDuration={0}
              onMouseEnter={() => handleMenuHover('cosmetic-services')}
              onMouseLeave={handleCloseMenu}
            >
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={(event) => event.preventDefault()}
                  className='hover:text-gold text-cream text-lg'
                >
                  Cosmetic Services
                </NavigationMenuTrigger>
                {activeMenu === 'cosmetic-services' && (
                  <NavigationMenuContent className='bg-cream text-grey opacity-100 visible'>
                    <ul className='grid w-full gap-3 p-4'>
                      <ListItem href='/invisalign' title='Invisalign' />
                      <ListItem href='/composite-bonding' title='Composite Bonding' />
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenu>

            {/* General Services dropdown */}
            <NavigationMenu
              delayDuration={0}
              onMouseEnter={() => handleMenuHover('general-services')}
              onMouseLeave={handleCloseMenu}
            >
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={(event) => event.preventDefault()}
                  className='hover:text-gold text-cream text-lg'
                >
                  General Services
                </NavigationMenuTrigger>
                {activeMenu === 'general-services' && (
                  <NavigationMenuContent className='bg-cream text-grey opacity-100 visible'>
                    <ul className='grid w-full gap-3 p-4'>
                      <ListItem href='/implants' title='Implants' />
                      <ListItem href='/emergency-dentist' title='Emergency Dentist' />
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenu>

            {/* Patient Info dropdown
            <NavigationMenu
              delayDuration={0}
              onMouseEnter={() => handleMenuHover('patient')}
              onMouseLeave={handleCloseMenu}
            >
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={(event) => event.preventDefault()}
                  className='hover:text-gold text-cream text-lg'
                >
                  Patient Info
                </NavigationMenuTrigger>
                {activeMenu === 'patient' && (
                  <NavigationMenuContent className='bg-cream text-grey opacity-100 visible'>
                    <ul className='grid w-full gap-3 p-4'>
                      <ListItem href='/forms' title='Patient Forms' />
                      <ListItem href='/insurance' title='Insurance and Payment' />
                      <ListItem href='/faq' title='FAQs' />
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenu> */}

            {/* About Us dropdown */}
            <NavigationMenu
              delayDuration={0}
              onMouseEnter={() => handleMenuHover('about')}
              onMouseLeave={handleCloseMenu}
            >
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={(event) => event.preventDefault()}
                  className='hover:text-gold text-cream text-lg'
                >
                  About Us
                </NavigationMenuTrigger>
                {activeMenu === 'about' && (
                  <NavigationMenuContent className='bg-cream text-grey opacity-100 visible'>
                    <ul className='grid w-full gap-3 p-4'>
                      <ListItem href='/clinic' title='Our Clinic' />
                      <ListItem href='/meet-dr-young' title='Meet Dr. Young' />
                      <ListItem href='/team' title='Meet the Team' />
                      <ListItem href='/find-us' title='Find Us' />
                      <ListItem href='/pricing' title='Pricing' />
                      <ListItem href='/social' title='Social' />
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenu>

            {/* Book Button */}

            <div>
              <Link href='/'>
                <Button className='bg-gold hover:bg-amber-700 text-cream px-4 py-2 rounded ml-4'>Book Now</Button>
              </Link>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  };

  // Accordion component for mobile dropdown
  const Accordion = ({
    title,
    links,
    closeDrawer,
  }: {
    title: string;
    links: Array<{ href: string; title: string }>;
    closeDrawer: () => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
      setIsOpen(false); // Close the accordion
      closeDrawer(); // Close the drawer
    };

    return (
      <div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full flex justify-between items-center mt-2 px-4 py-6 text-cream bg-grey hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 '
        >
          {title}
          <span className={`text-2xl ${isOpen ? 'rotate-180' : 'rotate-0'}`}>{isOpen ? '-' : '+'}</span>
        </Button>
        {isOpen && (
          <div className='flex flex-col mt-2 ml-6 '>
            {links.map((link) => (
              <Link href={link.href} key={link.title} passHref>
                <Button className='text-cream my-1 hover:text-gray-200 block' onClick={handleLinkClick}>
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mobile drawer navigation setup
  const mobileNavigation = (
    <div className='lg:hidden bg-grey'>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <div className='flex justify-end'>
          {/* Flex container to push the button to the right */}
          <DrawerTrigger asChild>
            <Button className='m-4' onClick={() => setDrawerOpen(!drawerOpen)}>
              {' '}
              {/* Toggle open state */}
              {drawerOpen ? <XIcon className='h-6 w-6 text-cream' /> : <MenuIcon className='h-6 w-6 text-cream' />}
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent className='flex flex-col bg-slate-700 shadow-xl p-8 mb-12'>
          <Accordion
            title='Cosmetic Services'
            links={[
              { href: '/invisalign', title: 'Invisalign' },
              { href: '/composite-bonding', title: 'Composite Bonding' },
            ]}
            closeDrawer={() => setDrawerOpen(false)} // Pass closeDrawer function
          />
          <Accordion
            title='General Services'
            links={[
              { href: '/implants', title: 'Implants' },
              { href: '/emergency-dentist', title: 'Emergency Dentist' },
            ]}
            closeDrawer={() => setDrawerOpen(false)} // Pass closeDrawer function
          />
          {/* Additional Accordion components */}
          <Accordion
            title='About'
            links={[
              { href: '/clinic', title: 'Our Clinic' },
              { href: '/meet-dr-young', title: 'Meet Dr. Young' },
              { href: '/team', title: 'Meet the Team' },
              { href: '/find-us', title: 'Find Us' },
              { href: '/pricing', title: 'Pricing' },
              { href: '/social', title: 'Social' },
            ]}
            closeDrawer={() => setDrawerOpen(false)} // Pass closeDrawer function
          />
          <div className='flex justify-center'>
            <Link href='/'>
              <Button className='text-lg bg-gold hover:bg-amber-700 text-cream px-8 py-6 rounded mt-6'>Book Now</Button>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );

  return (
    <nav>
      {DesktopNavigation()}
      {mobileNavigation}
    </nav>
  );
};

export default MainNav;
