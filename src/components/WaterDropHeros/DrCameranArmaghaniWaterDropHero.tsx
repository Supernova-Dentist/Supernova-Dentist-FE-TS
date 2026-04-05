'use client';

import Search from '@/app/enquiry/utils/Search';
import { DentallyPortal } from '@/lib/constants';
import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import cameranImage from '../../../public/assets/images/Headshots/dr-cameran-armaghani-implantologist-supernova-dental-bridgwater.webp';

const DrCameranArmaghaniWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32 min-h-[100vh] flex items-center'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='relative z-10 md:flex-1 '>
          <Suspense>
            <Search />
          </Suspense>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Cameran<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m an <span className='font-semibold text-lightGold'>Implantologist</span> at Supernova Dental
              </h2>
              <h3 className='text-lightGold'>Dr Stom, PGDip (Restorative), PGDip (Implant)</h3>
              <h3 className='text-lightGold'>GDC Registration Number: 246327</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Cameran graduated Dentistry with first class honours in 2013. Since then he has heavily invested in his
                postgraduate training.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                He completed his postgraduate diploma in Restorative Dentistry at Peninsular University. Involving all
                restoration aspects such as crowns, veneers, bridges, implants, dentures, gum disease management and
                full mouth rehabilitation.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                He has an Implant diploma and certificates in more complex implant surgery including surgical skills,
                hard tissue grafting, soft tissue management, sinus lifts and full mouth rehabilitation.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Cameran enjoys all aspects of dental surgery and loves to keep patients smiling using the latest
                evidence based techniques.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Cameran is from Devon and enjoys fishing, walking with his dog and spending time with his family.
              </p>
            </>
          </Reveal>
          <Reveal>
            <div className='flex gap-4 mt-4 mx-auto justify-center w-full'>
              <Link target='_blank' href={`${DentallyPortal}`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Book with me
                </button>
              </Link>
              <Link href={`/enquiry`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Get in touch
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
        <div className='pointer-events-none relative z-10 mt-8 md:mt-0 md:ml-12 md:flex-1'>
          <Reveal>
            <Image
              src={cameranImage}
              alt='Dr Cameran Armaghani, Implantologist at Supernova Dental in Bridgwater, Somerset'
              width={1800}
              height={2700}
              quality={75}
              placeholder='blur'
              className='object-cover w-full h-full rounded-lg'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DrCameranArmaghaniWaterDropHero;
