import { TiltCard } from '@/components/blocks/HoverTiltCard/TiltCard';
import PageHero from '@/components/blocks/PageHero/PageHero';
import { serviceData } from '@/components/Services/utils/serviceData';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
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
      <PageHero
        bgImage='bg-meet-dr-young'
        title='Cosmetic Dentistry'
        description='Achieve your dream smile and supercharge your confidence.'
      />
      <div className='my-16 p-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-semibold'>Our cosmetic dentistry treatments</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
          {serviceData.slice(0, 4).map((service, index) => (
            <Link href={`/${slugify(service.title)}`} key={index}>
              <TiltCard icon={service.icon} title={service.title} text={service.text} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
