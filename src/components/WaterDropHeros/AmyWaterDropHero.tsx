import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const AmyWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Amy<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-lightGold'>Receptionist</span> at Supernova Dental
              </h2>
            </>
          </Reveal>
          <Reveal>
            <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
              It&apos;s been so lovely getting to know our patients, I really enjoy being part of a team that’s so
              friendly and focused on giving people the best experience.
            </p>
          </Reveal>
          <Reveal>
            <div className='flex gap-4 mt-4 mx-auto justify-center w-full'>
              <Link href={`/enquiry`}>
                <button className='pointer-events-auto mt-4 rounded bg-gold px-6 py-4 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                  Get in touch
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
        <div className='pointer-events-none relative z-10 mt-8 md:mt-0 md:ml-12 md:flex-1'>
          <Reveal>
            <Image
              src='/assets/images/Headshots/amy.jpg'
              alt='Amy Skinner headshot'
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

export default AmyWaterDropHero;
