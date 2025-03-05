import { type Metadata } from 'next';
import PageHero from '@/components/blocks/PageHero/PageHero';
import Button from '@/components/Button/Button';
import { DisappearingFeatures } from '@/components/DisappearingScrollFeatures/DisappearingScrollFeatures';
import { FloatingPhone } from '@/components/FloatingPhone/FloatingPhone';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SteppedProgress from '@/components/SteppedProgress/SteppedProgress';
import { StickyCards } from '@/components/StickyCards/StickyCards';
import { FeaturesSectionDemo } from '@/components/ui/bento-grid';
import Link from 'next/link';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import { AboutPractice } from '@/components/AboutPractice/AboutPractice';
import ServiceForm from '@/components/ServiceForm/ServiceForm';

export const metadata: Metadata = {
  title: 'Supernova Dental | Your Patient Journey',
  description:
    'Visit Supernova Dental in Bridgwater for top-tier dental care with state-of-the-art technology. We prioritise your oral health and well-being every step of your patient journey.',
  keywords:
    'dentist in Bridgwater, emergency dentist Bridgwater, Supernova Dental, invisalign bridgwater, invisalign, cosmetic dentistry, dental care Bridgwater, emergency dental care, oral health, teeth whitening Bridgwater, dental practice Bridgwater',
};

export default function OurPractice() {
  return (
    <div className='flex flex-col'>
      {/* <PageHero
        bgImage='bg-blog'
        title='Welcome to Supernova Dental'
        description='Exceptional dental care in a modern, welcoming environment.'
      /> */}
      <div className='mt-4'>
        <ServiceForm
          serviceName='Practice Plan'
          serviceChip='Join Our Practice Plan'
          serviceDescription='Enjoy affordable, ongoing dental care with our Practice Plan, designed to keep your oral health in top condition.'
          formTitle='Sign Up for Our Practice Plan'
          formDescription='Join our Practice Plan from £5.99/month for children or £24.99/month for adults (16+). Enjoy routine check-ups, hygiene visits, emergency cover, and more. Sign up today for expert dental care and peace of mind.'
        />
      </div>

      {/* About Section */}
      <section>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <FeaturesSectionDemo />
          <AboutPractice />
        </div>
      </section>

      {/* Features Section */}

      <DisappearingFeatures />

      {/* Online Booking Walkthrough Section */}

      <DentallyTutorial />

      <StickyCards />
    </div>
  );
}
