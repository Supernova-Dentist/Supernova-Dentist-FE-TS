import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('dr-alexandra-rawlins', {
  title: 'Dr Alexandra Rawlins | Minor Oral Surgery | Supernova Dental',
  description:
    'Meet Dr Alexandra Rawlins at Supernova Dental in Bridgwater. Alex provides minor oral surgery, including complex extractions, and supports patients who feel nervous about treatment.',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr Alexandra Rawlins',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/dr-alexandra-rawlins-dentist-supernova-dental-bridgwater.webp',
  url: 'https://www.supernovadental.co.uk/team/dr-alexandra-rawlins',
  jobTitle: 'Dentist with a special interest in minor oral surgery',
  worksFor: {
    '@type': 'Organization',
    name: 'Supernova Dental',
    url: 'https://www.supernovadental.co.uk',
  },
};

export default function DrAlexandraRawlinsPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='dr-alexandra-rawlins' />
    </>
  );
}
