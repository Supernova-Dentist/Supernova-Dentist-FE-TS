import AboutSection from '@/components/AboutSection/AboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import { Journey } from '@/components/Journey/Journey';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import FindUsSection from '@/components/FindUsSection/FindUsSection';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';

export const metadata = {
  title: 'Supernova Dental - Luxury Private Dental Care in Bridgwater',
  description:
    "Supernova Dental is a luxury private dental practice in Bridgwater, welcoming new patients. Experience exceptional dental care tailored to your needs.",
  keywords:
    'luxury dental care, private dentist Bridgwater, Invisalign Bridgwater, teeth whitening, emergency dentist Bridgwater, dental implants, cosmetic dentistry, new patients',
  openGraph: {
    title: 'Supernova Dental - Luxury Private Dental Care in Bridgwater',
    description:
      'Supernova Dental offers premium private dental care in Bridgwater. We are currently welcoming new patients. Book your free Invisalign and Implant consultations today!',
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
    </main>
  );
}
