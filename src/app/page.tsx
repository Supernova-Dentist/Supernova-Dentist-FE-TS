import Services from '@/components/Services/Services';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Reviews from '@/components/blocks/Reviews/Review';
import Steps from '@/components/blocks/Steps/Steps';
import Welcome from '@/components/blocks/Welcome/Welcome';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';

export default function Home() {
  return (
    <main>
      <Welcome />
      <Services />
      <Steps />
      <Reviews />
      <GalleryCarousel />
      <GoogleReviews />
      <DynamicGoogleMap />
    </main>
  );
}
