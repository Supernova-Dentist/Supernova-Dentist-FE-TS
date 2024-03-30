import CrispChat from './components/blocks/CrispChat/CrispChat';
import Cta from './components/blocks/Cta/Cta';
import Footer from './components/blocks/Footer/Footer';
// import GoogleMap from './components/blocks/GoogleMap/GoogleMap';
import MainNav from './components/blocks/MainNav/MainNav';

import dynamic from 'next/dynamic';

const GoogleMap = dynamic(async () => await import('./components/blocks/GoogleMap/GoogleMap'), { ssr: false });

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <MainNav />
      <Cta />
      <GoogleMap />
      <Footer />
      {/* Could possibly add an aria-hidden='true' to a div and put the CrispChat component inside  */}
      <CrispChat />
    </main>
  );
}
