import Link from 'next/link';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';
import { DentallyPortal } from '@/lib/constants';

export default function ServiceActions() {
  return (
    <div className='lg:mt-6 mt-10 flex flex-col gap-4 sm:flex-row md:justify-start sm:justify-center'>
      <Link
        target='_blank'
        href={`${DentallyPortal}`}
        className='inline-flex h-10 items-center justify-center rounded-md bg-gold px-6 text-sm font-medium text-white shadow transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
        prefetch={false}
      >
        Book Now
      </Link>
      <LearnMoreButton />
    </div>
  );
}
