import { CosmeticDentistryJourney } from '@/components/blocks/CosmeticDentistryJourney/CosmeticDentistryJourney';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { CosmeticDentistryOutlineCards } from '@/components/OutlineCards/CosmeticDentistryOutlineCards';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Supernova Dental in Bridgwater, Somerset & Surrounding Areas',
  description:
    'Enhance your smile with expert cosmetic dentistry at Supernova Dental. We provide Invisalign, dental implants, composite bonding, veneers, teeth whitening, and more. Welcoming patients from Bridgwater, Taunton, Highbridge, Burnham-on-Sea, and across Somerset.',
  keywords:
    'cosmetic dentist Bridgwater, cosmetic dentist Somerset, cosmetic dentist Taunton, Invisalign Bridgwater, dental implants Somerset, composite bonding Bridgwater, veneers Bridgwater, teeth whitening Somerset, smile makeover Somerset, Supernova Dental cosmetic treatments, private dentist Bridgwater, cosmetic dentist Highbridge, cosmetic dentist Burnham-on-Sea',
};

export default function CosmeticDentistryPage() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        <div className='px-4 md:px-6 lg:px-8 my-2 md:py-4'>
          <BreadCrumb />
        </div>
        <HighlightCard
          title='Cosmetic Dentistry in Bridgwater for Expert Smile Makeovers'
          description={
            <>
              <p>
                Your smile is often the first thing people notice, and feeling confident about it can make a real
                difference in everyday life.{' '}
              </p>

              <p>
                At Supernova Dental in Bridgwater, we offer a range of cosmetic dentistry treatments designed to enhance
                and transform your smile. From discreet teeth straightening with{' '}
                <Link href='/cosmetic-dentistry/invisalign' className='underline text-gold hover:text-lightGold'>
                  Invisalign
                </Link>{' '}
                to restoring missing teeth with natural-looking{' '}
                <Link href='/cosmetic-dentistry/dental-implants' className='underline text-gold hover:text-lightGold'>
                  dental implants
                </Link>
                , our team creates personalised treatment plans to suit your lifestyle and goals.{' '}
              </p>

              <p>
                {' '}
                We also offer professional{' '}
                <Link href='/cosmetic-dentistry/teeth-whitening' className='underline text-gold hover:text-lightGold'>
                  teeth whitening
                </Link>{' '}
                and other cosmetic treatments delivered by our experienced{' '}
                <Link href='/team' className='underline text-gold hover:text-lightGold'>
                  dental team
                </Link>{' '}
                to help you achieve a brighter, more confident smile.
              </p>
            </>
          }
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <h2 className='text-xl md:text-2xl lg:text-3xl leading-tight text-center tracking-tight font-bold text-gold mt-4'>
            Our cosmetic dental treatments
          </h2>
          <CosmeticDentistryJourney />
        </div>
      </div>
    </div>
  );
}
