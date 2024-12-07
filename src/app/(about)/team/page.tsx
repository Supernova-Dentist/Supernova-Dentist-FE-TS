import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { type Metadata } from 'next';
import TeamMemberGrid from './utils/TeamMemberGrid';

export const metadata: Metadata = {
  title: 'Supernova Dental | Our Team',
  description: 'Meet the dedicated professionals who make our dental practice exceptional.',
};

export default function TeamPage() {
  return (
    <div className='flex flex-col min-h-screen justify-center align-center bg-gradient-to-b from-white to-cream'>
      <h1 className='text-3xl font-extrabold text-center text-gold md:text-5xl lg:text-7xl'>Meet Our Dental Team</h1>
      <p className='mx-auto mt-4 max-w-2xl text-md md:text-xl lg:text-2xl text-center'>
        Discover the dedicated professionals who make our dental practice exceptional.
      </p>
      {/* Breadcrumb */}
      <div className='mx-auto px-4 md:px-6 container pt-8 pb-4'>
        <BreadCrumb />
      </div>

      <TeamMemberGrid />
    </div>
  );
}
