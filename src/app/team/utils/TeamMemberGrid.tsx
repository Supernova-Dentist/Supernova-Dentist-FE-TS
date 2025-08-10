'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const teamMembers = [
  {
    name: 'Dr. Scott Young',
    title: 'Principal Dentist/Owner',
    image: '/assets/images/Headshots/scott_headshot.jpeg',
    slug: 'dr-scott-young',
  },
  {
    name: 'Dr. Sara D Banuri',
    title: 'Implantologist/Oral Surgeon',
    image: '/assets/images/Headshots/sara.jpg',
    slug: 'dr-sara-d-banuri',
  },
  {
    name: 'Dr. Jacqueline Amarin',
    title: 'General and Restorative Dentist',
    image: '/assets/images/Headshots/jackie.jpeg',
    slug: 'dr-jacqueline-amarin',
  },
  {
    name: 'Kayleigh Dowdle',
    title: 'Dental Therapist',
    image: '/assets/images/Headshots/kayleigh_headshot.jpeg',
    slug: 'kayleigh-dowdle',
  },
  {
    name: 'Adam Young',
    title: 'Operations Director',
    image: '/assets/images/Headshots/adam.jpg',
    slug: 'adam-young',
  },
  {
    name: 'Victoria Hands',
    title: 'Lead Dental Nurse',
    image: '/assets/images/Headshots/tori.jpg',
    slug: 'victoria-hands',
  },
  {
    name: 'Maria-Mihaela Morar',
    title: 'Dental Nurse',
    image: '/assets/images/Headshots/maria_headshot.jpg',
    slug: 'maria-mihaela-morar',
  },
  {
    name: 'Mia Coakley',
    title: 'Lead Front of House',
    image: '/assets/images/Headshots/Supernova-05.jpg',
    slug: 'mia-coakley',
  },
  {
    name: 'Amy Skinner',
    title: 'Receptionist',
    image: '/assets/images/Headshots/amy.jpg',
    slug: 'amy-skinner',
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
              <div className='mx-auto flex justify-center p-2'>
                <Button
                  variant='link'
                  className='mt-4 text-cream hover:underline bg-gold p-6 text-lg'
                  onClick={() => handleShowBio(member.slug)}
                >
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
