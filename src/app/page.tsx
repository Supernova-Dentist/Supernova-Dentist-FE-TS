import AuroraHero from '@/components/blocks/AuroraHero/AuroraHero';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import { DentallyPortal } from '@/lib/constants';
import { practiceLocation } from '@/lib/practiceLocation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiClock, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';
import cosmeticDentistryImage from '../../public/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp';
import dentalImplantsImage from '../../public/assets/images/cbct_supernova_dental_bridgwater.webp';
import generalDentistryImage from '../../public/assets/images/general-dentistry-supernova-dental-bridgwater.webp';
import invisalignImage from '../../public/assets/images/invisalign-supernova-dental-bridgwater-somerset.webp';
import practiceExteriorImage from '../../public/assets/images/supernova-dental-practice-exterior-bridgwater.webp';
import receptionImage from '../../public/assets/images/supernova-dental-bridgwater-reception-new-patients.webp';

export const metadata: Metadata = {
  title: 'Private Dentist in Bridgwater, Somerset | Supernova Dental',
  description:
    'Discover private dental care at Supernova Dental in Bridgwater, Somerset, including general and cosmetic dentistry, Invisalign, dental implants and hygiene care.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Private Dentist in Bridgwater, Somerset | Supernova Dental',
    description:
      'Modern, personal private dental care in Bridgwater, including general and cosmetic dentistry, Invisalign, dental implants and hygiene care.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/assets/images/supernova-dental-practice-exterior-bridgwater.webp',
        width: 1824,
        height: 1216,
        alt: 'Supernova Dental practice in Bridgwater, Somerset',
      },
    ],
  },
};

const featuredServices = [
  {
    title: 'General dentistry',
    description: 'Examinations, preventive care and treatment to support your ongoing oral health.',
    href: '/general-dentistry',
    image: generalDentistryImage,
    alt: 'General dentistry at Supernova Dental',
  },
  {
    title: 'Cosmetic dentistry',
    description: 'Explore options for the appearance of your smile with a personal consultation.',
    href: '/cosmetic-dentistry',
    image: cosmeticDentistryImage,
    alt: 'Cosmetic dentistry consultation at Supernova Dental',
  },
  {
    title: 'Invisalign',
    description: 'Clear aligner treatment with a consultation to discuss your smile goals and suitability.',
    href: '/cosmetic-dentistry/invisalign',
    image: invisalignImage,
    alt: 'Invisalign clear aligners',
  },
  {
    title: 'Dental implants',
    description: 'Find out about implant options and the next steps for replacing missing teeth.',
    href: '/cosmetic-dentistry/dental-implants',
    image: dentalImplantsImage,
    alt: 'Dental implant consultation at Supernova Dental',
  },
];

const moreServices = [
  { title: 'Dental hygiene', href: '/general-dentistry/dental-hygiene' },
  { title: 'New patient examination', href: '/general-dentistry/new-patient-examination' },
  { title: 'Membership plans', href: '/general-dentistry/dental-membership-plans' },
  { title: 'Dental finance', href: '/general-dentistry/dental-finance' },
];

const reassuranceItems = [
  { number: '01', title: 'Personal care', description: 'Time to talk about what matters to you and ask questions.' },
  { number: '02', title: 'Clear conversations', description: 'Thoughtful explanations to help you understand your options.' },
  { number: '03', title: 'Easy to reach', description: 'A modern Bridgwater practice just off Junction 24 of the M5.' },
];

const patientSteps = [
  { number: '01', title: 'Choose your next step', description: 'Explore a service, make an enquiry or book an appointment online.' },
  { number: '02', title: 'Meet the team', description: 'Our team will assess your oral health and discuss any questions or concerns.' },
  { number: '03', title: 'Understand your options', description: 'Receive clear information about suitable next steps.' },
  { number: '04', title: 'Continue with confidence', description: 'Move forward with the care or treatment that is right for you.' },
];

const featuredReviewIds = [23, 18, 9];
const featuredReviews = googleReviewMockData.filter((review) => featuredReviewIds.includes(review.id));

