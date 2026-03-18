'use client';

import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import emergImage from '../../../public/assets/images/emerg_intro.jpg';
import financeImage from '../../../public/assets/images/fca-logo-social-media.jpg';
import fillingImage from '../../../public/assets/images/filling_intro.jpg';
import newPtImage from '../../../public/assets/images/new-patient-examination-2.webp';
import hygieneImage from '../../../public/assets/images/plaque_removal.jpeg';
import therapyImage from '../../../public/assets/images/therapy_intro.webp';
import TreatmentImage from '../../../public/assets/images/root-canal-treatment.webp';
import guardImage from '../../../public/assets/images/xs_guard.jpeg';

export const GeneralDentistryOutlineCards = () => {
  return (
    <section className='overflow-hidden max-w-5xl md:max-w-6xl lg:max-w-7xl px-8 py-10'>
      <div className='mx-auto items-center justify-center gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        <Card title='New Patient Examination' href='/general-dentistry/new-patient-examination' bgUrl={newPtImage} />
        <Card title='Emergency Dentistry' href='/general-dentistry/emergency-dentistry' bgUrl={emergImage} />
        <Card
          title='White Composite Fillings'
          href='/general-dentistry/white-composite-fillings'
          bgUrl={fillingImage}
        />
        <Card title='Root Canal Treatment' href='/general-dentistry/root-canal-treatment' bgUrl={TreatmentImage} />
        <Card title='Dental Therapist' href='/general-dentistry/dental-therapist' bgUrl={therapyImage} />
        <Card title='Dental Hygiene' href='/general-dentistry/dental-hygiene' bgUrl={hygieneImage} />
        <Card title='Sports Mouthguards' href='/general-dentistry/sports-mouthguards' bgUrl={guardImage} />
        <Card title='Dental Finance' href='/general-dentistry/dental-finance' bgUrl={financeImage} />
      </div>
    </section>
  );
};

const Card = ({ bgUrl, title, href }: { bgUrl: any; title: string; href: string }) => {
  return (
    <a
      href={href}
      className='relative flex aspect-[4/4] w-full flex-col justify-end overflow-hidden rounded-lg shadow-xl shadow-neutral-900/30'
    >
      {/* Background Image */}
      <Image
        placeholder='blur'
        src={bgUrl}
        alt={title}
        fill
        quality={75}
        className='object-cover'
        sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw'
      />

      {/* Overlay Content */}
      <div className='relative z-10 flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};
