import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import TeamMemberGrid from './utils/TeamMemberGrid';

export const metadata: Metadata = {
  title: 'Meet Our Skilled Dental Professionals | Supernova Dental Bridgwater',
  description:
    'Discover the expert dental team at Supernova Dental Bridgwater. Our dedicated dentists, implantologists, therapists, oral surgeons, and hygienists provide personalised care using advanced techniques. Compassionate, highly qualified professionals committed to your oral health and smile transformation in Bridgwater and surrounding areas.',
  keywords: [
    'dental team Bridgwater',
    'qualified dentists Bridgwater',
    'implantologists Bridgwater',
    'dental therapists UK',
    'oral surgeons Bridgwater',
    'dental hygienists UK',
    'experienced dental professionals',
    'personalised dental care Bridgwater',
    'compassionate dentists',
    'advanced dental techniques',
    'dental specialists UK',
    'oral health experts Bridgwater',
    'smile transformation dentists Bridgwater',
  ].join(', '),
};

export default function TeamPage() {
  return (
    <div className='flex flex-col min-h-screen justify-center align-center bg-gradient-to-b from-white to-cream px-8'>
      <HighlightCard
        logoSrc='/assets/images/logo.png'
        title='Meet Our Dental Team'
        description='Discover the dedicated professionals who make our dental practice exceptional.'
        className='mx-auto mt-16' // Center the card
      />
      {/* Breadcrumb */}
      <div className='mx-auto px-4 md:px-6 container pt-8 pb-4'>
        <BreadCrumb />
      </div>

      <TeamMemberGrid />
    </div>
  );
}
