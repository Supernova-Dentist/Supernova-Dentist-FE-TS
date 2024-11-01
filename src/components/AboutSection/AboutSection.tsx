'use client';

import { Button } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import Image from 'next/image';
import OverallGoogleRating from '../blocks/OverallGoogleRating/OverallGoogleRating';

export default function AboutSection() {
  return (
    <section className='flex flex-col lg:flex-row-reverse bg-cream items-center justify-center lg:py-16'>
      {/* Text Section */}
      <div className='w-full lg:w-1/2 p-4 max-w-prose md:p-12 flex flex-col'>
        <OverallGoogleRating />
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-left text-center mt-8'>
          About Supernova Dental
        </h2>
        <p className='mt-4 text-center xl:text-left'>
          At Supernova Dental, we are a passionate team dedicated to providing the highest standard of dental care in
          Bridgewater. Opening in November 2024, our state-of-the-art practice blends advanced technology with a
          personal touch to ensure a comfortable and exceptional experience for every patient.
        </p>
        <Button onClick={scrollToPromotionForm} className='mt-6 w-fit mx-auto'>
          Come see us!
        </Button>
      </div>

      {/* Image Section */}

      <Image
        src='/assets/images/supernova_scott.png'
        alt='About Us'
        width={600}
        height={800}
        layout={'responsive'}
        // sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22.5vw'
        quality={100}
        className='object-contain h-auto w-auto max-w-[40rem] rounded-lg p-4 px-8'
      />
    </section>
  );
}
