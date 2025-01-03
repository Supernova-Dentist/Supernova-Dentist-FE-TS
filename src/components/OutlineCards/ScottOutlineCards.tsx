'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const ScottOutlineCards = () => {
  return (
    <section className='overflow-hidden md:max-w-5xl px-8 pb-12 pt-16'>
      <div className='mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row'>
        <Card
          title='Invisalign'
          href='/cosmetic-dentistry/invisalign'
          bgUrl='/assets/images/ScottServices/invisalign.jpeg'
        />
        <Card
          title='Composite Bonding'
          href='/cosmetic-dentistry/composite-bonding'
          bgUrl='/assets/images/ScottServices/bonding.jpeg'
        />
        <Card
          title='Whitening'
          href='/cosmetic-dentistry/tooth-whitening'
          bgUrl='/assets/images/ScottServices/whitening.jpeg'
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
      className='bg-cover bg-no-repeat outline-card flex aspect-[4/4] w-full sm:w-96 md:w-[500px] flex-col justify-end overflow-hidden rounded-lg bg-neutral-400  shadow-xl shadow-neutral-900/30'
    >
      <div className='pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};
