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
import React, { useState } from 'react';

// Styled ListItem component for menu links, reused from your first snippet
const ListItem = ({ href, title }: { href: string; title: string }) => (
  <Link href={href} legacyBehavior passHref>
    <NavigationMenuLink
      className={`${navigationMenuTriggerStyle()} text-amber-500 hover:bg-black hover:text-white p-2`}
    >
      {title}
    </NavigationMenuLink>
  </Link>
);

// MainNav component for responsive navigation
const MainNav = () => {
  const [open, setOpen] = useState(false);

  // Reuse your original desktop navigation structure
  const desktopNavigation = (
    <div className='hidden md:block'>
      <NavigationMenu className='mx-auto justify-end bg-black py-6 px-4'>
        <NavigationMenuList className='text-white'>
          {/* Home link */}
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-amber-500`}
              >
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
                  <ListItem href='/clinic' title='Our Clinic' />
                  <ListItem href='/team' title='Meet the Team' />
                  <ListItem href='/careers' title='Careers' />
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
                  <ListItem href='/general-dentistry' title='General Dentistry' />
                  <ListItem href='/cosmetic-dentistry' title='Cosmetic Dentistry' />
                  <ListItem href='/orthodontics' title='Orthodontics' />
                  <ListItem href='/pediatric-dentistry' title='Pediatric Dentistry' />
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
                  <ListItem href='/forms' title='Patient Forms' />
                  <ListItem href='/insurance' title='Insurance and Payment' />
                  <ListItem href='/faq' title='FAQs' />
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
                  <ListItem href='/location' title='Location' />
                  <ListItem href='/schedule' title='Contact Us' />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Book an Appointment */}
            <NavigationMenuItem>
              {/* <Link href='/contact/schedule' passHref> */}
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-amber-500`}
              >
                Book an Appointment
              </NavigationMenuLink>
              {/* </Link> */}
            </NavigationMenuItem>
          </NavigationMenu>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );

  // Accordion component for mobile dropdown
  const Accordion = ({
    title,
    links,
  }: {
    title: string;
    links: Array<{ href: string; title: string }>;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full flex justify-between items-center mt-2 px-4 py-6 text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300'
        >
          {title}
          <span
            className={`text-2xl transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            {isOpen ? '-' : '+'}
          </span>
        </Button>
        {isOpen && (
          <div className='flex flex-col mt-2 ml-6 '>
            {links.map((link) => (
              <Link href={link.href} key={link.title} passHref className=''>
                <Button className='text-white my-1 hover:text-gray-200 block'>{link.title}</Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mobile drawer navigation setup
  const mobileNavigation = (
    <div className='md:hidden bg-black'>
      <Drawer open={open} onOpenChange={setOpen}>
        <div className='flex justify-end'>
          {' '}
          {/* Flex container to push the button to the right */}
          <DrawerTrigger asChild>
            <Button className='m-4'>
              {open ? (
                <XIcon className='h-6 w-6 text-white' />
              ) : (
                <MenuIcon className='h-6 w-6 text-white' />
              )}
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent className='flex flex-col bg-slate-700 shadow-xl p-8'>
          <Accordion
            title='About Us'
            links={[
              { href: 'clinic', title: 'Our Clinic' },
              { href: 'team', title: 'Meet the Team' },
              { href: 'careers', title: 'Careers' },
            ]}
          />
          <Accordion
            title='Our Services'
            links={[
              { href: 'general-dentistry', title: 'General Dentistry' },
              { href: 'cosmetic-dentistry', title: 'Cosmetic Dentistry' },
              { href: 'orthodontics', title: 'Orthodontics' },
              { href: 'pediatric-dentistry', title: 'Pediatric Dentistry' },
            ]}
          />
          <Accordion
            title='Patient Info'
            links={[
              { href: 'forms', title: 'Patient Forms' },
              { href: 'insurance', title: 'Insurance and Payment' },
              { href: 'faq', title: 'FAQs' },
            ]}
          />
          <Accordion
            title='Contact'
            links={[
              { href: 'location', title: 'Location' },
              { href: 'schedule', title: 'Schedule Appointment' },
            ]}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );

  return (
    <nav>
      {desktopNavigation}
      {mobileNavigation}
    </nav>
  );
};

export default MainNav;
