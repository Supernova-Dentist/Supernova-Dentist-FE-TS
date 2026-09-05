import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('vanessa-speier');

export default function VanessaSpeierPage() {
  return <ProfilePage slug='vanessa-speier' />;
}
