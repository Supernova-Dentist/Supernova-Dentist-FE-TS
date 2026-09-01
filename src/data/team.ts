import { DentallyPortal } from '@/lib/constants';
import type { Metadata } from 'next';
import type { StaticImageData } from 'next/image';

import adamImage from '../../public/assets/images/Headshots/adam-young-operations-director-supernova-dental-bridgwater.webp';
import amyImage from '../../public/assets/images/Headshots/amy-skinner-front-of-house-supernova-dental-bridgwater.webp';
import cameranImage from '../../public/assets/images/Headshots/dr-cameran-armaghani-implantologist-supernova-dental-bridgwater.webp';
import jacquelineImage from '../../public/assets/images/Headshots/dr-jacqueline-amarin-dentist-supernova-dental-bridgwater.webp';
import scottImage from '../../public/assets/images/Headshots/dr-scott-young-principal-dentist-supernova-dental-bridgwater.webp';
import souadImage from '../../public/assets/images/Headshots/dr-souad-maddi-dentist-supernova-dental-bridgwater.webp';
import kayleighImage from '../../public/assets/images/Headshots/kayleigh-dowdle-dental-therapist-supernova-dental-bridgwater.webp';
import marianaImage from '../../public/assets/images/Headshots/mariana-barbu-lead-dental-nurse-supernova-dental-bridgwater.webp';
import miaImage from '../../public/assets/images/Headshots/mia-coakley-lead-front-house-supernova-dental-bridgwater.webp';
import teaganImage from '../../public/assets/images/Headshots/teagan-ruby-treatment-coordinator-supernova-dental-bridgwater.webp';
import tracyImage from '../../public/assets/images/Headshots/tracy-hawkins-dental-hygienist-supernova-dental-bridgwater.webp';
import vanessaImage from '../../public/assets/images/Headshots/vanessa-speier-trainee-dental-nurse-supernova-dental-bridgwater.webp';
import victoriaImage from '../../public/assets/images/Headshots/victoria-hands-practice-manager-supernova-dental-bridgwater.webp';

export type TeamGroup =
  | 'Dentists'
  | 'Therapists & Hygienists'
  | 'Nursing Team'
  | 'Patient Experience'
  | 'Practice Leadership & Operations';

export interface TeamTestimonial {
  description: string;
  name: string;
  title: string;
}

export interface TeamExpertise {
  title: string;
  href: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  firstName: string;
  role: string;
  group: TeamGroup;
  image: StaticImageData;
  alt: string;
  qualifications?: string;
  gdc?: string;
  biography: string[];
  bookHref?: string;
  expertise?: TeamExpertise[];
  expertiseHeading?: string;
  testimonials?: TeamTestimonial[];
  testimonialIntro?: string;
  video?: {
    heading: string;
    description: string;
    src: string;
    poster: string;
  };
}

const scottTestimonials: TeamTestimonial[] = [
  {
    description:
      'Scott and his team are absolutely fantastic. His reception staff are incredibly welcoming. They made me feel at ease from my initial call, right through to my appointment with Scott. I am on course to achieve the smile I want. Outstanding level of professionalism. Highly recommend.',
    name: 'Steve Bury',
    title: 'Smile Design Patient',
  },
  {
    description:
      'I had a fantastic experience with Scott and the team at Supernova. He is extremely knowledgeable and experienced, and I felt confident in his care throughout my visit. The team is always accommodating, ensuring they cater to my availability and make the process as smooth as possible. Highly recommend!',
    name: 'Hollie Tudor-Smith',
    title: 'Teeth Whitening Patient',
  },
  {
    description:
      "I am deathly nervous of the dentist, but I called up Thursday as I was in so much pain and spoke to Kayleigh, who was amazing, I was booked in with Scott for today, I was so scared, he was brilliant I had xrays first then asked to come back later, he did an extraction, I have never had some one so gentle and helpful in all my life, I need a few more appointments with things to be done, but Scott put my mind at ease and I'm ready to do this now 😀 Thank you Supernova team.",
    name: 'Rebecca Bryan',
    title: 'Emergency Care Patient',
  },
  {
    description:
      'I had an emergency appointment today with Scott due to having a broken tooth. Scott & his team greeted me with care and kindness. The repair was done efficiently & was pain free. I would recommend Supernova to anyone. A dentist you can trust.',
    name: 'Suzanne Radford',
    title: 'Emergency Care Patient',
  },
  {
    description:
      "I would just like to say how wonderful Scott and his team are as I suffer from anxiety and going to the dentist was a very upsetting time for me,I found as soon as you walk in to supernova dental practice it's totally different from other dentists it's more like a spa and no dentist smells. I had a root filling and never felt a thing which is a first for me best dentist I have ever been to I highly recommend. Thankyou lorraine",
    name: 'Lorraine Drew',
    title: 'General Dentistry Patient',
  },
];

