'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PromotionFooter() {
  return (
    <div className='w-full p-6 sm:px-10 mt-2 py-2 bg-grey text-cream text-sm'>
      {/* Privacy and Complaints Links */}
      <div className='flex justify-center gap-2 mb-4'>
        <Link href='/privacy-policy' className='underline text-gold cursor-pointer'>
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href='/complaints' className='underline text-gold cursor-pointer'>
          Complaints Procedure
        </Link>
      </div>

      {/* Invisalign Badge and Footer Info */}
      <div className='flex flex-col items-center gap-4 mb-6'>
        <Link href='/cosmetic-dentistry/invisalign' className='flex flex-col items-center text-center'>
          <Image
            src='/assets/images/Invisalign-Provider-Logo.png'
            alt='Supernova Dental is a Certified Invisalign Provider in Bridgwater, Somerset'
            width={180}
            height={60}
            className='h-auto w-auto'
          />
          <p className='mt-2 text-sm text-cream max-w-xs'>
            We’re a <span className='text-gold font-semibold'>Certified Invisalign Provider</span> – Trusted dentist in
            Bridgwater, Somerset.
          </p>
        </Link>
      </div>

      {/* Bottom Row */}
      <div className='flex justify-between flex-col lg:flex-row items-center'>
        <span className='text-center lg:text-left'>This practice is fully private with no NHS services available.</span>
        <div className='flex items-center gap-2 flex-col-reverse sm:flex-row'>
          <span>&copy; 2026 Supernova Dental All Rights Reserved</span>
          <span className='hidden sm:block'>|</span>
          <span>Website last updated: June 2026</span>
        </div>
      </div>
    </div>
  );
}
