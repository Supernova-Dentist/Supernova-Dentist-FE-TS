'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import cosmeticDentistryImage from '../../../public/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp';
import generalDentistryImage from '../../../public/assets/images/general-dentistry-supernova-dental-bridgwater.webp';

export default function ServicesSelection() {
  const Card = ({ bgUrl, title, href }: { bgUrl: StaticImageData; title: string; href: string }) => {
    return (
      <Link
        href={href}
        className='group relative flex aspect-[4/4] w-full sm:w-96 md:w-[500px] flex-col justify-end overflow-hidden rounded-lg outline-card shadow-xl shadow-neutral-900/30 transition-transform hover:scale-[1.02]'
      >
        {/* Background Image */}
        <Image
          src={bgUrl}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 400px, 500px'
          priority={false}
          placeholder='blur'
        />

        {/* Gradient Overlay */}
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black to-black/0' />

        {/* Content */}
        <div className='relative z-10 flex items-center justify-between p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
          <h3>{title}</h3>
          <FiArrowRight className='transition-transform group-hover:translate-x-1' />
        </div>
      </Link>
    );
  };

  return (
    <section className='w-full py-16'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-gold'>Explore Our Services</h2>
        <p className='mx-auto mb-10 max-w-2xl text-lg text-gray-700'>
          Find the perfect service for your needs, whether you’re looking for everyday dental care or a stunning
          cosmetic transformation.
        </p>
        <div className='flex flex-col items-center justify-center gap-8 lg:flex-row'>
          <Card title='Cosmetic Dentistry' href='/cosmetic-dentistry' bgUrl={cosmeticDentistryImage} />
          <Card title='General Dentistry' href='/general-dentistry' bgUrl={generalDentistryImage} />
        </div>
      </div>
    </section>
  );
}
