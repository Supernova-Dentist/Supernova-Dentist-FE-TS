import { ScrollToPromotionFormButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormButton';

import Link from 'next/link';
import { FiArrowDown, FiMapPin } from 'react-icons/fi';
import AuroraStars from '../blocks/AuroraHero/AuroraStars';
import auroraStyles from '../blocks/AuroraHero/AuroraHero.module.css';

type CampaignHeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  details: string;
};

export default function CampaignHero({ eyebrow, title, highlightedTitle, description, details }: CampaignHeroProps) {
  return (
    <section
      aria-labelledby='campaign-hero-title'
      className='relative isolate min-w-0 overflow-hidden bg-obsidian text-ivory'
    >
      <div className={auroraStyles.backdrop} aria-hidden='true' />
      <div className={auroraStyles.noise} aria-hidden='true' />
      <div className={auroraStyles.stars} aria-hidden='true'>
        <AuroraStars />
      </div>

      <div className='relative z-[3] mx-auto grid min-h-[36rem] max-w-7xl gap-12 px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:px-12 lg:pb-28 lg:pt-40'>
        <div className='min-w-0 max-w-4xl'>
          <p className='mb-7 flex flex-col gap-1 text-sm font-semibold uppercase tracking-[0.18em] text-ivory'>
            <span>Supernova Dental</span>
            <span className='text-gold-text-dark'>Bridgwater</span>
          </p>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ivory/60'>{eyebrow}</p>
          <h1
            id='campaign-hero-title'
            className='max-w-4xl text-balance text-[clamp(2.65rem,11vw,4.5rem)] font-normal leading-[1.04] tracking-[-0.04em] sm:text-[clamp(3.75rem,8vw,4.75rem)] sm:leading-[1.02] xl:text-[5rem]'
          >
            <span className='block'>{title}</span>
            <span className='mt-[0.08em] block bg-gradient-to-r from-ivory via-[#f3dfb2] to-champagne bg-clip-text pb-[0.08em] text-transparent'>
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
