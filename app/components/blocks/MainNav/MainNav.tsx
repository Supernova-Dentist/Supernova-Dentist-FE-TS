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

// Assuming NavigationMenuLink is designed to handle navigation internally or does not wrap well with <Link>
const ListItem = ({ href, title }) => (
  <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
    {title}
  </NavigationMenuLink>
);

const MainNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-full gap-3 p-4'>
              <ListItem href='/about/clinic' title='Our Clinic' />
              <ListItem href='/about/team' title='Meet the Team' />
              <ListItem href='/about/careers' title='Careers' />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-full gap-3 p-4'>
              <ListItem href='/services/general-dentistry' title='General Dentistry' />
              <ListItem href='/services/cosmetic-dentistry' title='Cosmetic Dentistry' />
              <ListItem href='/services/orthodontics' title='Orthodontics' />
              <ListItem href='/services/pediatric-dentistry' title='Pediatric Dentistry' />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Patient Info</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-full gap-3 p-4'>
              <ListItem href='/patient-info/forms' title='Patient Forms' />
              <ListItem href='/patient-info/insurance' title='Insurance and Payment' />
              <ListItem href='/patient-info/faq' title='FAQs' />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-full gap-3 p-4'>
              <ListItem href='/contact/location' title='Location' />
              <ListItem href='/contact/schedule' title='Schedule an Appointment' />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
