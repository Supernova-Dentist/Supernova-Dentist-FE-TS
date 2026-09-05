import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('mia-coakley');

export default function MiaCoakleyPage() {
  return <ProfilePage slug='mia-coakley' />;
}
