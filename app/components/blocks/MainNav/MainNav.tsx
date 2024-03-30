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

const ListItem = ({ href, title }: { href: string, title: string }) => (
  <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
    {title}
  </NavigationMenuLink>
);

const MainNav = () => {
  return (
    <NavigationMenu className='mx-auto flex flex-row justify-end my-6'>
      <NavigationMenuList>
        {/* Non-dropdown items do not need to be wrapped */}
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Wrap dropdown items in their own NavigationMenu for positioning */}
        <NavigationMenu>
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
        </NavigationMenu>

        <NavigationMenu>
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
        </NavigationMenu>

        <NavigationMenu>
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
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-full gap-3 p-4'>
                <ListItem href='/contact/location' title='Location' />
                <ListItem href='/contact/schedule' title='Schedule an Appointment' />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
