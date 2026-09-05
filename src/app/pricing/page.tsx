import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { type Metadata } from 'next';
import MakeEnquirySection from './utils/MakeEnquirySection';
import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';

export const metadata: Metadata = {
  title: 'Dental Treatments Pricing in Bridgwater | Supernova Dental',
  description:
    'Explore dental treatment prices at Supernova Dental in Bridgwater, Somerset. See costs for Invisalign, implants, consultations and personalised treatment plans.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Dental Treatment Prices in Bridgwater | Supernova Dental',
    description:
      'Explore dental treatment prices at Supernova Dental in Bridgwater, including consultations, Invisalign and implant treatment options.',
    url: '/pricing',
    siteName: 'Supernova Dental',
    type: 'website',
  },
  keywords:
    'Invisalign pricing Bridgwater, cost of bridgwater dental implants, dental implants pricing Bridgwater, affordable dental care Somerset, clear aligners Somerset, dental consultation Bridgwater, dental implant costs, orthodontics Somerset, teeth straightening Bridgwater, dentist pricing Bridgwater, Supernova Dental pricing, implants Bridgwater, cosmetic dentistry Somerset, dental treatments Bridgwater, emergency dental care Somerset',
};

export default function Pricing() {
  return (
    <main className='mt-12 min-w-0 overflow-x-clip bg-porcelain text-obsidian'>
      <section className='relative overflow-hidden bg-obsidian text-ivory'>
        <div className='absolute inset-0 luxury-hero-glow' aria-hidden='true' />
        <div className='relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-20'>
          <BreadCrumb tone='dark' />
          <div className='mt-14 max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-gold-text-dark'>Supernova Dental</p>
            <h1 className='mt-4 text-balance text-5xl font-normal tracking-[-0.035em] sm:text-6xl'>Price guide</h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-ivory/75'>
              Explore treatment categories and compare the prices relevant to you. Prices are subject to change and offers may be time-limited.
            </p>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24' aria-label='Treatment prices'>
        <PricingAccordion pricingItems={pricingItems} />
        <MakeEnquirySection />
      </section>
    </main>
  );
}
