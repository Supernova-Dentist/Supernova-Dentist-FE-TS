import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { CareerFormContent } from './utils/career-form-content';

export const metadata: Metadata = {
  title: 'Dental Jobs in Bridgwater, Somerset | Join Supernova Dental ',
  description:
    'Explore dental jobs at Supernova Dental in Bridgwater. Register interest to join our team delivering great care to patients across Somerset.',
  keywords:
    'dental jobs Bridgwater, dental nurse jobs Somerset, treatment coordinator jobs Bridgwater, dental careers Somerset, dentist jobs Bridgwater, Supernova Dental hiring, dental practice vacancies, join our dental team, dental jobs near Taunton, careers in dentistry Somerset',
};

export default function CareersPage() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Dental Jobs at Supernova Dental'
          description='We’re always looking for passionate professionals to join our growing team. Explore our current vacancies below.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          {/* Renders outline-style cards for each job opening */}

          {/* Divider */}
          <hr className='my-12 border-gold/40' />

          {/* Register Interest Section */}
          <h3 className='text-md md:text-lg lg:text-2xl text-center font-semibold text-gold mb-4'>
            Don’t see your desired role?
          </h3>
          <p className='text-center max-w-2xl mx-auto mb-6 text-gray-700'>
            We&apos;re always open to hearing from talented individuals. If you don’t see a suitable position listed,
            feel free to register your interest using the form below.
          </p>

          {/* Placeholder for career form */}
          <div className='bg-white rounded-xl p-2 shadow-md max-w-3xl mx-auto'>
            <CareerFormContent />
          </div>
        </div>
      </div>
    </div>
  );
}
