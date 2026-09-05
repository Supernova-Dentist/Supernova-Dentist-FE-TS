import { ScrollToPromotionFormButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormButton';

import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { EditorialDivider } from '@/components/TeamExperience/LuxuryPrimitives';
import { FiArrowRight, FiMessageCircle, FiPhone } from 'react-icons/fi';

const emergencyReasons = [
  'Same-day appointments',
  'Toothache relief',
  'Broken teeth',
  'Filling repairs',
  'Saturday visits',
];

const actionClassName =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian';

const AuroraHero = () => {
  return (
    <section className='relative isolate overflow-hidden bg-obsidian px-4 pb-16 pt-6 text-ivory sm:px-6 md:pb-24 lg:px-8'>
      <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
      <div className='mx-auto max-w-7xl'>
        <BreadCrumb tone='dark' />
        <div className='grid gap-12 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.52fr)] lg:items-end'>
          <div className='max-w-3xl'>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>
              Emergency dentistry in Bridgwater
            </p>
            <EditorialDivider light className='mb-7' />
            <h1 className='text-balance text-4xl leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl'>
              Urgent dental care, with a calm and clear next step.
            </h1>
            <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/75'>
              Contact Supernova Dental for emergency care, toothache relief, broken teeth and filling repairs.
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <a
                href='tel:01278228665'
                className={`${actionClassName} border-champagne bg-champagne text-obsidian hover:bg-lightGold`}
              >
                <FiPhone aria-hidden='true' />
                Call
              </a>
              <a
                href='https://wa.me/447863338815'
                target='_blank'
                rel='noopener noreferrer'
                className={`${actionClassName} border-white/25 text-ivory hover:border-champagne/70 hover:bg-white/[0.06]`}
              >
                <FiMessageCircle aria-hidden='true' />
                WhatsApp
              </a>
              <ScrollToPromotionFormButton
                type='button'

                className={`${actionClassName} border-white/25 text-ivory hover:border-champagne/70 hover:bg-white/[0.06]`}
              >
                Book online
                <FiArrowRight aria-hidden='true' />
              </ScrollToPromotionFormButton>
            </div>
          </div>

          <div className='border-l border-champagne/35 pl-6'>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-champagne'>We can help with</p>
            <ul className='space-y-3 text-lg text-ivory/80'>
              {emergencyReasons.map((reason) => (
                <li key={reason} className='flex items-center gap-3'>
                  <span aria-hidden='true' className='size-1.5 rotate-45 bg-champagne' />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuroraHero;
