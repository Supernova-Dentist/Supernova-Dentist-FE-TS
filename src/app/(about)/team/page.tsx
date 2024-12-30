import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { type Metadata } from 'next';
import TeamMemberGrid from './utils/TeamMemberGrid';
import { HighlightCard } from '@/components/HighlightCard/HightlightCard';

export const metadata: Metadata = {
  title: 'Supernova Dental | Our Team',
  description: 'Meet the dedicated professionals who make our dental practice exceptional.',
};

export default function TeamPage() {
  return (
    <div className='flex flex-col min-h-screen justify-center align-center bg-gradient-to-b from-white to-cream py-24 px-8'>
      <HighlightCard
        logoSrc='/assets/images/logo.png'
        title='Meet Our Dental Team'
        description='Discover the dedicated professionals who make our dental practice exceptional.'
        className='mx-auto' // Center the card
      />
      {/* Breadcrumb */}
      <div className='mx-auto px-4 md:px-6 container pt-8 pb-4'>
        <BreadCrumb />
      </div>

      <TeamMemberGrid />
    </div>
  );
}
