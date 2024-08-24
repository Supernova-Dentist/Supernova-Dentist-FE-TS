import Button from '@/components/Button/Button';
import { DentallyPortal } from '@/lib/constants';
import Link from 'next/link';

export default function CtaButtons() {
  return (
    <div className='flex flex-wrap gap-4 sm:gap-6 items-center justify-center px-4 sm:px-10'>
      <Link target='_blank' href={`${DentallyPortal}`}>
        <Button
          className='hover:opacity-90 transition-opacity duration-150 uppercase text-base sm:text-xl font-semibold bg-gold text-grey px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto'
          text='Book Now'
        />
      </Link>
      <Button
        className='hover:opacity-90 transition-opacity duration-150 uppercase text-base sm:text-xl font-semibold bg-gold text-grey px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto'
        text='Call (01785) 555-555'
      />
    </div>
  );
}
