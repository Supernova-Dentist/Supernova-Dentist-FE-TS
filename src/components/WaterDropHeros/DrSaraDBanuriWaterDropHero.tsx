'use client';

import Search from '@/app/enquiry/utils/Search';
import { DentallyPortal } from '@/lib/constants';
import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const DrSaraDBanuriWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32 min-h-[100vh] flex items-center'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='relative z-10 md:flex-1 '>
      <Suspense>
        <Search />
      </Suspense>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Sara<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m an <span className='font-semibold text-lightGold'>Implantologist/Oral Surgeon</span> at
                Supernova Dental
              </h2>
              <h3 className='text-lightGold'>DDS, PGDip (Ortho), MSc Implantology</h3>
              <h3 className='text-lightGold'>GDC Registration Number: 182411</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I’m Dr. Sara D Banuri, DDS, Implantologist at Supernova Dental, and a Copenhagen University graduate
                with distinctions and several academic accolades.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Known for my gentle, friendly, and calming manner, I have a passion for dental excellence, with special
                interests in implant dentistry and cosmetic treatments like composite bonding, Invisalign, orthodontics,
                veneers, teeth whitening, and smile reconstruction.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I’ve pursued advanced training in complex restoration, dental implants, and orthodontics, including
                master programs in Implant Dentistry at University Rey Juan Carlos in Madrid and a Diploma in
                Orthodontics with ACE.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I continually update my expertise to bring the latest evidence-based techniques to my patients.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                As a full-time member of the British Association of Cosmetic Dentistry and Faculty Member of Spear
                Education, I’m committed to creating healthy, confident smiles
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
              src='/assets/images/Headshots/sara.jpg'
              alt='Dr. Sara D Banuri headshot'
              width={600}
              height={800}
              layout={'responsive'}
              quality={100}
              className='object-contain h-auto w-auto max-w-[36rem] rounded-lg p-4'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DrSaraDBanuriWaterDropHero;
