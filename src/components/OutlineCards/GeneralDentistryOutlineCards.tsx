'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const GeneralDentistryOutlineCards = () => {
  return (
    <section className='overflow-hidden max-w-5xl md:max-w-6xl lg:max-w-7xl px-8 py-10'>
      <div className='mx-auto  items-center justify-center gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        <Card
          title='Emergency Dentistry'
          href='/general-dentistry/emergency-dentistry'
          bgUrl='/assets/images/emerg_intro.jpg'
        />
        <Card
          title='Dental Therapist'
          href='/general-dentistry/dental-therapist'
          bgUrl='/assets/images/therapy_intro.jpg'
        />
        <Card
          title='Dental Hygiene'
          href='/general-dentistry/dental-hygiene'
          bgUrl='/assets/images/plaque_removal.jpeg'
        />

        <Card
          title='Sports Mouthguards'
          href='/general-dentistry/sports-mouthguards'
          bgUrl='/assets/images/website_intro_guard.png'
        />
        <Card
          title='Dental Finance'
          href='/general-dentistry/dental-finance'
          bgUrl='/assets/images/fca-logo-social-media.jpg'
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
      className='bg-cover bg-no-repeat outline-card flex aspect-[4/4] w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400  shadow-xl shadow-neutral-900/30'
    >
      <div className='pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};
