import { ReferralOutlineCards } from '@/components/OutlineCards/ReferralOutlineCards';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Dental Referral Form | Bridgwater Dentist | Supernova Dental',
  description:
    'Refer patients to Supernova Dental in Bridgwater for implants, oral surgery, CBCT/OPG imaging and Invisalign with a clear referral process.',
  alternates: { canonical: '/professional-referrals' },
};

export default function ReferralForm() {
  return (
    <main className='mt-20 bg-porcelain text-obsidian'>
      <section className='relative isolate overflow-hidden bg-obsidian text-ivory'>
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <div className='mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-6 sm:px-6 md:pb-24 md:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.75fr)] lg:items-center lg:gap-20 lg:px-8'>
          <div>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>
              For dental professionals
            </p>
            <div aria-hidden='true' className='mb-7 flex items-center gap-3'>
              <span className='h-px w-12 bg-champagne' />
              <span className='size-1.5 rotate-45 bg-champagne' />
            </div>
            <h1 className='max-w-3xl text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl'>
              Professional referrals, made clear.
            </h1>
            <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/80 sm:text-xl'>
              Select the relevant service to send a referral to Supernova Dental in Bridgwater. Each service has its own
              form, so you can provide the information the team needs.
            </p>
            <Link
              href='#referral-services'
              className='mt-9 inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-semibold text-obsidian shadow-[0_12px_30px_rgba(198,161,91,0.18)] transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
            >
              Choose a referral service <FiArrowRight aria-hidden='true' className='ml-2 size-4' />
            </Link>
          </div>
          <div className='relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-champagne/30 bg-deep-navy shadow-[0_30px_80px_rgba(0,0,0,0.3)]'>
            <Image
              src='/assets/images/supernova_team.jpg'
              alt='The Supernova Dental team'
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
        id='referral-services'
        aria-labelledby='referral-services-heading'
        className='scroll-mt-24 bg-ivory px-4 py-20 sm:px-6 md:py-28 lg:px-8'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 grid gap-6 md:grid-cols-[minmax(0,0.7fr)_minmax(18rem,1fr)] md:items-end md:gap-20'>
            <div>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>
                Referral services
              </p>
              <h2 id='referral-services-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
                Choose the right route for your patient.
              </h2>
            </div>
            <p className='text-pretty text-lg leading-8 text-taupe'>
              Use the dedicated form for Invisalign, dental implants, oral surgery or CBCT / OPG imaging.
            </p>
          </div>
          <ReferralOutlineCards />
        </div>
      </section>

      <section aria-labelledby='referral-process-heading' className='bg-porcelain px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:items-center lg:gap-20'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>What to expect</p>
            <h2 id='referral-process-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              A dedicated form for each referral type.
            </h2>
          </div>
          <ul className='space-y-4 text-lg leading-7 text-taupe'>
            <li className='flex gap-3'>
              <FiCheck aria-hidden='true' className='mt-1 size-5 shrink-0 text-bronze-ink' />
              <span>Select the service most relevant to the referral.</span>
            </li>
            <li className='flex gap-3'>
              <FiCheck aria-hidden='true' className='mt-1 size-5 shrink-0 text-bronze-ink' />
              <span>Complete the information requested in that service’s form.</span>
            </li>
            <li className='flex gap-3'>
              <FiCheck aria-hidden='true' className='mt-1 size-5 shrink-0 text-bronze-ink' />
              <span>The Supernova Dental team will review the referral and follow up as appropriate.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
