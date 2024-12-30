import AccessibilityWidget from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';
import dynamic from 'next/dynamic';
import AboutSection from '@/components/AboutSection/AboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Reviews from '@/components/blocks/Reviews/Review';
import Welcome from '@/components/blocks/Welcome/Welcome';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import Steps from '@/components/blocks/Steps/Steps';
import Pricing from './(about)/pricing/page';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { Journey } from '@/components/Journey/Journey';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import FindUs from '@/components/FindUs/FindUs';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import MeetTeamSection from '@/components/MeetTeamSection/MeetTeamSection';

const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), {
  ssr: false,
});

export const metadata = {
  title: 'Supernova Dental - 50% Off Your First Exam & Hygiene Appointment in Bridgwater',
  description:
    "Take advantage of Supernova Dental's 50% off offer on your first exam and hygiene appointment in Bridgwater. Book now and start your journey to a healthier smile!",
  keywords:
    'dental exam offer, dental hygiene offer, Invisalign, Bridgwater dentist, teeth whitening, healthy smile, dentist promotions',
  openGraph: {
    title: 'Supernova Dental - Exclusive Offers for New Patients',
    description:
      'Join Supernova Dental in Bridgwater with exclusive offers: 50% off your first dental exam and hygiene appointment. Book today!',
    url: 'https://www.supernovadental.co.uk',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 500,
        height: 500,
        alt: 'Supernova Dental Logo',
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Welcome />
      <PromotionForm />
      <AccessibilityWidget />
      <AboutSection />
      <MeetTeamSection />
      <SmileTransformations />
      <GoogleReviews />
      <Journey />
      <VideoAnimationSection />
      <FindUs />
      <PromotionFAQ />
    </main>
  );
}
