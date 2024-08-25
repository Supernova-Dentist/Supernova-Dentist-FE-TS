import type { Metadata } from 'next';
import React from 'react';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
import DentalImplantsContent from '@/components/blocks/DentalImplantsContent/DentalImplantsContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function DentalImplants() {
  return (

    <div className='flex flex-col min-h-[100vh]'>
      <DentalImplantsContent />

      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'cosmetic-dentistry/dental-implants'} />
      </div>
    </div>
  );
}
