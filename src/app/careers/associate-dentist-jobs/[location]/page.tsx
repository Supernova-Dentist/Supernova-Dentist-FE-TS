import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SubHeader from '@/components/SubHeader/SubHeader';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../../../public/assets/images/logo.png';
import SurgeryImage from '../../../../../public/assets/images/sunlight_suite_supernova_dental_bridgwater.webp';

import { AssociateDentistBridgwaterFormContent } from '../utils/associate-dentist-bridgwater-form-content';

import { dentistJobLocations } from '../utils/location';

export function generateStaticParams() {
  return Object.keys(dentistJobLocations).map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: { params: { location: string } }) {
  const key = params.location as keyof typeof dentistJobLocations;
  const location = dentistJobLocations[key];

  return {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
  };
}

export default function AssociateDentistJob({ params }: { params: { location: string } }) {
  const key = params.location as keyof typeof dentistJobLocations;
  const location = dentistJobLocations[key];

  const jobSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',

    title: 'Associate Dentist',

    description:
      'Supernova Dental is hiring an Associate Dentist to join our fully private dental practice in Bridgwater, Somerset.',

    datePosted: '2026-07-20',

    employmentType: ['FULL_TIME', 'PART_TIME'],

    hiringOrganization: {
      '@type': 'Organization',
      name: 'Supernova Dental',
      sameAs: 'https://www.supernovadental.co.uk',
      logo: 'https://www.supernovadental.co.uk/assets/images/logo.png',
    },

    // IMPORTANT:
    // Actual job location remains Bridgwater
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bridgwater',
        addressRegion: 'Somerset',
        addressCountry: 'GB',
      },
    },

    occupationalCategory: 'Dentist',

    industry: 'Dentistry',

    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bridgwater',
        addressRegion: 'Somerset',
        addressCountry: 'GB',
      },
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobSchema),
        }}
      />

      <section className='text-left pt-24 px-4 sm:px-10'>
        <div className='flex flex-col items-center text-center'>
          <Image src={logo} alt='Supernova Dental Logo' className='w-20 h-20 mb-4' />

          <BreadCrumb />

          <h1 className='text-4xl font-semibold text-gold mb-2 py-4'>Associate Dentist Jobs Near {location.name}</h1>

          <p className='text-lg text-gray-700'>Join our fully private dental practice in Bridgwater, Somerset</p>

          <p className='text-md text-gray-600'>Full-time & Part-time Positions Available</p>
        </div>

        <div className='max-w-[1000px] mx-auto mt-8 flex flex-col gap-8 pb-12'>
          <SectionSpacing>
            <Image
              src={SurgeryImage}
              alt='Supernova Dental Practice Bridgwater Somerset'
              width={600}
              height={400}
              className='rounded-2xl shadow-md object-cover w-[40rem] mx-auto'
            />

            <SubHeader>Associate Dentist Opportunities Near {location.name}</SubHeader>

            <p>
              Looking for Associate Dentist jobs near {location.name}? Supernova Dental is a modern fully private dental
              practice based in <strong>Bridgwater, Somerset</strong>.
            </p>

            <p className='mt-3'>{location.commute}</p>

            <p className='mt-3'>
              Our location makes us a convenient choice for dentists living in {location.name} and surrounding areas.
            </p>

            <Link href='/find-us' className='underline text-blue-600'>
              View directions
            </Link>
          </SectionSpacing>

          <SectionSpacing>
            <SubHeader>Why Join Supernova Dental?</SubHeader>

            <ul className='list-disc list-inside space-y-2'>
              <li>Fully private dental practice</li>

              <li>Mentorship from Principal Dentist</li>

              <li>Invisalign and cosmetic dentistry opportunities</li>

              <li>Modern technology including CBCT and iTero Lumina</li>

              <li>On-site parking</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing>
            <SubHeader>The Role</SubHeader>

            <ul className='list-disc list-inside space-y-2'>
              <li>Manage and grow your own private patient list.</li>

              <li>Provide general dentistry alongside Invisalign and cosmetic dentistry.</li>

              <li>Develop your clinical interests with support.</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing>
            <SubHeader>How to Apply</SubHeader>

            <p>
              If you are an Associate Dentist looking for opportunities near {location.name}, we would love to hear from
              you.
            </p>

            <p className='mt-3'>
              Please email your CV and clinical portfolio to
              <strong> scott@supernovadental.co.uk</strong>
              or complete the application form below.
            </p>
          </SectionSpacing>

          <AssociateDentistBridgwaterFormContent />
        </div>
      </section>
    </>
  );
}
