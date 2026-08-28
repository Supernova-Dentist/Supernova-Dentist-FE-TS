import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('mariana-barbu');

export default function MarianaBarbuPage() {
  return <ProfilePage slug='mariana-barbu' />;
}
