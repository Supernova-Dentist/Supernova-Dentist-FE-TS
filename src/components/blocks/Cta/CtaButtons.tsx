import Button from '@/components/Button/Button';
import { DentallyPortal } from '@/lib/constants';
import Link from 'next/link';

export default function CtaButtons() {
  return (
    <div className='flex flex-wrap gap-6 items-center justify-center px-10'>
      <Link target='_blank' href={`${DentallyPortal}`}>
        <Button
          className='hover:opacity-90 transition-opacity duration-150 uppercase text-xl font-semibold bg-gold text-grey px-4 py-2 sm:w-auto w-full'
          text='Book Now'
        />
      </Link>
      <Button
        className='hover:opacity-90 transition-opacity duration-150 uppercase text-xl font-semibold bg-gold text-grey px-4 py-2 sm:w-auto w-full'
        text='Call (01785) 555-555'
      />
    </div>
  );
}
