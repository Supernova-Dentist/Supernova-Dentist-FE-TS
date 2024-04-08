import Cta from './components/blocks/Cta/Cta';
import GoogleMap from './components/blocks/GoogleMap/GoogleMap';
import Reviews from './components/blocks/Reviews/Review';
import Steps from './components/blocks/Steps/Steps';

export default function Home() {
  return (
    <div>
      <Cta />
      <Reviews />
      <Steps />
      <GoogleMap />
    </div>
  );
}
