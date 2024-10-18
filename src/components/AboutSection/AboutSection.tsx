'use client';

import { Button } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='flex flex-col lg:flex-row bg-cream items-center justify-center lg:py-16'>
      {/* Text Section */}
      <div className='w-full lg:w-1/2 p-8 max-w-prose md:p-12 flex flex-col justify-'>
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-center '>
          About Supernova Dental
        </h2>
        <p className='mt-4  ml-6 px-8 text-left'>
          At Supernova Dental, we are a passionate team dedicated to providing the highest standard of dental care in
          Bridgewater. Opening in November 2024, our state-of-the-art practice blends advanced technology with a
          personal touch to ensure a comfortable and exceptional experience for every patient.
        </p>
        <p className='mt-4 ml-6 px-8 text-left'>
          Our mission is to transform dental care with innovative solutions that address real-world needs, making oral
          health care easier, more efficient, and more accessible. With years of experience and a commitment to
          excellence, we strive to exceed your expectations with every visit, offering a range of services designed to
          keep you smiling brightly.
        </p>
        <Button onClick={scrollToPromotionForm} className='mt-6 w-fit mx-auto'>
          Come see us!
        </Button>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 max-w-[40rem] bg-secondary flex justify-center lg:pl-8'>
        <Image
          src='/assets/images/about-image.jpg'
          alt='About Us'
          width={600}
          height={800}
          className='object-cover rounded-lg p-4'
        />
      </div>
    </section>
  );
}
