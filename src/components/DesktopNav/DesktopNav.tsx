'use client';

import Link from 'next/link';
import React from 'react';
import { DentallyPortal, navLinks } from '@/lib/constants';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  return (
    <nav className='bg-grey p-6'>
      <ul className='flex justify-center gap-8 items-center '>
        <FlyoutLink href='/' flyoutItems={[]}>
          Home
        </FlyoutLink>
        {navLinks.map(({ name, flyout, url }) => (
          <FlyoutLink key={name} href={url} flyoutItems={flyout}>
            {name}
          </FlyoutLink>
        ))}

        {/* <li>
          <Link target='_blank' href={`${DentallyPortal}`}>
            <Button className='text-md bg-gold hover:bg-amber-700 text-cream px-4 py-2 rounded'>Book Now</Button>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
