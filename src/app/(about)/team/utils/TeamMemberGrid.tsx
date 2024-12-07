'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Scott Young',
    title: 'Principal Dentist',
    image: '/assets/images/Headshots/Supernova-03.jpg',
    slug: 'scott-young',
  },
  {
    name: 'Kayleigh Dowdle',
    title: 'Dental Therapist',
    image: '/assets/images/Headshots/Supernova-02.jpg',
    slug: 'kayleigh-dowdle',
  },
  {
    name: 'Mia Coakley',
    title: 'Lead Front of House',
    image: '/assets/images/Headshots/Supernova-05.jpg',
    slug: 'mia-coakley',
  },
  {
    name: 'Aleena Brazier',
    title: 'Dental Nurse',
    image: '/assets/images/Headshots/Supernova-07.jpg',
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
              <Image
                src={member.image}
                alt={`${member.name} headshot`}
                width={600}
                height={800}
                layout={'responsive'}
                quality={100}
                className='object-contain h-auto w-auto max-w-[40rem] rounded-lg p-4'
              />
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
