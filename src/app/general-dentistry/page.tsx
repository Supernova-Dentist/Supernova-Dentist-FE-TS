import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { GeneralDentistryOutlineCards } from '@/components/OutlineCards/GeneralDentistryOutlineCards';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Dentistry in Bridgwater, Somerset | Supernova Dental',
  description:
    'Looking for a dentist in Bridgwater? Supernova Dental provides general dentistry, including checkups, hygiene visits and emergency appointments.',
  keywords:
    'general dentistry Bridgwater, general dentistry Somerset, general dentistry Taunton, emergency dentist Bridgwater, emergency dentist Somerset, dental hygiene Bridgwater, dental hygiene Somerset, dentist checkup Bridgwater, oral health Bridgwater, routine dental care Somerset, family dentistry Bridgwater, family dentistry Somerset, Supernova Dental',
};

export default function GeneralDentistryPage() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Explore General Dentistry'
          description='Browse our essential dental services designed to support lifelong oral health for you and your family. Serving patients from Bridgwater, Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.'
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
