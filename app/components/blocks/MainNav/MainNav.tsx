'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'; // Ensure these imports match your project structure
import { Button } from '@/components/ui/button'; // Update import path as necessary

// Simple implementation of useMediaQuery hook
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

// Styled ListItem component for menu links, reused from your first snippet
const ListItem = ({ href, title }) => (
  <NavigationMenuLink
    href={href}
    className={`${navigationMenuTriggerStyle()} text-amber-500 hover:bg-black hover:text-white p-2`}
  >
    {title}
  </NavigationMenuLink>
);

// MainNav component for responsive navigation
const MainNav = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Reuse your original desktop navigation structure
  const desktopNavigation = (
    <NavigationMenu className='mx-auto justify-end bg-black py-6 px-4'>
      <NavigationMenuList className='text-white'>
        {/* Home link */}
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-amber-500`}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* About Us dropdown */}
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='hover:text-amber-500 text-white'>
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent className='bg-white text-black'>
              <ul className='grid w-full gap-3 p-4'>
                <ListItem href='/about/clinic' title='Our Clinic' />
                <ListItem href='/about/team' title='Meet the Team' />
                <ListItem href='/about/careers' title='Careers' />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        {/* Our Services dropdown */}
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='hover:text-amber-500 text-white'>
              Our Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className='bg-white text-black'>
              <ul className='grid w-full gap-3 p-4'>
                <ListItem href='/services/general-dentistry' title='General Dentistry' />
                <ListItem href='/services/cosmetic-dentistry' title='Cosmetic Dentistry' />
                <ListItem href='/services/orthodontics' title='Orthodontics' />
                <ListItem href='/services/pediatric-dentistry' title='Pediatric Dentistry' />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        {/* Patient Info dropdown */}
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='hover:text-amber-500 text-white'>
              Patient Info
            </NavigationMenuTrigger>
            <NavigationMenuContent className='bg-white text-black'>
              <ul className='grid w-full gap-3 p-4'>
                <ListItem href='/patient-info/forms' title='Patient Forms' />
                <ListItem href='/patient-info/insurance' title='Insurance and Payment' />
                <ListItem href='/patient-info/faq' title='FAQs' />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        {/* Contact dropdown */}
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='hover:text-amber-500 text-white'>
              Contact
            </NavigationMenuTrigger>
            <NavigationMenuContent className='bg-white text-black'>
              <ul className='grid w-full gap-3 p-4'>
                <ListItem href='/contact/location' title='Location' />
                <ListItem href='/contact/schedule' title='Contact Us' />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Book an Appointment */}
          <NavigationMenuItem>
            {/* <Link href='/contact/schedule' passHref> */}
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-amber-500`}>
              Book an Appointment
            </NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
        </NavigationMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );

  // Accordion component for mobile dropdown
  const Accordion = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button className='w-full justify-between' onClick={() => setIsOpen(!isOpen)}>
          {title}
          <span className='font-bold'>{isOpen ? '-' : '+'}</span>
        </Button>
        {isOpen && (
          <div className='flex flex-col'>
            {links.map((link) => (
              <Link href={link.href} key={link.title} passHref>
                <Button as='a' className='text-amber-500 hover:bg-black hover:text-white p-2 block'>
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
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline' className='m-4'>
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerClose asChild>
            <Button variant='outline' className='m-4'>
              Close
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <Accordion
          title='About Us'
          links={[
            { href: '/about/clinic', title: 'Our Clinic' },
            { href: '/about/team', title: 'Meet the Team' },
            { href: '/about/careers', title: 'Careers' },
          ]}
        />
        {/* Repeat Accordion for other top-level items */}
        {/* <Link href='/appointment' passHref>
          <Button as='a' className='w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white'>
            Request Appointment
          </Button>
        </Link> */}
      </DrawerContent>
    </Drawer>
  );

  return isDesktop ? desktopNavigation : mobileNavigation;
};

export default MainNav;
