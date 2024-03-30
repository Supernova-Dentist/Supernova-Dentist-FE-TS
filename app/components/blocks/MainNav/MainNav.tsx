'use client';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
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
} from '@/components/ui/navigation-menu';

// Styled ListItem component for menu links
const ListItem = ({ href, title }: { href: string; title: string }) => (
  <NavigationMenuLink
    href={href}
    className={`${navigationMenuTriggerStyle()} text-amber-500 hover:bg-black hover:text-white p-2`}
  >
    {title}
  </NavigationMenuLink>
);

// MainNav component with the full navigation structure
const MainNav = () => {
  return (
    <NavigationMenu className='h-screen min-w-full mx-auto justify-end bg-black py-6 px-4'>
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
};

export default MainNav;
