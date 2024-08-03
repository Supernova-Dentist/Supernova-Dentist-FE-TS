'use client';

import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function TeamPage() {
  const router = useRouter();

  const handleShowBio = (member: string) => {
    router.push(`/team/${member}`);
  };

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

      {/* Team Members */}
      <section className='container mx-auto py-12 md:py-20'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className='group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105'
            >
              <div className='aspect-square overflow-hidden'>
                <img src={member.image} alt={member.name} className='h-full w-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900'>{member.name}</h3>
                <p className='text-sm text-gray-600'>{member.title}</p>
                <Button
                  variant='link'
                  className='mt-4 text-blue-600 hover:underline'
                  onClick={() => handleShowBio(member.slug)}
                >
                  Show Bio
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: 'Dr. Scott Young',
    title: 'Dentist',
    image: 'https://via.placeholder.com/600',
    slug: 'scott-young',
  },
  {
    name: 'Dr. John Smith',
    title: 'Dental Hygienist',
    image: 'https://via.placeholder.com/600',
    slug: 'john-smith',
  },
  {
    name: 'Dr. Sarah Lee',
    title: 'Orthodontist',
    image: 'https://via.placeholder.com/600',
    slug: 'sarah-lee',
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Oral Surgeon',
    image: 'https://via.placeholder.com/600',
    slug: 'michael-chen',
  },
];
