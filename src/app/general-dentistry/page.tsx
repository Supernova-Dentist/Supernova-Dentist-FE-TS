import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { GeneralDentistryOutlineCards } from '@/components/OutlineCards/GeneralDentistryOutlineCards';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Dentistry | Supernova Dental in Bridgwater, Somerset',
  description:
    'Explore our full range of general dentistry services at Supernova Dental, including emergency care, hygiene appointments, and routine checkups. Your local Bridgwater dental practice for professional, patient-focused dental care.',
  keywords:
    'general dentistry Bridgwater, general dentistry Taunton, emergency dentist, dental hygiene Somerset, dentist checkup Bridgwater, oral health Bridgwater, Supernova Dental, routine dental care, family dentistry Somerset',
};

export default function GeneralDentistryPage() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Explore General Dentistry'
          description='Browse our essential dental services designed to support lifelong oral health for you and your family.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <h2 className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4'>
            General Dentistry Services
          </h2>

          {/* Replace with card grid linking to each general dentistry service */}
          <GeneralDentistryOutlineCards />
        </div>
      </div>
    </div>
  );
}
