import Cta from './components/blocks/Cta/Cta';
import GoogleMap from './components/blocks/GoogleMap/GoogleMap';
import Layout from './components/blocks/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Cta />
      <GoogleMap />
    </Layout>
  );
}
