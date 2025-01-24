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

export const metadata: Metadata = {
  title: 'Supernova Dental | Our Practice',
  description:
    'Discover the welcoming environment of Supernova Dental. Learn about our exceptional dental care, state-of-the-art technology and services that prioritise your oral health.',
};

export default function OurPractice() {
  return (
    <div className='flex flex-col'>
      {/* <PageHero
        bgImage='bg-blog'
        title='Welcome to Supernova Dental'
        description='Exceptional dental care in a modern, welcoming environment.'
      /> */}
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

      <PromotionForm />
    </div>
  );
}
