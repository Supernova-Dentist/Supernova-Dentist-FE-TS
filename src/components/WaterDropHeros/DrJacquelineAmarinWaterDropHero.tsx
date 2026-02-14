import { DentallyPortal } from '@/lib/constants';
import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import jackieImage from '../../../public/assets/images/Headshots/dr-jacqueline-amarin-dentist-supernova-dental-bridgwater.webp';

const DrJacquelineAmarinWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl mb-4'>
              Hi, I&apos;m Jacqueline<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-lightGold'>General and Restorative Dentist</span> at
                Supernova Dental
              </h2>
              <h3 className='text-lightGold'>DDS, NBDE, MClinDent</h3>
              <h3 className='text-lightGold'>GDC Registration Number: 323496</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I’m a General and Restorative Dentist at Supernova Dental.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                My approach starts with the foundation, I make sure your teeth and oral health are strong, stable, and
                protected. That’s where my Master’s in Restorative Dentistry comes in.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Once the health is in place, I focus on what I am most passionate about: aesthetic dentistry. With
                today’s advanced tools and techniques, we can enhance the appearance of your smile in a natural, subtle
                way. I want to help you feel like yourself again.
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
              src={jackieImage}
              alt='Dr Jacqueline Amarin, General and Restorative Dentist at Supernova Dental in Bridgwater, Somerset'
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

export default DrJacquelineAmarinWaterDropHero;
