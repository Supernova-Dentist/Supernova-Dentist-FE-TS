'use client';

import { DentallyPortal, navLinks } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  return (
    <nav className='bg-grey p-6'>
      <ul className='flex gap-8 items-center justify-between'>
        <div>
          <FlyoutLink href='/' flyoutItems={[]}>
            Supernova Dental <img src='/favicon.ico' alt='Supernova Dental Logo' className='ml-2 h-10 w-auto inline ' />
          </FlyoutLink>
        </div>

        <div className='flex-1 flex gap-8 items-center justify-center'>
          {navLinks.map(({ name, flyout, url }) => (
            <FlyoutLink key={name} href={url} flyoutItems={flyout}>
              {name}
            </FlyoutLink>
          ))}
        </div>
        <li>
          <Link target='_blank' href={`${DentallyPortal}`}>
            <Button className='text-md bg-gold hover:bg-amber-700 text-cream px-4 py-2 rounded'>Sign Up!</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
