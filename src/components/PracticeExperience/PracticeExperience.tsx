import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { ScrollToPromotionFormButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormButton';
import { practiceLocation } from '@/lib/practiceLocation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiMapPin } from 'react-icons/fi';

const facilities = [
  {
    title: 'Comfortable treatment rooms',
    description: 'A considered environment designed to help you feel at ease during your visit.',
  },
  {
    title: 'Modern dental technology',
    description: 'Contemporary equipment supports clear explanations and careful treatment planning.',
  },
  {
    title: 'Accessible facilities',
    description: 'Accessible toilet facilities are available for patients and visitors.',
  },
  {
    title: 'Reserved parking',
    description: '10 clearly signposted reserved patient parking spaces are available directly opposite the building.',
  },
  {
    title: 'Free Wi-Fi',
    description: 'Stay connected while you wait with complimentary Wi-Fi in the practice.',
  },
];

export default function PracticeExperience() {
  return (
    <main className='bg-porcelain text-obsidian mt-20'>
      <section className='relative isolate overflow-hidden bg-obsidian text-ivory'>
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <div className='mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 md:pb-24 md:pt-10 lg:px-8'>
          <BreadCrumb tone='dark' />
          <div className='grid gap-12 pt-14 md:pt-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.75fr)] lg:items-center lg:gap-20'>
            <div>
              <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>
                The Supernova experience
              </p>
              <div aria-hidden='true' className='mb-7 flex items-center gap-3'>
                <span className='h-px w-12 bg-champagne' />
                <span className='size-1.5 rotate-45 bg-champagne' />
              </div>
              <h1 className='max-w-3xl text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl'>
                A calmer way to visit the dentist.
              </h1>
              <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/80 sm:text-xl'>
                Supernova Dental is a modern private dental practice in Bridgwater, created to make every part of your
                visit feel clear, welcoming and considered.
              </p>
              <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
                <ScrollToPromotionFormButton
                  className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-semibold text-obsidian shadow-[0_12px_30px_rgba(198,161,91,0.18)] transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
                >
                  Book a complimentary practice tour
                  <FiArrowRight aria-hidden='true' className='ml-2 size-4' />
                </ScrollToPromotionFormButton>
                <Link
                  href='/find-us'
                  className='inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-champagne/70 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
                >
                  Find the practice
                </Link>
              </div>
              <p className='mt-7 flex items-start gap-2 text-sm text-ivory/60'>
                <FiMapPin aria-hidden='true' className='mt-0.5 size-4 shrink-0 text-champagne' />
                Supernova Building, Marsh Lane, Huntworth Gate, Bridgwater, Somerset TA6 6LQ
              </p>
            </div>
            <div className='relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-champagne/30 bg-deep-navy shadow-[0_30px_80px_rgba(0,0,0,0.3)]'>
              <Image
                src='/assets/images/outerBuildingPreview.jpg'
                alt='Exterior of Supernova Dental in Bridgwater'
                fill
                priority
                sizes='(max-width: 1024px) 100vw, 45vw'
                className='object-cover'
              />
              <div
                aria-hidden='true'
                className='absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent'
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby='practice-welcome-heading' className='bg-ivory px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(18rem,1fr)] md:gap-20'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>What to expect</p>
            <h2 id='practice-welcome-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              A welcoming environment, with everything clearly explained.
            </h2>
          </div>
          <div className='space-y-5 text-pretty text-lg leading-8 text-taupe'>
            <p>
              From the moment you arrive, our team is here to help you understand what happens next and feel comfortable
              asking questions.
            </p>
            <p>
              Take your time exploring the practice, meet the team and see the spaces available to you before deciding
              on your next step.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby='practice-facilities-heading'
        className='bg-porcelain px-4 py-20 sm:px-6 md:py-28 lg:px-8'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 max-w-2xl'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>
              Inside the practice
            </p>
            <h2 id='practice-facilities-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              Thoughtful details for a more comfortable visit.
            </h2>
          </div>
          <div className='grid gap-x-8 gap-y-0 border-y border-stone sm:grid-cols-2 lg:grid-cols-3'>
            {facilities.map((facility) => (
              <article key={facility.title} className='border-b border-stone py-7 last:border-b-0'>
                <div className='flex gap-4'>
                  <span className='mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-champagne/60 text-bronze-ink'>
                    <FiCheck aria-hidden='true' className='size-4' />
                  </span>
                  <div>
                    <h3 className='text-2xl leading-tight'>{facility.title}</h3>
                    <p className='mt-3 leading-7 text-taupe'>{facility.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby='practice-gallery-heading' className='bg-ivory px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>A look inside</p>
              <h2 id='practice-gallery-heading' className='text-4xl leading-tight sm:text-5xl'>
                See the spaces before you arrive.
              </h2>
            </div>
            <p className='max-w-md leading-7 text-taupe sm:text-right'>
              Explore a few of the spaces and technology that make up the Supernova Dental experience.
            </p>
          </div>
          <div className='grid gap-5 md:grid-cols-[1.2fr_0.8fr]'>
            <div className='relative min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-stone md:min-h-[34rem]'>
              <Image
                src='/assets/images/supernova-dental-bridgwater-reception-new-patients.webp'
                alt='Reception area at Supernova Dental'
                fill
                sizes='(max-width: 768px) 100vw, 60vw'
                className='object-cover'
              />
            </div>
            <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-1'>
              <div className='relative min-h-[16rem] overflow-hidden rounded-[1.5rem] bg-stone'>
                <Image
                  src='/assets/images/sunlight_suite_supernova_dental_bridgwater.webp'
                  alt='Treatment room at Supernova Dental'
                  fill
                  sizes='(max-width: 768px) 100vw, 35vw'
                  className='object-cover'
                />
              </div>
              <div className='relative min-h-[16rem] overflow-hidden rounded-[1.5rem] bg-stone'>
                <Image
                  src='/assets/images/root-canal-restoration.webp'
                  alt='CBCT imaging equipment at Supernova Dental'
                  fill
                  sizes='(max-width: 768px) 100vw, 35vw'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby='practice-contact-heading'
        className='bg-deep-navy px-4 py-20 text-ivory sm:px-6 md:py-24 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] md:items-end md:gap-20'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>
              Visit us in Bridgwater
            </p>
            <h2 id='practice-contact-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              A practice that is easy to reach and easy to talk to.
            </h2>
            <p className='mt-5 max-w-2xl leading-8 text-ivory/70'>
              We are just off Junction 24 of the M5, with reserved patient parking directly opposite the building.
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/find-us'
                className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy'
              >
                Find the practice <FiArrowRight aria-hidden='true' className='ml-2 size-4' />
              </Link>
              <Link
                href='/enquiry'
                className='inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-champagne/70 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy'
              >
                Make an enquiry
              </Link>
            </div>
          </div>
          <div className='border-t border-white/15 pt-7 text-sm leading-7 text-ivory/70 md:border-l md:border-t-0 md:pl-8 md:pt-0'>
            <p className='font-semibold text-ivory'>{practiceLocation.address}</p>
            <p className='mt-4'>
              <a className='underline decoration-champagne/70 underline-offset-4' href={practiceLocation.phoneHref}>
                {practiceLocation.phone}
              </a>
            </p>
            <p>
              <a
                className='underline decoration-champagne/70 underline-offset-4'
                href={`mailto:${practiceLocation.email}`}
              >
                {practiceLocation.email}
              </a>
            </p>
            <p className='mt-4'>
              Monday-Friday: 08:15-18:15
              <br />
              Saturday: 09:00-13:00
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