const kayleighTestimonials: TeamTestimonial[] = [
  {
    description:
      'Thank you to Kayleigh and all staff at Supernova today. Lovely caring people. Was nervous before appointment but they all made be feel at ease. Kayleigh done a wonderful job with my teeth they are feeling and looking much cleaner. Won’t feel so anxious about my next appointment in 3 months.',
    name: 'Charlotte Allen',
    title: 'Initial Direct Access Patient',
  },
  {
    description:
      'What an experience so far, Loving every second of my journey. Professional curtesy call, text reminders and updates. Earlier appointment provided nothing is to much for this team. I was seen by Kay and her nurse Tori. So professional. Walked me through everything she was doing. Any questions I had, any little issue I have been living with for years was no problem for her. Tori her nurse was amazing so friendly and removed all my excess dribble and I dribble a lot. I had my teeth all cleaned up and now they are exceptionally smooth. How did they make the water taste like cola too, this place just works magic✨',
    name: 'Dan Lathall',
    title: 'Dental Therapist Services Patient',
  },
  {
    description: `Highly recommend Supernova Dental. I experienced a friendly and professional welcome from Mia, professional and comforting experience with my appointment with Scott and a fantastic professional experience with Kayleigh for my Hygienist appointment, can honestly say it was the most thorough and pleasant hygienist appointment I've experienced. Fantastic team in a lovely/stylish practice. Thanks to all. Josh`,
    name: 'Jay M',
    title: 'Dental Hygiene Patient',
  },
  {
    description:
      "I came for a direct access hygienist appointment with Kayleigh and I couldn't be more impressed! From the moment I arrived, the staff were friendly and welcoming. The practice is a clean and calming environment and I highly recommend this practice for anyone looking for a professional, friendly, and efficient dental hygienist!",
    name: 'Ellie',
    title: 'Initial Direct Access Patient',
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: 'dr-scott-young',
    name: 'Dr. Scott Young',
    firstName: 'Scott',
    role: 'Principal Dentist/Owner',
    group: 'Dentists',
    image: scottImage,
    alt: 'Dr Scott Young, Principal Dentist and Owner at Supernova Dental in Bridgwater, Somerset',
    qualifications: 'BDS (Hons) PGCert Restorative and Aesthetic Dentistry (FGFP) PGDip Orthodontics (SDC) CGD',
    gdc: '284371',
    biography: [
      'My passion for high-quality dentistry has led me to learn from some of the top specialists in the UK and worldwide, going on multiple postgraduate courses to hone my skills and ultimately founding Supernova Dental.',
      'I take immense pride in knowing that our patients feel truly looked after and cared for.',
      'The huge confidence boosts people gain after just a few appointments are a joy to behold-whether that is nervous patients feeling fully at ease or the smile transformations from cosmetic procedures',
    ],
    bookHref: DentallyPortal,
    expertiseHeading: 'How Scott Can Transform Your Smile',
    expertise: [{ title: 'Invisalign', href: '/cosmetic-dentistry/invisalign' }, { title: 'Composite Bonding', href: '/cosmetic-dentistry/composite-bonding' }, { title: 'Teeth Whitening', href: '/cosmetic-dentistry/teeth-whitening' },],
    video: {
      heading: 'Hear from Scott',
      description: 'Get to know Dr. Scott Young, his journey, and his passion for aesthetics and dentistry.',
      src: '/assets/videos/scott_intro.mp4',
      poster: '/assets/images/scott_intro_placeholder.png',
    },
    testimonials: scottTestimonials,
    testimonialIntro:
      'Discover why patients consistently praise Dr. Scott Young for his exceptional care, including services such as Invisalign, composite bonding, teeth whitening, and emergency dentistry.',
  },
  {
    slug: 'dr-cameran-armaghani',
    name: 'Dr. Cameran Armaghani',
    firstName: 'Cameran',
    role: 'Implantologist',
    group: 'Dentists',
    image: cameranImage,
    alt: 'Dr Cameran Armaghani, Implantologist at Supernova Dental in Bridgwater, Somerset',
    qualifications: 'Dr Stom, PGDip (Restorative), PGDip (Implant)',
    gdc: '246327',
    biography: [
      'Cameran graduated Dentistry with first class honours in 2013. Since then he has heavily invested in his postgraduate training.',
      'He completed his postgraduate diploma in Restorative Dentistry at Peninsular University. Involving all restoration aspects such as crowns, veneers, bridges, implants, dentures, gum disease management and full mouth rehabilitation.',
      'He has an Implant diploma and certificates in more complex implant surgery including surgical skills, hard tissue grafting, soft tissue management, sinus lifts and full mouth rehabilitation.',
      'Cameran enjoys all aspects of dental surgery and loves to keep patients smiling using the latest evidence based techniques.',
      'Cameran is from Devon and enjoys fishing, walking with his dog and spending time with his family.',
    ],
    bookHref: DentallyPortal,
    expertiseHeading: 'Interested in dental implants with Dr. Cameran?',
    expertise: [{ title: 'Dental Implants', href: '/cosmetic-dentistry/dental-implants' }],
  },
  {
    slug: 'dr-souad-maddi',
    name: 'Dr. Souad Maddi',
    firstName: 'Souad',
    role: 'Dentist with Special Interest in Restorative Dentistry',
    group: 'Dentists',
    image: souadImage,
    alt: 'Dr Souad Maddi, General and Restorative Dentist at Supernova Dental in Bridgwater, Somerset',
    qualifications: 'DMD, PGDip (Prosth), MClinDent (Restorative), LDS RCS (Eng)',
    gdc: '319944',
    biography: [
      'I provide natural-looking smile enhancements that improve both function and aesthetics, helping patients feel confident in their smiles.',
      'I offer a range of cosmetic and restorative dental treatments, including smile design and minimally invasive cosmetic dentistry, using modern techniques and personalised treatment planning to achieve long-lasting results.',
      "If you're looking for a cosmetic dentist in Bridgwater, you're very welcome to come see me at Supernova Dental Practice, where I aim to make every patient feel comfortable, understood, and supported.",
      "I also speak English, Arabic, French, and Spanish, and I'm happy to provide dental care in the language you feel most comfortable with.",
    ],
    bookHref: DentallyPortal,
  },
  {
    slug: 'kayleigh-dowdle',
    name: 'Kayleigh Dowdle',
    firstName: 'Kayleigh',
    role: 'Dental Therapist',
    group: 'Therapists & Hygienists',
    image: kayleighImage,
    alt: 'Kayleigh, Dental Therapist at Supernova Dental in Bridgwater, Somerset',
    qualifications: 'BSc (Hons) Dental Hygiene & Therapy',
    gdc: '245370',
    biography: [
      'With 15 years in the dental field, I am a dedicated dental therapist passionate about preventative and restorative care.',
      'I focus on patient education, routine hygiene care, and personalised treatment plans to ensure long-term oral health.',
      'By staying updated on industry advancements, I provide high-quality care for patients of all ages, including vulnerable groups.',
      'My goal is to make a positive impact, ensuring comfort and confidence while empowering patients to maintain healthy smiles',
    ],
    bookHref:
      'https://supernova.portal.dental/book/availability?appointment_type_id=-ER6OsMA7wsw&site_id=e7219c5b-2213-4cd0-a33a-dd826b631e68&practitioner_id=215357',
    expertiseHeading: 'How Kayleigh Can Brighten Your Smile',
    expertise: [
      { title: 'Dental Therapist', href: '/general-dentistry/dental-therapist' },
      { title: 'Dental Hygiene', href: '/general-dentistry/dental-hygiene' },
    ],
    testimonials: kayleighTestimonials,
    testimonialIntro:
      'Discover why patients consistently praise Kayleigh Dowdle for her exceptional care, including dental hygiene services and emergency dentistry.',
  },
  {
    slug: 'tracy-hawkins',
    name: 'Tracy Hawkins',
    firstName: 'Tracy',
    role: 'Dental Hygienist',
    group: 'Therapists & Hygienists',
    image: tracyImage,
    alt: 'Tracy, Dental Hygienist at Supernova Dental in Bridgwater, Somerset',
    qualifications: 'Dip DH RCS (Eng)',
    gdc: '6246',
    biography: [
      'With over 20 years of experience as a dental hygienist, I am dedicated to delivering high-quality, patient-focused care in a calm and supportive environment. Known for being kind, caring, and friendly, I take pride in helping patients feel at ease throughout their treatment.',
      'Driven by compassion, I ensure every experience is patient-led, tailoring care to individual needs while achieving effective and lasting results. I believe that creating a relaxed atmosphere is key to both comfort and clinical success.',
      'I am so passionate about promoting the importance of oral health and empowering patients to maintain confident, healthy smiles. I looking forward to meeting with you.',
    ],
    bookHref: 'https://supernova.portal.dental/book/',
    expertiseHeading: 'How Tracy Can Help Keep Your Smile Healthy',
    expertise: [{ title: 'Dental Hygiene', href: '/general-dentistry/dental-hygiene' }],
  },
  {
    slug: 'victoria-hands',
    name: 'Victoria Hands',
    firstName: 'Tori',
    role: 'Practice Manager/Dental Nurse',
    group: 'Practice Leadership & Operations',
    image: victoriaImage,
    alt: 'Victoria Hands, Practice Manager/Dental Nurse at Supernova Dental in Bridgwater, Somerset',
    gdc: '308678',
    biography: [
      'I’m Tori, the Practice Manager/Dental Nurse here at Supernova Dental. I’ve been nursing for over five years and qualified in 2023. I love seeing their confidence grow when they see their results.',
      'I’m passionate about providing excellent care and supporting patients throughout their dental journey.',
      'My goal is to ensure they feel informed, comfortable, and excited about their future smile before they even step through the door.',
    ],
  },
  {
    slug: 'mariana-barbu',
    name: 'Mariana Barbu',
    firstName: 'Mariana',
    role: 'Lead Dental Nurse',
    group: 'Nursing Team',
    image: marianaImage,
    alt: 'Mariana Barbu, Lead Dental Nurse at Supernova Dental in Bridgwater, Somerset',
    gdc: '315176',
    biography: [
      "I'm Mariana, the Lead Dental Nurse here at Supernova Dental. I've been working in dentistry since 2022 and qualified as a Dental Nurse in 2024.",
      'This year, I achieved my NEBDN Dental Radiography qualification and completed additional CBCT training, allowing me to support our clinicians with complex dental imaging and provide the highest standard of patient care.',
      "I'm passionate about creating a welcoming, safe and comfortable environment for every patient. Whether you're visiting us for a routine check-up or more complex treatment, I love helping people feel at ease and supporting them throughout their smile journey.",
    ],
  },
  {
    slug: 'vanessa-speier',
    name: 'Vanessa Speier',
    firstName: 'Vanessa',
    role: 'Trainee Dental Nurse',
    group: 'Nursing Team',
    image: vanessaImage,
    alt: 'Vanessa Speier, Trainee Dental Nurse at Supernova Dental in Bridgwater, Somerset',
    biography: [
      "Joining the team has been a wonderful experience, and I've been learning something new every day. Everyone has been so patient, friendly, and supportive. It's lovely to be surrounded by people who are passionate about making our patients smile!",
    ],
  },
  {
    slug: 'teagan-ruby',
    name: 'Teagan Ruby',
    firstName: 'Teagan',
    role: 'Treatment Coordinator',
    group: 'Patient Experience',
    image: teaganImage,
    alt: 'Teagan Ruby, Treatment Coordinator at Supernova Dental in Bridgwater, Somerset',
    gdc: '303942',
    biography: [
      'Alongside my role, I’m also a qualified dental nurse and have been part of the dental industry since 2019.',
      'I love supporting patients throughout their dental journey, from the very first consultation through to the final result. It’s really rewarding helping patients understand their treatment options, feel comfortable with their decisions, and watching their confidence grow along the way.',
      'Being part of each patient’s journey and seeing their transformation is what I enjoy most about my role.',
    ],
  },
  {
    slug: 'adam-young',
    name: 'Adam Young',
    firstName: 'Adam',
    role: 'Operations Director',
    group: 'Practice Leadership & Operations',
    image: adamImage,
    alt: 'Adam Young, Operations Director at Supernova Dental in Bridgwater, Somerset',
    biography: [
      'As the Operations Director, my focus is on business strategy, maintaining our website, while also driving our social media and external marketing efforts.',
      'I also built the website to ensure a seamless online experience for our patients. I guide them to understand and feel confident about their journey with Supernova Dental.',
      'My goal is to ensure they feel informed, comfortable, and excited about their future smile before they even step through the door.',
    ],
  },
  {
    slug: 'mia-coakley',
    name: 'Mia Coakley',
    firstName: 'Mia',
    role: 'Lead Front of House',
    group: 'Patient Experience',
    image: miaImage,
    alt: 'Mia Coakley, Lead Front of House at Supernova Dental in Bridgwater, Somerset',
    biography: [
      'I’m the first face you’ll see at Supernova Dental, and I’ll always greet you with a smile! With over 5 years of experience in dentistry, I love meeting new patients and making everyone feel welcome.',
      'I’m passionate about learning and staying up to date with the latest in the field to provide the best experience for our patients.',
    ],
  },
  {
    slug: 'amy-skinner',
    name: 'Amy Skinner',
    firstName: 'Amy',
    role: 'Receptionist',
    group: 'Patient Experience',
    image: amyImage,
    alt: 'Amy Skinner, Receptionist at Supernova Dental in Bridgwater, Somerset',
    biography: [
      'It’s been so lovely getting to know our patients, I really enjoy being part of a team that’s so friendly and focused on giving people the best experience.',
    ],
  },
];

export const teamGroups: TeamGroup[] = [
  'Dentists',
  'Therapists & Hygienists',
  'Nursing Team',
  'Patient Experience',
  'Practice Leadership & Operations',
];

export const getTeamMember = (slug: string) => {
  const member = teamMembers.find((item) => item.slug === slug);

  if (member === undefined) throw new Error(`Unknown team member: ${slug}`);

  return member;
};

export const getTeamMetadata = (
  slug: string,
  overrides: { title?: string; description?: string; keywords?: string | string[] } = {}
): Metadata => {
  const member = getTeamMember(slug);
  const title = overrides.title ?? `${member.name} | ${member.role} | Supernova Dental`;
  const description =
    overrides.description ?? `Meet ${member.name}, ${member.role} at Supernova Dental in Bridgwater, Somerset.`;

  return {
    title,
    description,
    keywords: overrides.keywords,
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      title,
      description,
      url: `/team/${member.slug}`,
      type: 'profile',
      images: [{ url: member.image.src, alt: member.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [member.image.src],
    },
  };
};
