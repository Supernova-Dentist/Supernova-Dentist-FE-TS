'use client';

import Link from 'next/link';

export default function PromotionFooter() {
  return (
    <div className='w-full p-6 sm:px-10 mt-2 py-2 bg-grey text-cream text-sm'>
      <div className='flex justify-center gap-2 mb-4'>
          <Link href='/privacy-policy' className='underline text-gold cursor-pointer'>
            Privacy Policy
          </Link>
          <span> | </span>
          <Link href='/complaints' className='underline text-gold cursor-pointer'>
            Complaints Procedure
          </Link>
        </div>
      <div className='flex justify-between flex-col lg:flex-row items-center '>
        <span className='text-center lg:text-left'>This practice is fully private with no NHS services available.</span>
        
        <div className='flex items-center gap-2 flex-col-reverse sm:flex-row'>
          <span>&copy; 2025 Supernova Dental All Rights Reserved</span>
          <span className='hidden sm:block'>|</span>
          <span>Website last updated: May 2025</span>
        </div>
      </div>
    </div>
  );
}
