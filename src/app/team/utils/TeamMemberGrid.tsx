'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Import images to allow Next.js to generate blurDataURL automatically
import adamImage from '../../../../public/assets/images/Headshots/adam-young-operations-director-supernova-dental-bridgwater.webp';
import amyImage from '../../../../public/assets/images/Headshots/amy-skinner-front-of-house-supernova-dental-bridgwater.webp';
import jacquelineImage from '../../../../public/assets/images/Headshots/dr-jacqueline-amarin-dentist-supernova-dental-bridgwater.webp';
import saraImage from '../../../../public/assets/images/Headshots/dr-sara-banuri-implantologist-supernova-dental-bridgwater.webp';
import scottImage from '../../../../public/assets/images/Headshots/dr-scott-young-principal-dentist-supernova-dental-bridgwater.webp';
import souadImage from '../../../../public/assets/images/Headshots/dr-souad-maddi-dentist-supernova-dental-bridgwater.webp';
import kayleighImage from '../../../../public/assets/images/Headshots/kayleigh-dowdle-supernova-dental-bridgwater.webp';
import mariaImage from '../../../../public/assets/images/Headshots/maria-mihaela-morar-dental-nurse-supernova-dental-bridgwater.webp';
import miaImage from '../../../../public/assets/images/Headshots/mia-coakley-lead-front-house-supernova-dental-bridgwater.webp';
import vanessaImage from '../../../../public/assets/images/Headshots/vanessa-speier-trainee-dental-nurse-supernova-dental-bridgwater.webp';
import victoriaImage from '../../../../public/assets/images/Headshots/victoria-hands-lead-dental-nurse-supernova-dental-bridgwater.webp';

const teamMembers = [
  { name: 'Dr. Scott Young', title: 'Principal Dentist/Owner', image: scottImage, slug: 'dr-scott-young' }, 
  { name: 'Dr. Sara D Banuri', title: 'Implantologist/Oral Surgeon', image: saraImage, slug: 'dr-sara-d-banuri' },
  { name: 'Dr. Souad Maddi', title: 'General and Restorative Dentist', image: souadImage, slug: 'dr-souad-maddi' },
  {
    name: 'Dr. Jacqueline Amarin',
    title: 'General and Restorative Dentist',
    image: jacquelineImage,
    slug: 'dr-jacqueline-amarin',
  },
  { name: 'Kayleigh Dowdle', title: 'Dental Therapist', image: kayleighImage, slug: 'kayleigh-dowdle' },
  { name: 'Adam Young', title: 'Operations Director', image: adamImage, slug: 'adam-young' },
  { name: 'Victoria Hands', title: 'Lead Dental Nurse', image: victoriaImage, slug: 'victoria-hands' },
  { name: 'Maria-Mihaela Morar', title: 'Dental Nurse', image: mariaImage, slug: 'maria-mihaela-morar' },
  { name: 'Mia Coakley', title: 'Lead Front of House', image: miaImage, slug: 'mia-coakley' },
  { name: 'Amy Skinner', title: 'Receptionist', image: amyImage, slug: 'amy-skinner' },
  { name: 'Vanessa Speier', title: 'Trainee Dental Nurse', image: vanessaImage, slug: 'vanessa-speier' },
];

export default function TeamMemberGrid() {
  const router = useRouter();

  const handleShowBio = (member: string) => {
    router.push(`/team/${member}`);
  };

  return (
    <section className='container mx-auto py-12 md:py-20'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className='group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105'
          >
            <div className='overflow-hidden rounded-lg'>
              <Image
                src={member.image}
                alt={`${member.name}, ${member.title} at Supernova Dental in Bridgwater, Somerset`}
                width={1800}
                height={2700}
                quality={75}
                placeholder='blur'
                className='object-cover w-full h-full rounded-lg'
                priority={index < 4} // first row priority
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
