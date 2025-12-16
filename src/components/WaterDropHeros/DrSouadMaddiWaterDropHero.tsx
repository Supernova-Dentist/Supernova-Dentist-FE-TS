import { DentallyPortal } from '@/lib/constants';
import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const DrSouadMaddiWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1'>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl mb-4'>
              Hi, I&apos;m Souad<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-lightGold'>General and Restorative Dentist here</span> at
                Supernova Dental Practice in Bridgwater, with a strong focus on{' '}
                <span className='font-semibold text-lightGold'>cosmetic dentistry</span>
              </h2>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I provide natural-looking smile enhancements that improve both function and aesthetics, helping patients
                feel confident in their smiles.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I offer a range of cosmetic and restorative dental treatments, including smile design and minimally
                invasive cosmetic dentistry, using modern techniques and personalised treatment planning to achieve
                long-lasting results.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                If you&apos;re looking for a cosmetic dentist in Bridgwater, you&apos;re very welcome to come see me at
                Supernova Dental Practice, where I aim to make every patient feel comfortable, understood, and
                supported.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I also speak English, Arabic, French, and Spanish, and I&apos;m happy to provide dental care in the
                language you feel most comfortable with.
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
              <Link href='/enquiry'>
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
              src='/assets/images/Headshots/dr-souad-maddi.jpeg'
              alt='Dr Souad Maddi headshot'
              width={600}
              height={800}
              layout='responsive'
              quality={100}
              className='object-contain h-auto w-auto max-w-[36rem] rounded-lg p-4'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DrSouadMaddiWaterDropHero;
