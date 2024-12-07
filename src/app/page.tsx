import AccessibilityWidget from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';
import dynamic from 'next/dynamic';
// import Services from '@/components/Services/Services';
// import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
// import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
// import Reviews from '@/components/blocks/Reviews/Review';
// import Steps from '@/components/blocks/Steps/Steps';
import AboutSection from '@/components/AboutSection/AboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Reviews from '@/components/blocks/Reviews/Review';
import Welcome from '@/components/blocks/Welcome/Welcome';
import IntroHome from '@/components/IntroHome/IntroHome';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import Steps from '@/components/blocks/Steps/Steps';
import Pricing from './(about)/pricing/page';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { Journey } from '@/components/Journey/Journey';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import FindUs from '@/components/FindUs/FindUs';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import InstagramSection from '@/components/InstagramSection/InstagramSection';
import MeetTeamSection from '@/components/MeetTeamSection/MeetTeamSection';

const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Welcome />
      <PromotionForm />
      {/* <IntroHome /> */}
      {/* <Steps /> */}
      {/* <Reviews />
      <GalleryCarousel />
      <GoogleReviews />
      <DynamicGoogleMap /> */}
      <AccessibilityWidget />

      <AboutSection />
      <MeetTeamSection />
      {/* <Pricing /> */}
      <SmileTransformations />
      <GoogleReviews />
      <Journey />
      <VideoAnimationSection />
      {/* <InstagramSection /> */}
      <FindUs />
      <PromotionFAQ />
      <ComingSoonSection />
      {/* <FloatingMenu /> */}

      {/* <Reviews /> */}
      {/* <Services />
      <Steps />
      <GalleryCarousel />
      <GoogleMap /> */}
    </main>
  );
}
