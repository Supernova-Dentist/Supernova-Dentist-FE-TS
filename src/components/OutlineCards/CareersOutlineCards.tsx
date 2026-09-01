import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import DentistImage from '../../../public/assets/images/invisalign_landscape_2.jpg';

export const CareersOutlineCards = () => (
  <Link
    href='/careers/associate-dentist-bridgwater-somerset'
    className='group grid overflow-hidden rounded-[1.5rem] border border-stone bg-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light md:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1fr)]'
  >
    <div className='relative min-h-64 bg-stone'>
      <Image
        quality={75}
        placeholder='blur'
        src={DentistImage}
        alt=''
        fill
        sizes='(max-width: 768px) 100vw, 40vw'
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
    </div>
    <div className='flex min-h-64 flex-col justify-between p-7 sm:p-10'>
      <div>
        <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Current vacancy</p>
        <h3 className='mt-4 text-4xl leading-tight'>Associate Dentist</h3>
        <p className='mt-4 max-w-xl leading-7 text-taupe'>
          Read the current role information and register your interest with Supernova Dental in Bridgwater.
        </p>
      </div>
      <span className='mt-8 inline-flex items-center text-sm font-semibold text-obsidian'>
        View vacancy <FiArrowRight aria-hidden='true' className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
      </span>
    </div>
  </Link>
);
