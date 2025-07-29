import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const ToriWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Tori<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m the <span className='font-semibold text-lightGold'>Lead Dental Nurse</span> at Supernova Dental
              </h2>
              <h3 className='text-lightGold'>GDC Registration Number: 308678</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I’m Tori, the Lead Dental Nurse here at Supernova Dental. I’ve been nursing for over five years and
                qualified in 2023. I love seeing their confidence grow when they see their results. I’m also currently
                training to become an Oral Health Practitioner, allowing me to expand my skills and provide even more
                comprehensive care.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I’m passionate about providing excellent care and supporting patients throughout their dental journey.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                My goal is to ensure they feel informed, comfortable, and excited about their future smile before they
                even step through the door.
              </p>
            </>
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
              src='/assets/images/Headshots/tori.jpg'
              alt='Tori headshot'
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

export default ToriWaterDropHero;
