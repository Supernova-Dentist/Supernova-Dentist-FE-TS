'use client';

import Link from 'next/link';
import React from 'react';
import { navLinks } from '@/lib/constants';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  return (
    <nav className='bg-grey p-6'>
      <ul className='flex justify-end gap-8 items-center '>
        <FlyoutLink href='/' flyoutItems={[]}>
          Home
        </FlyoutLink>
        {navLinks.map(({ name, flyout }) => (
          <FlyoutLink key={name} href='#' flyoutItems={flyout}>
            {name}
          </FlyoutLink>
        ))}

        <li>
          <Link href='/'>
            <Button className='text-md bg-gold hover:bg-amber-700 text-cream px-4 py-2 rounded'>Book Now</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
