import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const referralServices = [
  { title: 'Invisalign', href: '/professional-referrals/invisalign-referral', image: '/assets/images/invisalign.jpeg' },
  { title: 'Dental implants', href: '/professional-referrals/dental-implant-referral', image: '/assets/images/implant_referral.jpg' },
  { title: 'Oral surgery', href: '/professional-referrals/oral-surgery-referral', image: '/assets/images/oral_surgery_referral.jpg' },
  { title: 'CBCT / OPG imaging', href: '/professional-referrals/cbct-opg-referral', image: '/assets/images/cbct_supernova_dental_bridgwater.webp' },
];

export const ReferralOutlineCards = () => (
  <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
    {referralServices.map((service) => (
      <Link
        key={service.href}
        href={service.href}
        className='group overflow-hidden rounded-[1.25rem] border border-stone bg-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'
      >
        <div className='relative aspect-[4/3] overflow-hidden bg-stone'>
          <Image
            src={service.image}
            alt=''
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw'
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <div className='flex min-h-24 items-center justify-between gap-4 p-5'>
          <h3 className='text-2xl leading-tight'>{service.title}</h3>
          <FiArrowRight aria-hidden='true' className='size-5 shrink-0 text-bronze-ink transition-transform group-hover:translate-x-1' />
        </div>
      </Link>
    ))}
  </div>
);
