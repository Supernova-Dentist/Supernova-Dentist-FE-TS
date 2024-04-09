import dynamic from 'next/dynamic';
import Cta from './components/blocks/Cta/Cta';
import Reviews from './components/blocks/Reviews/Review';
import Steps from './components/blocks/Steps/Steps';
import GalleryCarousel from './components/blocks/GalleryCarousel/GalleryCarousel';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
const GoogleMap = dynamic(async () => await import('./components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Cta />
      <Steps />
      <Reviews />
      <GalleryCarousel />
      <GoogleMap />
      <ScrollToTopButton />
    </main>
  );
}
