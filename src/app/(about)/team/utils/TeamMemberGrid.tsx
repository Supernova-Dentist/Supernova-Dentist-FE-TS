'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

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

export default function TeamMemberGrid() {
  const router = useRouter();

  const handleShowBio = (member: string) => {
    router.push(`/team/${member}`);
  };

  return (
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
  );
}
