import LocalReachLandingPage from '@/components/LocalReach/LocalReachLandingPage';
import { localReachMetadata } from '@/lib/localreach';

export const metadata = localReachMetadata('localreach-highbridge-and-burnham');

export default function Page() {
  return <LocalReachLandingPage edition='localreach-highbridge-and-burnham' />;
}

