// import dynamic from 'next/dynamic';
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
// const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main>
      <Welcome />
      <PromotionForm />
      <SmileTransformations />
      <GoogleReviews />
      <Pricing />
      <VideoAnimationSection />
      <InstagramSection />
      <Location />
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
