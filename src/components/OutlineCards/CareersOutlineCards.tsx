'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import DentistImage from '../../../public/assets/images/invisalign_landscape_2.jpg';

export const CareersOutlineCards = () => {
  return (
    <section className='overflow-hidden max-w-5xl md:max-w-6xl lg:max-w-7xl px-8 py-10'>
      <div className='mx-auto  items-center justify-center gap-8 grid grid-cols-1'>
        <Card title='Associate Dentist' href='/careers/associate-dentist-bridgwater-somerset' />
      </div>
    </section>
  );
};

const Card = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className='relative flex aspect-[4/4] max-w-[30rem] mx-auto w-full overflow-hidden rounded-lg shadow-xl shadow-neutral-900/30'
    >
      <Image
        quality={75}
        placeholder='blur'
        src={DentistImage}
        alt={title}
        fill
        priority
        className='object-cover'
        sizes='(max-width: 768px) 100vw, 480px'
      />

      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />

      <div className='relative mt-auto flex items-center justify-between p-6 text-xl font-medium text-white md:text-2xl'>
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </Link>
  );
};
