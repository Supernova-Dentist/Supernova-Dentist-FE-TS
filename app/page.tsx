import Cta from './components/blocks/Cta/Cta';
import Footer from './components/blocks/Footer/Footer';
import GoogleMap from './components/blocks/GoogleMap/GoogleMap';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Cta />
      <GoogleMap />
      <Footer />
    </main>
  );
}
