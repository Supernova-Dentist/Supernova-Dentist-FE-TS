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
  title: 'Supernova Dental - Free Invisalign & Implant Consultations in Bridgwater',
  description:
    'Supernova Dental is a luxury private dental practice in Bridgwater, offering free Invisalign and implant consultations, emergency appointments, hygiene appointments, and practice plans. Now welcoming new patients.',
  keywords:
    'free Invisalign consultation, Bridgwater Invisalign, free implant consultation, private dentist Bridgwater, emergency dentist Bridgwater, Bridgwater dentist, dental hygiene appointment, practice plans, teeth whitening, cosmetic dentistry, dental implants, new patients',
  openGraph: {
    title: 'Supernova Dental - Free Invisalign & Implant Consultations in Bridgwater',
    description:
      'Supernova Dental offers luxury private dental care in Bridgwater, including free Invisalign and implant consultations, emergency appointments, and practice plans. Book your appointment today!',
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
