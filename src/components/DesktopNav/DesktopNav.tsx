'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DentallyPortal, navLinks } from '@/lib/constants';
import Button from '../Button/Button';
import FlyoutLink from './FlyoutLink/FlyoutLink';
import Logo from '../../../public/assets/images/logo.png';

export default function DesktopNav() {
  return (
    <nav className='bg-grey p-6 flex justify-between items-center'>
      <Image src={Logo} alt='Logo' className='w-12 h-12' />
      <ul className='flex justify-end md:gap-4 lg:gap-8 items-center'>
        <FlyoutLink href='/' flyoutItems={[]}>
          Home
        </FlyoutLink>
        {navLinks.map(({ name, subLinks, url }: { name: string; subLinks: any[]; url: string }) => (
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
