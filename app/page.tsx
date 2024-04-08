import Cta from './components/blocks/Cta/Cta';
import GoogleMap from './components/blocks/GoogleMap/GoogleMap';
import Reviews from './components/blocks/Reviews/Review';
import Steps from './components/blocks/Steps/Steps';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

export default function Home() {
  return (
    <main>
      <Cta />
      <Reviews />
      <Steps />
      <GoogleMap />
      <ScrollToTopButton />
    </main>
  );
}
