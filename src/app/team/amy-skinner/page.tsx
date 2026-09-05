import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('amy-skinner');

export default function AmySkinnerPage() {
  return <ProfilePage slug='amy-skinner' />;
}
