import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('geri-warren');

export default function GeriWarrenPage() {
  return <ProfilePage slug='geri-warren' />;
}
