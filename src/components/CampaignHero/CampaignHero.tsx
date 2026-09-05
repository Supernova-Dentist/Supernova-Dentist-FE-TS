import { ScrollToPromotionFormButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormButton';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDown, FiMapPin } from 'react-icons/fi';

type CampaignHeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  details: string;
};

export default function CampaignHero({ eyebrow, title, highlightedTitle, description, details }: CampaignHeroProps) {
  return (
    <section aria-labelledby='campaign-hero-title' className='relative isolate overflow-hidden bg-obsidian text-ivory'>
      <div className='absolute inset-0 luxury-hero-glow' aria-hidden='true' />
      <div
        className='absolute -right-52 -top-44 h-[34rem] w-[34rem] rounded-full border border-champagne/15 bg-champagne/[0.025] shadow-[0_0_130px_rgba(198,161,91,0.1)]'
        aria-hidden='true'
      />

      <div className='relative mx-auto grid min-h-[36rem] max-w-7xl gap-12 px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:px-12 lg:pb-28 lg:pt-40'>
        <div className='max-w-4xl'>
          <div className='mb-7 flex items-center gap-3'>
            <Image
              src='/assets/images/logo.png'
              alt=''
              width={52}
              height={52}
              priority
              className='h-12 w-12 rounded-full bg-white object-contain p-1'
            />
            <p className='text-lg font-semibold leading-tight text-ivory'>
              Supernova Dental
              <span className='mt-1 block text-xs font-semibold uppercase tracking-[0.22em] text-gold-text-dark'>
                Bridgwater
              </span>
            </p>
          </div>
          <p className='hidden' aria-hidden='true'>
            <span className='h-px w-10 bg-champagne/70' aria-hidden='true' />
            Supernova Dental <span aria-hidden='true'>·</span> Bridgwater
          </p>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ivory/60'>{eyebrow}</p>
          <h1
            id='campaign-hero-title'
            className='max-w-4xl text-balance text-5xl font-normal leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5rem]'
          >
            {title}
            <span className='block bg-gradient-to-r from-ivory via-[#f3dfb2] to-champagne bg-clip-text text-transparent'>
              {highlightedTitle}
            </span>
          </h1>
          <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/72 sm:text-xl'>{description}</p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
            <ScrollToPromotionFormButton
              type='button'

              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-champagne px-6 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
            >
              Start your enquiry
              <FiArrowDown aria-hidden='true' />
            </ScrollToPromotionFormButton>
            <Link
              href='/find-us'
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/30 bg-ivory/[0.04] px-6 text-sm font-semibold text-ivory transition-colors hover:border-gold-text-dark hover:text-gold-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'
            >
              <FiMapPin aria-hidden='true' />
              Find the practice
            </Link>
          </div>
        </div>

        <aside
          className='border-l border-ivory/15 pl-6 lg:max-w-sm lg:justify-self-end lg:pl-8'
          aria-label='Enquiry information'
        >
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-text-dark'>A calm first step</p>
          <p className='mt-4 text-pretty text-xl leading-8 text-ivory/85'>{details}</p>
          <p className='mt-5 text-sm leading-7 text-ivory/60'>
            Share your details below and the practice team will contact you about the appropriate next step.
          </p>
        </aside>
      </div>
    </section>
  );
}
