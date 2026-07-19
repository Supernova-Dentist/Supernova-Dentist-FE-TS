'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const CareersOutlineCards = () => {
  return (
    <section className='overflow-hidden max-w-5xl md:max-w-6xl lg:max-w-7xl px-8 py-10'>
      <div className='mx-auto  items-center justify-center gap-8 grid grid-cols-1'>
        <Card
          title='Associate Dentist'
          href='/careers/associate-dentist-bridgwater'
          bgUrl='/assets/images/invisalign_landscape_2.jpg'
        />
      </div>
    </section>
  );
};

const Card = ({ bgUrl, title, href }: { bgUrl: string; title: string; href: string }) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: 'center',
      }}
      className='bg-cover bg-no-repeat outline-card flex aspect-[4/4] max-w-[30rem] mx-auto w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400  shadow-xl shadow-neutral-900/30'
    >
      <div className='pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};
