'use client';

import { DentallyPortal, navLinks } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FlyoutLink from './FlyoutLink/FlyoutLink';

export default function DesktopNav() {
  const pathname = usePathname();
  const isTeamRoute = pathname === '/team' || pathname.startsWith('/team/');

  return (
    <nav
      className={`relative border-b border-white/10 bg-grey px-5 transition-[padding] duration-200 ${
        isTeamRoute ? 'py-3' : 'py-5'
      }`}
    >
      <ul className='flex items-center justify-between'>
        <li>
          <FlyoutLink href='/' flyoutItems={[]}>
            Supernova Dental{' '}
            <Image
              width={120}
              height={120}
              priority
              src='/favicon.ico'
              alt='Supernova Dental Logo - Bridgwater Dentist'
              className={`ml-2 inline w-auto ${isTeamRoute ? 'h-8' : 'h-10'}`}
            />
          </FlyoutLink>
        </li>

        <li className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8'>
          {navLinks.map(({ name, flyout, url }) => (
            <FlyoutLink key={name} href={url ?? '#'} flyoutItems={flyout}>
              {name}
            </FlyoutLink>
          ))}
        </li>

        <li className='flex items-center gap-5'>
          <a
            href='tel:+441278228665'
            className='hidden min-h-11 items-center rounded-md text-base text-white transition-colors duration-200 hover:text-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:flex'
          >
            01278 228665
          </a>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={DentallyPortal}
            className={`inline-flex min-h-11 items-center justify-center rounded bg-gold text-sm font-semibold text-grey transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark ${isTeamRoute ? 'px-5 py-3' : 'px-6 py-4'}`}
          >
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
