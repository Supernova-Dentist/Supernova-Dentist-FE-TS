'use client';

import Link from 'next/link';
import React from 'react';
import { DentallyPortal, navLinks } from '@/lib/constants';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  return (
    <nav className='bg-grey p-6'>
      <ul className='flex justify-end gap-8 items-center '>
        <FlyoutLink href='/' flyoutItems={[]}>
          Home
        </FlyoutLink>
        {navLinks.map(({ name, subLinks, url }) => (
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
