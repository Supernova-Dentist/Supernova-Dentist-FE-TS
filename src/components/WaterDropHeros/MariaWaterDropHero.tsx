import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import mariaImage from '../../../public/assets/images/Headshots/maria-mihaela-morar-dental-nurse-supernova-dental-bridgwater.webp';

const MariaWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Maria<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-lightGold'>Dental Nurse</span> at Supernova Dental
              </h2>
              <h3 className='text-lightGold'>GDC Registration Number: 321417</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Hi my name is Maria, and I’m one of the dental nurses here at Supernova Dental.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I have a background in dentistry with three years of experience as a dental technician. After exploring
                a few different paths over the years, I returned to the dental field as a nurse.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Now, with two years of nursing experience, I truly enjoy helping patients feel comfortable and less
                anxious in the dental chair. It&apos;s incredibly rewarding to see them smile at the end of their
                appointment and to hear their positive feedback.
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
              src={mariaImage}
              alt='Maria-Mihaela Morar, Dental Nurse at Supernova Dental in Bridgwater, Somerset'
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

export default MariaWaterDropHero;
