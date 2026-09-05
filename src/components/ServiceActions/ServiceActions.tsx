import Link from 'next/link';
import SignUpButton from '../LearnMoreButton/LearnMoreButton';
import { DentallyPortal } from '@/lib/constants';

export default function ServiceActions({ shouldCentre = false }) {
  return (
    <div
      className={`lg:mt-6 mt-10 flex flex-col gap-4 sm:flex-row ${
        shouldCentre ? 'justify-center' : 'md:justify-start sm:justify-center'
      }`}
    >
      <Link
        target='_blank'
        href={`${DentallyPortal}`}
        className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 text-sm font-semibold text-obsidian shadow transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        prefetch={false}
      >
        Book Now
      </Link>
      <SignUpButton />
    </div>
  );
}
