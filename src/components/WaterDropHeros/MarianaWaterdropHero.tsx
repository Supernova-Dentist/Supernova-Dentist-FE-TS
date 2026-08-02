import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import marianaImage from '../../../public/assets/images/Headshots/mariana-barbu-lead-dental-nurse-supernova-dental-bridgwater.webp';

const MarianaWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Mariana<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m the <span className='font-semibold text-lightGold'>Lead Dental Nurse</span> at Supernova Dental
              </h2>
              <h3 className='text-lightGold'>GDC Registration Number: 315176</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I&apos;m Mariana, the Lead Dental Nurse here at Supernova Dental. I&apos;ve been working in dentistry
                since 2022 and qualified as a Dental Nurse in 2024.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                This year, I achieved my NEBDN Dental Radiography qualification and completed additional CBCT training,
                allowing me to support our clinicians with complex dental imaging and provide the highest standard of
                patient care.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I&apos;m passionate about creating a welcoming, safe and comfortable environment for every patient.
                Whether you&apos;re visiting us for a routine check-up or more complex treatment, I love helping people
                feel at ease and supporting them throughout their smile journey.
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
              src={marianaImage}
              alt='Mariana Barbu, Lead Dental Nurse at Supernova Dental in Bridgwater, Somerset'
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

export default MarianaWaterDropHero;
