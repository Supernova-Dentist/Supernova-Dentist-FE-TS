import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import TeamMemberGrid from './utils/TeamMemberGrid';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Our Team',
  description: 'Meet the dedicated professionals who make our dental practice exceptional.',
};

export default function TeamPage() {
  return (
    <div className='flex flex-col bg-lightGrey min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative w-full  bg-cover bg-center bg-no-repeat py-24 md:py-36 lg:py-48'>
        <h1 className='text-3xl font-extrabold text-center text-gold sm:text-4xl md:text-5xl'>Meet Our Dental Team</h1>
        <p className='mx-auto mt-4 max-w-2xl text-lg text-center text-white'>
          Discover the dedicated professionals who make our dental practice exceptional.
        </p>

        <div className='absolute inset-0 bg-black opacity-30' />
      </div>

      {/* Breadcrumb */}
      <div className='mx-auto px-4 md:px-6 container pt-8 pb-4'>
        <BreadCrumb />
      </div>

      <TeamMemberGrid />
    </div>
  );
}
