import ServiceCategoryPage, { type ServiceCategoryGroup } from '@/components/ServiceExperience/ServiceCategoryPage';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Bridgwater, Somerset | Supernova Dental',
  description:
    'Enhance your smile with cosmetic dentistry in Bridgwater. At Supernova Dental we offer Invisalign, dental implants, bonding, veneers and teeth whitening. ',
  alternates: {
    canonical: '/cosmetic-dentistry',
  },
  openGraph: {
    title: 'Cosmetic Dentistry in Bridgwater | Supernova Dental',
    description:
      'Explore cosmetic dental treatment options at Supernova Dental in Bridgwater, including Invisalign, dental implants, bonding and teeth whitening.',
    url: '/cosmetic-dentistry',
    siteName: 'Supernova Dental',
    type: 'website',
  },
  keywords:
    'cosmetic dentist Bridgwater, cosmetic dentist Somerset, cosmetic dentist Taunton, Invisalign Bridgwater, dental implants Somerset, composite bonding Bridgwater, veneers Bridgwater, teeth whitening Somerset, smile makeover Somerset, Supernova Dental cosmetic treatments, private dentist Bridgwater, cosmetic dentist Highbridge, cosmetic dentist Burnham-on-Sea',
};

const groups: ServiceCategoryGroup[] = [
  {
    title: 'Our cosmetic dental treatments',
    description: 'Personalised options for alignment, tooth replacement, shape and brightness.',
    services: [
      {
        name: 'Invisalign',
        href: '/cosmetic-dentistry/invisalign',
        image: '/assets/images/invisalign.jpeg',
        imageAlt: 'Invisalign clear aligners at Supernova Dental in Bridgwater',
        description: 'Discreet clear aligners planned around your smile and day-to-day life.',
      },
      {
        name: 'Dental implants',
        href: '/cosmetic-dentistry/dental-implants',
        image: '/assets/images/cbct_supernova_dental_bridgwater.webp',
        imageAlt: 'Dental implant treatment at Supernova Dental in Bridgwater',
        description: 'Natural-looking options for replacing one or more missing teeth.',
      },
      {
        name: 'Composite bonding',
        href: '/cosmetic-dentistry/composite-bonding',
        image: '/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp',
        imageAlt: 'Composite bonding cosmetic dental treatment in Bridgwater',
        description: 'A minimally invasive way to refine chips, small gaps and tooth shape.',
      },
      {
        name: 'Teeth whitening',
        href: '/cosmetic-dentistry/teeth-whitening',
        image: '/assets/images/teeth_whitening.jpg',
        imageAlt: 'Professional teeth whitening treatment in Bridgwater',
        description: 'Dentist-supervised whitening tailored to your goals.',
      },
    ],
  },
];

export default function CosmeticDentistryPage() {
  return (
    <ServiceCategoryPage
      eyebrow='Cosmetic dentistry in Bridgwater'
      title='Expert care for a smile that feels like you.'
      intro={
        <>
          <p>
            Your smile is often the first thing people notice, and feeling confident about it can make a real difference
            in everyday life.
          </p>
          <p>
            At Supernova Dental in Bridgwater, we offer personalised cosmetic dentistry including{' '}
            <Link
              href='/cosmetic-dentistry/invisalign'
              className='underline decoration-champagne/70 underline-offset-4 hover:text-champagne'
            >
              Invisalign
            </Link>
            ,{' '}
            <Link
              href='/cosmetic-dentistry/dental-implants'
              className='underline decoration-champagne/70 underline-offset-4 hover:text-champagne'
            >
              dental implants
            </Link>{' '}
            and professional{' '}
            <Link
              href='/cosmetic-dentistry/teeth-whitening'
              className='underline decoration-champagne/70 underline-offset-4 hover:text-champagne'
            >
              teeth whitening
            </Link>
            , delivered by our experienced{' '}
            <Link href='/team' className='underline decoration-champagne/70 underline-offset-4 hover:text-champagne'>
              dental team
            </Link>
            .
          </p>
        </>
      }
      groups={groups}
    />
  );
}
