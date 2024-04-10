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

  // Prepare mobile navigation links, similar to desktop but formatted for the Drawer
  const mobileNavigationLinks = (
    <>
      <DrawerClose asChild>
        <Button variant='outline' className='m-4'>
          Close Menu
        </Button>
      </DrawerClose>
      {/* Adapt your navigation structure for mobile here */}
      <ListItem href='/' title='Home' />
      <ListItem href='/about/clinic' title='Our Clinic' />
      <ListItem href='/about/team' title='Meet the Team' />
      {/* Add the rest of your links */}
    </>
  );

  // Mobile drawer navigation setup
  const mobileNavigation = (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return isDesktop ? desktopNavigation : mobileNavigation;
};

export default MainNav;
