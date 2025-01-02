import dynamic from 'next/dynamic';
// import Services from '@/components/Services/Services';
// import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
// import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
// import Reviews from '@/components/blocks/Reviews/Review';
// import Steps from '@/components/blocks/Steps/Steps';
import AboutSection from '@/components/AboutSection/AboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import FindUs from '@/components/FindUs/FindUs';
import InstagramSection from '@/components/InstagramSection/InstagramSection';
import { Journey } from '@/components/Journey/Journey';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import FindUsSection from '@/components/FindUsSection/FindUsSection';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';

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
        url: '/favicon.ico',
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
      <AboutSection />
      <Pricing />
      <DentallyTutorial />
      <SmileTransformations />
      <GoogleReviews />
      <Journey />
      <VideoAnimationSection />
      <FindUsSection />
      <PromotionFAQ />
      <ComingSoonSection />

      {/* <Reviews /> */}
      {/* <Services />
      <Steps />
      <GalleryCarousel />
      <GoogleMap /> */}
    </main>
  );
}
