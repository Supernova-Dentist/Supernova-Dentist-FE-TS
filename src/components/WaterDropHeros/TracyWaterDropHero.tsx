import { DentallyPortal } from '@/lib/constants';
import { Reveal } from '@/utils/anim/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import tracyImage from '../../../public/assets/images/Headshots/tracy-hawkins-dental-hygienist-supernova-dental-bridgwater.webp';

const TracyWaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1 '>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Tracy<span className='text-lightGold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-lightGold'>Dental Hygienist </span> at Supernova Dental
              </h2>
              <h3 className='text-lightGold'>Dip DH RCS (Eng)</h3>
              <h3 className='text-lightGold'>GDC Registration Number: 6246</h3>
            </>
          </Reveal>
          <Reveal>
            <>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                With over 20 years of experience as a dental hygienist, I am dedicated to delivering high-quality, patient-focused care in a calm and supportive environment. Known for being kind, caring, and friendly, I take pride in helping patients feel at ease throughout their treatment.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                Driven by compassion, I ensure every experience is patient-led, tailoring care to individual needs while achieving effective and lasting results. I believe that creating a relaxed atmosphere is key to both comfort and clinical success.
              </p>
              <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
                I am so passionate about promoting the importance of oral health and empowering patients to maintain confident, healthy smiles. I looking forward to meeting with you.
              </p>
            </>
          </Reveal>
          <Reveal>
            <div className='flex gap-4 mt-4 mx-auto justify-center w-full'>
              <Link
                target='_blank'
                href={`https://supernova.portal.dental/book/`}
              >
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
              src={tracyImage}
              alt='Tracy, Dental Hygienist at Supernova Dental in Bridgwater, Somerset'
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

export default TracyWaterDropHero;
