import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function Journey() {
  const data = [
    {
      title: 'A - Align',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Potentially less than than 6 months to straighten teeth to correct alignment
          </p>
          <Image
            src='/public/assets/images/retainers.jpg'
            alt='startup template'
            width={100}
            height={800}
            className='mx-auto rounded-lg object-cover h-96 md:h-60 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'B - Brighten',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            We use exclusive whitening products that can only be given by a dentist that really bring out the natural
            white smile to give you the Supernova shine.
          </p>

          <Image
            src='/public/assets/images/retainers.jpg'
            alt='startup template'
            width={100}
            height={800}
            className='mx-auto rounded-lg object-cover h-96 md:h-60 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'C - Contour',
      content: (
        <div className='px-12 py-8'>
          <p className='mb-8 text-md md:text-lg lg:text-xl md:text-left  text-center text-gray-800'>
            Not always required and treatment is dependant on a case by case basis. With use of composite bonding or
            veneers we can really elevate cases when we have the teeth in the right position and colour.
          </p>
          <Image
            src='/public/assets/images/retainers.jpg'
            alt='startup template'
            width={100}
            height={800}
            className='mx-auto rounded-lg object-cover h-96 md:h-60 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
  ];
  return (
    <div className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
