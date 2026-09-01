import { CareersOutlineCards } from '@/components/OutlineCards/CareersOutlineCards';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { CareerFormContent } from './utils/career-form-content';

export const metadata: Metadata = {
  title: 'Dental Careers & Jobs in Bridgwater, Somerset | Supernova Dental',
  description:
    'Discover current dental careers at Supernova Dental in Bridgwater, Somerset, or register your interest in joining our private practice team.',
  alternates: { canonical: '/careers' },
};

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
  },
};

export default function CareersPage() {
  return (
    <main className='mt-20 bg-porcelain text-obsidian'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />

      <section className='relative isolate overflow-hidden bg-obsidian text-ivory'>
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <div className='mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-6 sm:px-6 md:pb-24 md:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.75fr)] lg:items-center lg:gap-20 lg:px-8'>
          <div>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>
              Careers at Supernova Dental
            </p>
            <div aria-hidden='true' className='mb-7 flex items-center gap-3'>
              <span className='h-px w-12 bg-champagne' />
              <span className='size-1.5 rotate-45 bg-champagne' />
            </div>
            <h1 className='max-w-3xl text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl'>
              Join a team shaping a more considered patient experience.
            </h1>
            <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/80 sm:text-xl'>
              Explore current opportunities at our private practice in Bridgwater, or register your interest so the team
              can keep your details on file for future roles.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='#current-vacancies'
                className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-semibold text-obsidian shadow-[0_12px_30px_rgba(198,161,91,0.18)] transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
              >
                View current vacancy <FiArrowRight aria-hidden='true' className='ml-2 size-4' />
              </Link>
              <Link
                href='#career-interest'
                className='inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-champagne/70 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
              >
                Register your interest
              </Link>
            </div>
          </div>
          <div className='relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-champagne/30 bg-deep-navy shadow-[0_30px_80px_rgba(0,0,0,0.3)]'>
            <Image
              src='/assets/images/team_sd.jpeg'
              alt='Members of the Supernova Dental team'
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 45vw'
              className='object-cover'
            />
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent'
            />
          </div>
        </div>
      </section>

      <section
        id='current-vacancies'
        aria-labelledby='current-vacancies-heading'
        className='scroll-mt-24 bg-ivory px-4 py-20 sm:px-6 md:py-28 lg:px-8'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 max-w-2xl'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>
              Current opportunities
            </p>
            <h2 id='current-vacancies-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              Explore the current vacancy.
            </h2>
          </div>
          <CareersOutlineCards />
        </div>
      </section>

      <section
        id='career-interest'
        aria-labelledby='career-interest-heading'
        className='scroll-mt-24 bg-porcelain px-4 py-20 sm:px-6 md:py-28 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(22rem,1fr)] lg:items-start lg:gap-20'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>
              Register your interest
            </p>
            <h2 id='career-interest-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              Don&apos;t see the role you are looking for?
            </h2>
            <p className='mt-6 max-w-xl text-lg leading-8 text-taupe'>
              Tell us a little about yourself and the type of opportunity you are interested in. We will retain your
              details for consideration when an appropriate role becomes available.
            </p>
          </div>
          <div className='rounded-[1.5rem] border border-control-border bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.1)] md:p-4'>
            <CareerFormContent />
          </div>
        </div>
      </section>
    </main>
  );
}
