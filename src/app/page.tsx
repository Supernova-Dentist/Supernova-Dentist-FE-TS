import dynamic from 'next/dynamic';
// import Services from '@/components/Services/Services';
// import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
// import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
// import Reviews from '@/components/blocks/Reviews/Review';
// import Steps from '@/components/blocks/Steps/Steps';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Reviews from '@/components/blocks/Reviews/Review';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import InstagramSection from '@/components/InstagramSection/InstagramSection';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import Location from './(about)/find-us/page';
import AboutSection from '@/components/AboutSection/AboutSection';
import { Journey } from '@/components/Journey/Journey';
const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Welcome />
      <PromotionForm />
      <AboutSection />
      <Pricing />
      <SmileTransformations />
      <GoogleReviews />
      <Journey />
      <VideoAnimationSection />
      {/* <InstagramSection /> */}
      <Location />
      <PromotionFAQ />
      <ComingSoonSection />
      <FloatingMenu />

      {/* <Reviews /> */}
      {/* <Services />
      <Steps />
      <GalleryCarousel />
      <GoogleMap /> */}
    </main>
  );
}
