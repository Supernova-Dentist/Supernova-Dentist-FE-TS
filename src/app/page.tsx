import AboutSection from '@/components/AboutSection/AboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import FindUsSection from '@/components/FindUsSection/FindUsSection';
import { Journey } from '@/components/Journey/Journey';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';

export const metadata = {
  title: 'Supernova Dental - Private Dentist in Bridgwater | Invisalign & Implants',
  description:
    'Looking for a dentist in Bridgwater? Supernova Dental offers private dental care, including Invisalign, dental implants, and emergency appointments. Now welcoming new patients.',
  keywords:
    'dentist in Bridgwater, Bridgwater dentist, private dentist Bridgwater, Invisalign Bridgwater, dental implants Bridgwater, emergency dentist Bridgwater, dental hygiene appointment, teeth whitening, cosmetic dentistry, new patients',
  openGraph: {
    title: 'Supernova Dental - Private Dentist in Bridgwater | Invisalign & Implants',
    description:
      'Supernova Dental is a trusted private dentist in Bridgwater, offering high-quality dental care, Invisalign, dental implants, and emergency appointments. Book today!',
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
      {/* <Pricing /> */}
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
