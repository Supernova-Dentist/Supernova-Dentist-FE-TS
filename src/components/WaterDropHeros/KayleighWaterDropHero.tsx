import { DentallyPortal } from '@/lib/constants';
import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const KayleighWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Kayleigh<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-lightGold'>Dental Therapist</span>
              </h2>
              <h3 className='text-lightGold'>BSc (Hons)</h3>
              <h3 className='text-lightGold'>GDC Registration Number: 245370</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                With 14 years in the dental field, I am a dedicated dental therapist passionate about preventative and
                restorative care.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I focus on patient education, routine hygiene care, and personalised treatment plans to ensure long-term
                oral health.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                By staying updated on industry advancements, I provide high-quality care for patients of all ages,
                including vulnerable groups.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                My goal is to make a positive impact, ensuring comfort and confidence while empowering patients to
                maintain healthy smiles
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
              src='/assets/images/Headshots/Supernova-02.jpg'
              alt='Kayleigh Dowdle headshot'
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

export default KayleighWaterDropHero;
