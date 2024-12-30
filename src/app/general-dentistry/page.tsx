import { TiltCard } from '@/components/blocks/HoverTiltCard/TiltCard';
import PageHero from '@/components/blocks/PageHero/PageHero';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { serviceData } from '@/components/Services/utils/serviceData';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';

export const metadata: Metadata = {
  title: 'Supernova Dental | General Dentistry Services',
  description:
    'Explore general dentistry services at Supernova Dental. From check-ups to fillings, we provide a full range of care to keep your smile healthy.',
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
};

export default function GeneralDentistryServices() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <HighlightCard
        title='General Dentistry Services'
        description='At Supernova Dental, we offer comprehensive general dentistry services to maintain your oral health.'
        logoSrc='/assets/images/logo.png'
        className='mt-16'
      />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <div className='my-8 pb-16'>
        <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
          {serviceData.slice(4).map((service, index) => (
            <Link href={`/general-dentistry/${slugify(service.title)}`} key={index}>
              <TiltCard icon={service.icon} title={service.title} text={service.text} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
