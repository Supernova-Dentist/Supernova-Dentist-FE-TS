import LocalReachLandingPage from '@/components/LocalReach/LocalReachLandingPage';
import { localReachMetadata } from '@/lib/localreach';

export const metadata = localReachMetadata('localreach-bridgwater');

export default function Page() {
  return <LocalReachLandingPage edition='localreach-bridgwater' />;
}

