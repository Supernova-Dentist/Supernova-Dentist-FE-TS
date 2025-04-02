import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';

const ScottWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Scott<span className='text-gold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m the <span className='font-semibold text-lightGold'> Principal Dentist/Owner</span>
              </h2>
              <h3 className='text-lightGold'>
                BDS (Hons) PGCert Restorative and Aesthetic Dentistry (FGFP) PGDip Orthodontics (SDC) CGD
              </h3>
              <h3 className='text-lightGold'>GDC Registration Number: 284371</h3>
            </>
          </Reveal>
          <Reveal>
            <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
              My passion for high quality dentistry has led me to learn from some of the top specialists in the UK and
              worldwide, going on multiple postgraduate courses to hone my skills and ultimately founding Supernova
              Dental. I take immense pride in knowing that our patients feel truly looked after and cared for. The huge
              confidence boosts people gain after just a few appointments are a joy to behold whether that is nervous
              patients feeling fully at ease or the smile transformations from cosmetic procedures.
            </p>
          </Reveal>
          <Reveal>
            <div className='flex gap-4 mt-4 mx-auto justify-center w-full'>
              <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                Book with me
              </button>
              <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                Get in touch
              </button>
            </div>
          </Reveal>
        </div>
        <div className='pointer-events-none relative z-10 mt-8 md:mt-0 md:ml-12 md:flex-1'>
          <Reveal>
            <Image
              src='/assets/images/Headshots/Supernova-03.jpg'
              alt='Dr. Scott Young headshot'
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

export default ScottWaterDropHero;
