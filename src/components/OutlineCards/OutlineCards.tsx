'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const OutlineCards = () => {
  return (
    <section className='overflow-hidden md:max-w-5xl px-8 pb-12 pt-16'>
      <div className='mx-auto flex  flex-col items-center justify-center gap-8 lg:flex-row'>
        <Card
          title='Invisalign'
          href='/cosmetic-dentistry/invisalign'
          bgUrl='https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Composite Bonding'
          href='/cosmetic-dentistry/composite-bonding'
          bgUrl='https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          title='Whitening'
          href='/cosmetic-dentistry/tooth-whitening'
          bgUrl='https://images.unsplash.com/photo-1521649415036-659258dc424f?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
      className='outline-card flex aspect-[4/4] w-full sm:w-96 md:w-[500px] flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]'
    >
      <div className='pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};
