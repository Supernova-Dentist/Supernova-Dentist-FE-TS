'use client';

import { DentallyPortal, navLinks } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  return (
    <nav className='bg-grey p-6'>
      
      <ul className='flex justify-end gap-8 items-center'>
        <FlyoutLink href='/' flyoutItems={[]}>
          Home
        </FlyoutLink>
        {navLinks.map(({ name, subLinks, url }: { name: string, subLinks: any[], url: string }) => (
          <FlyoutLink key={name} href={url} flyoutItems={subLinks}>
            {name}
          </FlyoutLink>
        ))}

        <li>
          <Link target='_blank' href={`${DentallyPortal}`}>
            <Button>Book Now</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
