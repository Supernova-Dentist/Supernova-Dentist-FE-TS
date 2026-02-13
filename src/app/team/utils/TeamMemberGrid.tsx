'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const teamMembers = [
  {
    name: 'Dr. Scott Young',
    title: 'Principal Dentist/Owner',
    image: '/assets/images/Headshots/dr-scott-young-principal-dentist-supernova-dental-bridgwater.webp',
    slug: 'dr-scott-young',
  },
  {
    name: 'Dr. Sara D Banuri',
    title: 'Implantologist/Oral Surgeon',
    image: '/assets/images/Headshots/dr-sara-banuri-implantologist-supernova-dental-bridgwater.webp',
    slug: 'dr-sara-d-banuri',
  },
  {
    name: 'Dr. Souad Maddi',
    title: 'General and Restorative Dentist',
    image: '/assets/images/Headshots/dr-souad-maddi-dentist-supernova-dental-bridgwater.webp',
    slug: 'dr-souad-maddi',
  },
  {
    name: 'Dr. Jacqueline Amarin',
    title: 'General and Restorative Dentist',
    image: '/assets/images/Headshots/dr-jacqueline-amarin-dentist-supernova-dental-bridgwater.webp',
    slug: 'dr-jacqueline-amarin',
  },

  {
    name: 'Kayleigh Dowdle',
    title: 'Dental Therapist',
    image: '/assets/images/Headshots/kayleigh-dowdle-supernova-dental-bridgwater.webp',
    slug: 'kayleigh-dowdle',
  },
  {
    name: 'Adam Young',
    title: 'Operations Director',
    image: '/assets/images/Headshots/adam-young-operations-director-supernova-dental-bridgwater.webp',
    slug: 'adam-young',
  },
  {
    name: 'Victoria Hands',
    title: 'Lead Dental Nurse',
    image: '/assets/images/Headshots/victoria-hands-lead-dental-nurse-supernova-dental-bridgwater.webp',
    slug: 'victoria-hands',
  },
  {
    name: 'Maria-Mihaela Morar',
    title: 'Dental Nurse',
    image: '/assets/images/Headshots/maria-mihaela-morar-dental-nurse-supernova-dental-bridgwater.webp',
    slug: 'maria-mihaela-morar',
  },
  {
    name: 'Mia Coakley',
    title: 'Lead Front of House',
    image: '/assets/images/Headshots/mia-coakley-lead-front-house-supernova-dental-bridgwater.webp',
    slug: 'mia-coakley',
  },
  {
    name: 'Amy Skinner',
    title: 'Receptionist',
    image: '/assets/images/Headshots/amy-skinner-front-of-house-supernova-dental-bridgwater.webp',
    slug: 'amy-skinner',
  },
  {
    name: 'Vanessa Speier',
    title: 'Trainee Dental Nurse',
    image: '/assets/images/Headshots/vanessa-speier-trainee-dental-nurse-supernova-dental-bridgwater.webp',
    slug: 'vanessa-speier',
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
            <div className='overflow-hidden'>
              <Image
                src={member.image}
                alt={`${member.name}, ${member.title} at Supernova Dental in Bridgwater`}
                width={1800}
                height={2700}
                layout={'responsive'}
                quality={75}
                className='object-cover h-auto w-auto rounded-lg p-4'
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
