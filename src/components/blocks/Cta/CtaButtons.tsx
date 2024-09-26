import Button from '@/components/Button/Button';
import { DentallyPortal } from '@/lib/constants';
import Link from 'next/link';

export default function CtaButtons() {
  return (
    <div className='flex flex-wrap gap-4 sm:gap-6 items-center justify-center px-4 sm:px-10'>
      <Link className='w-full sm:w-auto' target='_blank' href={`${DentallyPortal}`}>
        <Button className='uppercase sm:text-xl font-semibold sm:px-6 sm:py-3 w-full sm:w-auto' text='Book Now' />
      </Link>
      <Button
        className='uppercase sm:text-xl font-semibold sm:px-6 sm:py-3 w-full sm:w-auto'
        text='Call US'
      />
    </div>
  );
}
