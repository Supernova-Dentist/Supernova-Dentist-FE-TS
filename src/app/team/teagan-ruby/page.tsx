import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('teagan-ruby');

export default function TeaganRubyPage() {
  return <ProfilePage slug='teagan-ruby' />;
}
