'use client';

import { FiArrowRight } from 'react-icons/fi';

export default function ServicesSelection() {
  const Card = ({ bgUrl, title, href }: { bgUrl: string; title: string; href: string }) => {
    return (
      <a
        href={href}
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: 'center',
        }}
        className='bg-cover bg-no-repeat outline-card flex aspect-[4/4] w-full sm:w-96 md:w-[500px] flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 shadow-xl shadow-neutral-900/30 transition-transform hover:scale-[1.02]'
      >
        <div className='pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
          <h3>{title}</h3>
          <FiArrowRight />
        </div>
      </a>
    );
  };

  return (
    <section className='w-full py-16'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gold mb-4'>Explore Our Services</h2>
        <p className='mb-10 text-lg text-gray-700 max-w-2xl mx-auto'>
          Find the perfect service for your needs, whether you’re looking for everyday dental care or a stunning
          cosmetic transformation.
        </p>
        <div className='flex flex-col items-center justify-center gap-8 lg:flex-row'>
          {/* Update these href values when the actual pages are ready */}
          <Card title='Cosmetic Dentistry' href='/cosmetic-dentistry' bgUrl='/assets/images/sara_cosmetic.JPG' />
          <Card title='General Dentistry' href='/general-dentistry' bgUrl='/assets/images/therapy_3.jpg' />
        </div>
      </div>
    </section>
  );
}
