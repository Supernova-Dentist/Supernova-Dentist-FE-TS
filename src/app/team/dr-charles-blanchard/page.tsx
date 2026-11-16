import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMember, getTeamMetadata } from '@/data/team';
import { SITE_URL } from '@/lib/site';

const slug = 'dr-charles-blanchard';
const member = getTeamMember(slug);

export const metadata = getTeamMetadata(slug, {
  title: 'Dr Charles Blanchard | Root Canal Treatment | Supernova Dental',
  description:
    'Meet Dr Charles Blanchard at Supernova Dental in Bridgwater. Charles has a special interest in endodontics and provides root canal treatment. GDC 258593.',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: member.name,
  url: new URL(`/team/${slug}`, SITE_URL).toString(),
  jobTitle: member.role,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'GDC registration number',
    value: member.gdc,
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Supernova Dental',
    url: SITE_URL,
  },
};

export default function DrCharlesBlanchardPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug={slug} />
    </>
  );
}
