import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { CareersOutlineCards } from '@/components/OutlineCards/CareersOutlineCards';
import { type Metadata } from 'next';
import { CareerFormContent } from './utils/career-form-content';

export const metadata: Metadata = {
  title: 'Careers at Supernova Dental | Join Our Team in Bridgwater, Somerset',
  description:
    'Discover exciting career opportunities at Supernova Dental. Join our expert team in Bridgwater and help deliver outstanding dental care across Somerset.',
  keywords:
    'dental careers Bridgwater, jobs at Supernova Dental, dental nurse jobs Somerset, dentist jobs Bridgwater, careers in dentistry Somerset, Supernova Dental hiring, join our dental team, dental practice vacancies, dental jobs Somerset, Supernova Dental careers',
};

export default function CareersPage() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Careers at Supernova Dental'
          description='We’re always looking for passionate professionals to join our growing team. Explore our current vacancies below.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <h2 className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4'>
            Current Opportunities:
          </h2>

          {/* Renders outline-style cards for each job opening */}
          <CareersOutlineCards />

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

          {/* Optional: Placeholder for a future form component */}
          <div className='bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto'>
            {/* Replace this with your actual form */}
            <CareerFormContent />
          </div>
        </div>
      </div>
    </div>
  );
}
