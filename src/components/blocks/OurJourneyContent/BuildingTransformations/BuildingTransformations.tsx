'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Compare } from '../../../ui/compare';

export default function BuildingTransformations() {
  const transformations = [
    {
      id: 1,
      before: '/assets/images/transformation_before.png',
      after: '/assets/images/transformation_after.png',
      description: 'Teeth Whitening',
    },
    {
      id: 2,
      before: '/assets/images/teeth-before.jpg',
      after: '/assets/images/teeth-after.png',
      description: 'Invisalign Treatment',
    },
    {
      id: 3,
      before: '/assets/images/teeth-before.jpg',
      after: '/assets/images/teeth-after.png',
      description: 'Dental Veneers',
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      id='results'
      className='w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white'
      ref={ref} // Attach the ref to the section
    >
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center gap-8 items-center px-4'>
          {transformations.map((item) => (
            <div key={item.id} className='flex justify-center p-4 border rounded-3xl bg-neutral-100 border-neutral-200'>
              <Compare
                firstImage={item.before}
                secondImage={item.after}
                firstImageClassName='object-cover w-full h-full'
                secondImageClassname='object-cover w-full h-full'
                className='aspect-w-1 aspect-h-1 h-64 w-64 md:h-96 md:w-96 lg:h-[600px] lg:w-[800px]'
                slideMode='hover'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
