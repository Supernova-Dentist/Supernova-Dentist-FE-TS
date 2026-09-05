import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('victoria-hands');

export default function VictoriaHandsPage() {
  return <ProfilePage slug='victoria-hands' />;
}
