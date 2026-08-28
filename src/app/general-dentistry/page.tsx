import ServiceCategoryPage, { type ServiceCategoryGroup } from '@/components/ServiceExperience/ServiceCategoryPage';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Dentistry in Bridgwater, Somerset | Supernova Dental',
  description:
    'Looking for a dentist in Bridgwater? Supernova Dental provides general dentistry, including checkups, hygiene visits and emergency appointments.',
  keywords:
    'general dentistry Bridgwater, general dentistry Somerset, general dentistry Taunton, emergency dentist Bridgwater, emergency dentist Somerset, dental hygiene Bridgwater, dental hygiene Somerset, dentist checkup Bridgwater, oral health Bridgwater, routine dental care Somerset, family dentistry Bridgwater, family dentistry Somerset, Supernova Dental',
};

const groups: ServiceCategoryGroup[] = [
  {
    title: 'Routine & preventive care',
    description: 'Thoughtful ongoing care to understand, maintain and protect your oral health.',
    services: [
      {
        name: 'New patient examination',
        href: '/general-dentistry/new-patient-examination',
        image: '/assets/images/new-patient-examination-2.webp',
        imageAlt: 'New patient dental examination at Supernova Dental in Bridgwater',
        description: 'A calm, thorough first appointment centred on your needs and priorities.',
      },
      {
        name: 'Dental hygiene',
        href: '/general-dentistry/dental-hygiene',
        image: '/assets/images/plaque_removal.jpeg',
        imageAlt: 'Dental hygiene care in Bridgwater',
        description: 'Professional hygiene care and practical support for a healthier mouth.',
      },
      {
        name: 'Dental therapist',
        href: '/general-dentistry/dental-therapist',
        image: '/assets/images/therapy_intro.webp',
        imageAlt: 'Dental therapist treatment at Supernova Dental',
        description: 'Preventive and restorative care delivered within the dental team.',
      },
      {
        name: 'Dental membership plans',
        href: '/general-dentistry/dental-membership-plans',
        image: '/assets/images/practice_plan_thumbnail.png',
        imageAlt: 'Supernova Dental membership plans in Bridgwater',
        description: 'A straightforward way to plan for regular examinations and hygiene care.',
      },
    ],
  },
  {
    title: 'Restorative & protective care',
    description: 'Treatment options designed to restore comfort, function and confidence.',
    services: [
      {
        name: 'White composite fillings',
        href: '/general-dentistry/white-composite-fillings',
        image: '/assets/images/filling_intro.jpg',
        imageAlt: 'White composite dental filling treatment in Bridgwater',
        description: 'Tooth-coloured fillings shaped to restore and protect your tooth.',
      },
      {
        name: 'Root canal treatment',
        href: '/general-dentistry/root-canal-treatment',
        image: '/assets/images/root-canal-treatment.webp',
        imageAlt: 'Root canal treatment at Supernova Dental',
        description: 'Care focused on relieving symptoms and preserving your natural tooth.',
      },
      {
        name: 'Dentures',
        href: '/general-dentistry/dentures',
        image: '/assets/images/dentures-intro-bridgwater.webp',
        imageAlt: 'Dentures consultation in Bridgwater',
        description: 'Personalised tooth replacement options for everyday comfort and function.',
      },
      {
        name: 'Sports mouthguards',
        href: '/general-dentistry/sports-mouthguards',
        image: '/assets/images/xs_guard.jpeg',
        imageAlt: 'Custom sports mouthguard from Supernova Dental',
        description: 'Custom-made protection designed around your teeth and your sport.',
      },
    ],
  },
  {
    title: 'Urgent care & treatment support',
    description: 'Clear routes to urgent help and practical ways to plan treatment costs.',
    services: [
      {
        name: 'Emergency dentistry',
        href: '/general-dentistry/emergency-dentistry',
        image: '/assets/images/emerg_intro.jpg',
        imageAlt: 'Emergency dental appointment in Bridgwater',
        description: 'Prompt assessment and support when a dental problem cannot wait.',
      },
      {
        name: 'Dental finance',
        href: '/general-dentistry/dental-finance',
        image: '/assets/images/fca-logo-social-media.jpg',
        imageAlt: 'Dental finance information from Supernova Dental',
        description: 'Information about the finance options available for eligible treatments.',
      },
    ],
  },
];

export default function GeneralDentistryPage() {
  return (
    <ServiceCategoryPage
      eyebrow='General dentistry in Bridgwater'
      title='Considered dental care for every stage of life.'
      intro={
        <p>
          Browse our essential dental services designed to support lifelong oral health for you and your family. Serving
          patients from Bridgwater, Taunton, Highbridge, Burnham-on-Sea and surrounding areas.
        </p>
      }
      groups={groups}
    />
  );
}
