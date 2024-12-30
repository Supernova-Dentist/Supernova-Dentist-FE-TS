import { TiltCard } from '@/components/blocks/HoverTiltCard/TiltCard';
import PageHero from '@/components/blocks/PageHero/PageHero';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { serviceData } from '@/components/Services/utils/serviceData';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';

export const metadata: Metadata = {
  title: 'Supernova Dental | Cosmetic Dentistry Services',
  description:
    'Explore the wide range of cosmetic dentistry services at Supernova Dental, including procedures like composite bonding, teeth whitening and Invisalign to enhance your smile and confidence.',
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

export default function CosmeticServices() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <HighlightCard
        title='Cosmetic Dentistry Services'
        description='Achieve a beautiful, healthy smile with our cosmetic dentistry services, including treatments like composite bonding, teeth whitening and more.'
        logoSrc='/assets/images/logo.png'
        className='mt-16'
      />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <div className='my-8 pb-16'>
        <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
          {serviceData.slice(0, 4).map((service, index) => (
            <Link href={`/cosmetic-dentistry/${slugify(service.title)}`} key={index}>
              <TiltCard icon={service.icon} title={service.title} text={service.text} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
