import AccessibilityWidget from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Reviews from '@/components/blocks/Reviews/Review';
import Steps from '@/components/blocks/Steps/Steps';
import Welcome from '@/components/blocks/Welcome/Welcome';
import IntroHome from '@/components/IntroHome/IntroHome';

export default function Home() {
  return (
    <main>
      <Welcome />
      <IntroHome />
      <Steps />
      <Reviews />
      <GalleryCarousel />
      <GoogleReviews />
      <DynamicGoogleMap />
      <AccessibilityWidget />
    </main>
  );
}
