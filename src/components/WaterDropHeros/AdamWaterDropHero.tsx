import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';

const ScottWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Adam<span className='text-gold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m the <span className='font-semibold text-lightGold'>Operations Director</span>
              </h2>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                As the Operations Director, my focus is on business strategy, maintaining our website, while also
                driving our social media and external marketing efforts.
              </p>

              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I also built the website to ensure a seamless online experience for our patients. I guide them to
                understand and feel confident about their journey with Supernova Dental.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                My goal is to ensure they feel informed, comfortable, and excited about their future smile before they
                even step through the door.
              </p>
            </>
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
              src='/assets/images/Headshots/adam.jpg'
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
