'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiGift, FiShare2, FiUsers } from 'react-icons/fi';
import ReferAFriendForm from './ReferAFriendForm/ReferAFriendForm';

const steps = [
  {
    icon: FiShare2,
    title: 'Share your referral',
    description: 'Use the form to share your details or create a link for a friend who is considering Invisalign.',
  },
  {
    icon: FiUsers,
    title: 'Your friend registers',
    description:
      'They can send their details to the team and begin a conversation about Invisalign at Supernova Dental.',
  },
  {
    icon: FiGift,
    title: 'Both receive a reward',
    description: 'You receive a £50 voucher and your friend receives £50 off their Invisalign treatment.',
  },
];

export const ReferAFriendContent = () => {
  return (
    <main className='mt-20 bg-porcelain text-obsidian'>
      <section className='relative isolate overflow-hidden bg-obsidian text-ivory'>
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <div className='mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-6 sm:px-6 md:pb-24 md:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.75fr)] lg:items-center lg:gap-20 lg:px-8'>
          <div>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>
              Invisalign referral scheme
            </p>
            <div aria-hidden='true' className='mb-7 flex items-center gap-3'>
              <span className='h-px w-12 bg-champagne' />
              <span className='size-1.5 rotate-45 bg-champagne' />
            </div>
            <h1 className='max-w-3xl text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl'>
              Share a smile. Give a friend a reason to start Invisalign.
            </h1>
            <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/80 sm:text-xl'>
              If you are a Supernova Dental patient, refer a friend who is considering Invisalign. You will receive a
              £50 voucher, and they will receive £50 off their Invisalign treatment.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='#refer-a-friend-form'
                className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-semibold text-obsidian shadow-[0_12px_30px_rgba(198,161,91,0.18)] transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
              >
                Refer a friend <FiArrowRight aria-hidden='true' className='ml-2 size-4' />
              </Link>
              <Link
                href='/cosmetic-dentistry/invisalign'
                className='inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-champagne/70 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
              >
                Explore Invisalign
              </Link>
            </div>
            <p className='mt-7 max-w-xl text-sm leading-6 text-ivory/60'>
              This referral scheme is specifically for Invisalign. The practice team will confirm eligibility and next
              steps with you and your friend.
            </p>
          </div>
          <div className='relative aspect-[6/5] overflow-hidden rounded-[1.75rem] border border-champagne/30 bg-deep-navy shadow-[0_30px_80px_rgba(0,0,0,0.3)]'>
            <Image
              src='/assets/images/scott_jackie_invisalign.jpeg'
              alt='Supernova Dental team member with an Invisalign patient'
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

      <section aria-labelledby='referral-steps-heading' className='bg-ivory px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 grid gap-6 md:grid-cols-[minmax(0,0.7fr)_minmax(18rem,1fr)] md:items-end md:gap-20'>
            <div>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>How it works</p>
              <h2 id='referral-steps-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
                A simple referral, centred on the right next step.
              </h2>
            </div>
            <p className='text-pretty text-lg leading-8 text-taupe'>
              Refer someone who is genuinely interested in Invisalign, and we will help them understand whether a
              consultation is the appropriate next step.
            </p>
          </div>
          <div className='grid gap-x-8 gap-y-0 border-y border-stone md:grid-cols-3'>
            {steps.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className='border-b border-stone py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0'
              >
                <span className='mb-6 flex size-11 items-center justify-center rounded-full border border-champagne/60 text-bronze-ink'>
                  <Icon aria-hidden='true' className='size-5' />
                </span>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-bronze-ink'>Step {index + 1}</p>
                <h3 className='mt-3 text-2xl leading-tight'>{title}</h3>
                <p className='mt-3 leading-7 text-taupe'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby='referral-reward-heading' className='bg-porcelain px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:items-center lg:gap-20'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>
              The referral reward
            </p>
            <h2 id='referral-reward-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              A thank you for sharing Supernova Dental.
            </h2>
            <ul className='mt-8 space-y-4 text-lg leading-7 text-taupe'>
              <li className='flex gap-3'>
                <FiCheck aria-hidden='true' className='mt-1 size-5 shrink-0 text-bronze-ink' />
                <span>£50 voucher for the referring Supernova Dental patient.</span>
              </li>
              <li className='flex gap-3'>
                <FiCheck aria-hidden='true' className='mt-1 size-5 shrink-0 text-bronze-ink' />
                <span>£50 off Invisalign treatment for the friend being referred.</span>
              </li>
              <li className='flex gap-3'>
                <FiCheck aria-hidden='true' className='mt-1 size-5 shrink-0 text-bronze-ink' />
                <span>One clear route for an Invisalign enquiry, rather than a general dental referral.</span>
              </li>
            </ul>
          </div>
          <aside className='rounded-[1.5rem] border border-champagne/30 bg-deep-navy p-8 text-ivory shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:p-10'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>Before you refer</p>
            <p className='mt-5 text-3xl leading-tight'>Your friend should be interested in Invisalign.</p>
            <p className='mt-5 leading-7 text-ivory/70'>
              We will contact them to discuss their enquiry and confirm the referral details. Invisalign suitability is
              assessed individually at consultation.
            </p>
            <Link
              href='/cosmetic-dentistry/invisalign'
              className='mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-champagne underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'
            >
              Read about Invisalign <FiArrowRight aria-hidden='true' className='ml-2 size-4' />
            </Link>
          </aside>
        </div>
      </section>

      <section
        id='refer-a-friend-form'
        aria-labelledby='refer-a-friend-form-heading'
        className='scroll-mt-24 bg-ivory px-4 py-20 sm:px-6 md:py-28 lg:px-8'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 max-w-2xl'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Refer a friend</p>
            <h2 id='refer-a-friend-form-heading' className='text-balance text-4xl leading-tight sm:text-5xl'>
              Start an Invisalign referral.
            </h2>
          </div>
          <ReferAFriendForm
            serviceName='Invisalign referral'
            serviceChip='Invisalign referral scheme'
            serviceDescription='Share the details of a friend who is considering Invisalign, or create a referral link for them to use.'
            imgSrc='/assets/images/Invisalign_Smile_View.jpg'
            formTitle='Refer a friend for Invisalign'
            formDescription='Enter your friend’s details and the team will contact them about their Invisalign enquiry.'
          />
        </div>
      </section>
    </main>
  );
};
