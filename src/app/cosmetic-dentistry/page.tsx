import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { CosmeticDentistryOutlineCards } from '@/components/OutlineCards/CosmeticDentistryOutlineCards';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Supernova Dental in Bridgwater, Taunton & Beyond',
  description:
    'Enhance your smile with expert cosmetic dentistry at Supernova Dental. We provide Invisalign, dental implants, teeth whitening, and more welcoming patients from across Somerset, including Bridgwater and Taunton.',
  keywords:
    'cosmetic dentist Bridgwater, cosmetic dentist Taunton, Invisalign Bridgwater, dental implants Taunton, smile makeover Somerset, teeth whitening Somerset, veneers Bridgwater, Supernova Dental cosmetic treatments, Somerset dental clinic, private dentist Bridgwater',
};

export default function CosmeticDentistryPage() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Explore Cosmetic Dentistry'
          description='We offer expert cosmetic dental treatments including Invisalign and dental implants to patients from Bridgwater, Taunton, and beyond.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <h2 className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4'>
            Cosmetic Dentistry Services
          </h2>

          <CosmeticDentistryOutlineCards />
        </div>
      </div>
    </div>
  );
}