export default function Home() {
  return (
    <main className='min-w-0 overflow-x-clip bg-porcelain text-obsidian'>
      <AuroraHero />

      <section aria-label='What to expect' className='border-b border-stone bg-ivory'>
        <div className='mx-auto grid max-w-7xl divide-y divide-stone px-6 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12'>
          {reassuranceItems.map((item) => (
            <div key={item.number} className='py-8 md:px-7 md:py-10 first:md:pl-0 last:md:pr-0'>
              <div className='flex gap-4'>
                <span className='pt-1 text-xs font-semibold tracking-[0.2em] text-bronze-ink' aria-hidden='true'>{item.number}</span>
                <div>
                  <h2 className='text-xl font-normal'>{item.title}</h2>
                  <p className='mt-2 text-sm leading-6 text-taupe'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28' aria-labelledby='services-heading'>
        <div className='flex flex-col gap-7 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Care shaped around you</p>
            <h2 id='services-heading' className='mt-4 text-balance text-4xl font-normal tracking-[-0.03em] sm:text-5xl'>Everyday care. Brighter possibilities.</h2>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-taupe'>From routine appointments to conversations about changing your smile, begin with the care that fits where you are today.</p>
          </div>
          <Link href='/pricing' className='group inline-flex min-h-11 items-center gap-2 self-start rounded-sm text-sm font-semibold text-bronze-ink underline decoration-champagne/50 underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light md:self-auto'>
            View treatment pricing <FiArrowRight className='transition-transform group-hover:translate-x-0.5' aria-hidden='true' />
          </Link>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2'>
          {featuredServices.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative isolate min-h-[25rem] overflow-hidden rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-4 ${index === 0 || index === 3 ? 'lg:min-h-[32rem]' : ''}`}
            >
              <Image src={service.image} alt={service.alt} fill sizes='(max-width: 768px) 100vw, 50vw' className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]' />
              <div className='absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent' aria-hidden='true' />
              <div className='absolute inset-x-0 bottom-0 z-10 p-7 text-ivory sm:p-9'>
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-champagne'>Explore treatment</p>
                <div className='mt-3 flex items-end justify-between gap-6'>
                  <div>
                    <h3 className='text-3xl font-normal'>{service.title}</h3>
                    <p className='mt-3 max-w-lg text-sm leading-6 text-ivory/70'>{service.description}</p>
                  </div>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/25 transition-colors group-hover:border-champagne group-hover:bg-champagne group-hover:text-obsidian' aria-hidden='true'><FiArrowRight /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-6 grid overflow-hidden rounded-[1.25rem] border border-stone bg-white sm:grid-cols-2 lg:grid-cols-4'>
          {moreServices.map((service) => (
            <Link key={service.href} href={service.href} className='group flex min-h-24 items-center justify-between gap-4 border-b border-stone px-5 py-5 transition-colors hover:bg-ivory focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-light sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0'>
              <span className='font-semibold'>{service.title}</span>
              <FiArrowRight className='shrink-0 text-bronze transition-transform group-hover:translate-x-0.5' aria-hidden='true' />
            </Link>
          ))}
        </div>
      </section>

      <section className='bg-ivory py-20 lg:py-28' aria-labelledby='practice-heading'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center lg:gap-20 lg:px-12'>
          <div className='relative min-h-[28rem] overflow-hidden rounded-[1.5rem] sm:min-h-[38rem]'>
            <Image src={receptionImage} alt='The reception area at Supernova Dental in Bridgwater' fill sizes='(max-width: 1024px) 100vw, 55vw' className='object-cover' />
            <div className='absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-obsidian/80 p-5 text-ivory backdrop-blur-sm sm:left-auto sm:max-w-xs' role='note'>
              <p className='text-sm leading-6'>A calm, modern setting designed to make arriving at the practice feel straightforward and welcoming.</p>
            </div>
          </div>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>The Supernova experience</p>
            <h2 id='practice-heading' className='mt-4 text-balance text-4xl font-normal tracking-[-0.03em] sm:text-5xl'>Care with clarity, warmth and room to breathe.</h2>
            <p className='mt-6 text-lg leading-8 text-taupe'>We believe a dental visit should begin with listening. Our team takes time to understand what has brought you to us, explain the available options and help you decide what comes next.</p>
            <ul className='mt-8 space-y-4 text-sm text-taupe'>
              {['A friendly team and personal welcome', 'Clear explanations and treatment conversations', 'A convenient location with reserved patient parking'].map((item) => (
                <li key={item} className='flex gap-3'><span className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-bronze-ink'><FiCheck aria-hidden='true' /></span>{item}</li>
              ))}
            </ul>
            <Link href='/practice' className='group mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-obsidian px-6 text-sm font-semibold text-ivory transition-colors hover:bg-deep-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-2'>
              Discover our practice <FiArrowRight className='transition-transform group-hover:translate-x-0.5' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden bg-obsidian py-20 text-ivory lg:py-28' aria-labelledby='journey-heading'>
        <div className='absolute inset-0 luxury-hero-glow' aria-hidden='true' />
        <div className='relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>Your next step</p>
            <h2 id='journey-heading' className='mt-4 text-balance text-4xl font-normal tracking-[-0.03em] sm:text-5xl'>A simple way forward.</h2>
            <p className='mt-5 text-lg leading-8 text-ivory/65'>You do not need to have everything worked out before contacting us. Start with a conversation.</p>
          </div>
          <ol className='mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-ivory/10 bg-ivory/10 md:grid-cols-2 lg:grid-cols-4'>
            {patientSteps.map((step) => (
              <li key={step.number} className='bg-obsidian/90 p-7 sm:p-8'>
                <span className='text-xs font-semibold tracking-[0.2em] text-champagne'>{step.number}</span>
                <h3 className='mt-8 text-2xl font-normal'>{step.title}</h3>
                <p className='mt-3 text-sm leading-6 text-ivory/60'>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28' aria-labelledby='reviews-heading'>
        <div className='grid gap-10 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Patient experiences</p>
            <h2 id='reviews-heading' className='mt-4 text-balance text-4xl font-normal tracking-[-0.03em] sm:text-5xl'>Kind words from our patients.</h2>
            <p className='mt-5 leading-7 text-taupe'>Read feedback shared by patients on Google.</p>
            <a href='https://g.co/kgs/qqvPcF1' target='_blank' rel='noopener noreferrer' className='group mt-7 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-bronze-ink underline decoration-champagne/50 underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'>
              View our Google profile <FiArrowRight className='transition-transform group-hover:translate-x-0.5' aria-hidden='true' />
            </a>
          </div>
          <div className='grid gap-5 md:grid-cols-3'>
            {featuredReviews.map((review) => (
              <figure key={review.id} className='flex min-h-72 flex-col rounded-[1.25rem] border border-stone bg-white p-6 shadow-[0_16px_45px_rgba(11,18,24,0.05)]'>
                <div className='text-sm tracking-[0.18em] text-gold-text-light' aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}</div>
                <blockquote className='mt-6 flex-1 text-pretty leading-7 text-taupe'>“{review.review}”</blockquote>
                <figcaption className='mt-7 border-t border-stone pt-4 text-sm font-semibold text-obsidian'>{review.name}<span className='block pt-1 text-xs font-normal text-taupe'>Google review</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-ivory py-20 lg:py-28' aria-labelledby='location-heading'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-20 lg:px-12'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Find Supernova Dental</p>
            <h2 id='location-heading' className='mt-4 text-balance text-4xl font-normal tracking-[-0.03em] sm:text-5xl'>Easy to reach. Easy to arrive.</h2>
            <p className='mt-5 text-lg leading-8 text-taupe'>Just off Junction 24 of the M5, with 10 clearly signposted reserved patient parking spaces directly opposite the building.</p>
            <address className='mt-8 not-italic text-sm leading-7 text-taupe'>{practiceLocation.addressLines.map((line) => <span key={line} className='block'>{line}</span>)}</address>
            <div className='mt-7 flex flex-wrap gap-3'>
              <Link href='/find-us' className='inline-flex min-h-12 items-center gap-2 rounded-full bg-obsidian px-6 text-sm font-semibold text-ivory transition-colors hover:bg-deep-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-2'><FiMapPin aria-hidden='true' />Plan your visit</Link>
              <a href={practiceLocation.directionsUrl} target='_blank' rel='noopener noreferrer' className='inline-flex min-h-12 items-center rounded-full border border-control-border bg-white px-6 text-sm font-semibold text-obsidian transition-colors hover:border-gold-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'>Get directions</a>
            </div>
            <div className='mt-8 border-t border-stone pt-6 text-sm text-taupe'>
              <div className='flex gap-3'><FiClock className='mt-1 shrink-0 text-bronze-ink' aria-hidden='true' /><div>{practiceLocation.openingHours.map((hours) => <p key={hours.day}>{hours.day}: {hours.hours}</p>)}</div></div>
            </div>
          </div>
          <div className='relative min-h-[28rem] overflow-hidden rounded-[1.5rem] sm:min-h-[36rem]'>
            <Image src={practiceExteriorImage} alt='Exterior of Supernova Dental at Huntworth Gate in Bridgwater' fill sizes='(max-width: 1024px) 100vw, 55vw' className='object-cover' />
          </div>
        </div>
      </section>

      <section className='bg-obsidian px-6 py-20 text-center text-ivory sm:px-8 lg:py-28' aria-labelledby='final-cta-heading'>
        <div className='mx-auto max-w-3xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>We&apos;re here to help</p>
          <h2 id='final-cta-heading' className='mt-4 text-balance text-4xl font-normal tracking-[-0.03em] sm:text-5xl'>Ready to speak with the team?</h2>
          <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-ivory/65'>Book online, send us an enquiry or contact the practice in the way that suits you.</p>
          <div className='mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap'>
            <Link href={DentallyPortal} target='_blank' rel='noopener noreferrer' className='inline-flex min-h-12 items-center justify-center rounded-full bg-champagne px-6 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory'>Book an appointment</Link>
            <Link href='/enquiry' className='inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/25 px-6 text-sm font-semibold text-ivory transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'>Make an enquiry</Link>
          </div>
          <div className='mt-8 flex flex-col items-center justify-center gap-4 text-sm text-ivory/65 sm:flex-row sm:gap-6'>
            <a href={practiceLocation.phoneHref} className='inline-flex min-h-11 items-center gap-2 rounded-sm hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'><FiPhone aria-hidden='true' />{practiceLocation.phone}</a>
            <a href={practiceLocation.whatsappHref} className='inline-flex min-h-11 items-center gap-2 rounded-sm hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'><FiMessageCircle aria-hidden='true' />WhatsApp {practiceLocation.whatsapp}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
