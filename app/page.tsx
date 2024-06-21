import dynamic from 'next/dynamic';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Services from './components/Services/Services';
import Cta from './components/blocks/Cta/Cta';
import GalleryCarousel from './components/blocks/GalleryCarousel/GalleryCarousel';
import GoogleReviews from './components/blocks/GoogleReviews/GoogleReviews';
import Reviews from './components/blocks/Reviews/Review';
import Steps from './components/blocks/Steps/Steps';
const GoogleMap = dynamic(async () => await import('./components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Cta />
      <Services />
      <Steps />
      <Reviews />
      <GalleryCarousel />
      <GoogleReviews />
      <GoogleMap />
      <ScrollToTopButton />
    </main>
  );
}
