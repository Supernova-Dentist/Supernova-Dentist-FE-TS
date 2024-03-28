import Cta from './components/blocks/Cta/Cta';
import GoogleMap from './components/blocks/GoogleMap/GoogleMap';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col gap-4'>
      <Cta />
      <GoogleMap />
    </main>
  );
}
