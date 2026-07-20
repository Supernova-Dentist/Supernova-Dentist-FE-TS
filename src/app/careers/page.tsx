import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { CareersOutlineCards } from '@/components/OutlineCards/CareersOutlineCards';
import { type Metadata } from 'next';
import { CareerFormContent } from './utils/career-form-content';

export const metadata: Metadata = {
  title: 'Dental Careers & Jobs in Bridgwater, Somerset | Supernova Dental',
  description:
    'Discover dental careers and job opportunities at Supernova Dental in Bridgwater, Somerset. Join our modern private dental practice and become part of a supportive clinical team.',
  keywords:
    'dental jobs Bridgwater, dentist jobs Somerset, associate dentist jobs Bridgwater, dental nurse jobs Somerset, treatment coordinator jobs Bridgwater, dental careers Somerset, Supernova Dental jobs, dental practice vacancies',
};

export default function CareersPage() {
  const careersSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Dental Careers at Supernova Dental',
    description: 'Explore dental jobs and career opportunities at Supernova Dental in Bridgwater, Somerset.',
    url: 'https://www.supernovadental.co.uk/careers',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Current Dental Vacancies',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Associate Dentist',
          url: 'https://www.supernovadental.co.uk/careers/associate-dentist-bridgwater-somerset',
        },
      ],
    },
    about: {
      '@type': 'Organization',
      name: 'Supernova Dental',
      url: 'https://www.supernovadental.co.uk',
      logo: 'https://www.supernovadental.co.uk/assets/images/logo.png',
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
          __html: JSON.stringify(careersSchema),
        }}
      />

      <div className='min-h-screen flex justify-center'>
        <div className='container mx-auto py-24 px-8'>
          <HighlightCard
            title='Dental Jobs at Supernova Dental'
            description='We’re always looking for passionate dental professionals to join our growing team. Explore our current vacancies below.'
            logoSrc='/favicon.ico'
          />

          <main className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
            <BreadCrumb />

            <h1 className='sr-only'>Dental Careers and Jobs at Supernova Dental Bridgwater Somerset</h1>

            <CareersOutlineCards />

            <hr className='my-12 border-gold/40' />

            <section>
              <h2 className='text-md md:text-lg lg:text-2xl text-center font-semibold text-gold mb-4'>
                Don’t see your desired role?
              </h2>

              <p className='text-center max-w-2xl mx-auto mb-6 text-gray-700'>
                We&apos;re always open to hearing from talented dental professionals. If you don’t see a suitable
                position listed, register your interest and we&apos;ll contact you when a role becomes available.
              </p>

              <div className='bg-white rounded-xl p-2 shadow-md max-w-3xl mx-auto'>
                <CareerFormContent />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
