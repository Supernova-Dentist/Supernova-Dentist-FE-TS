import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('tracy-hawkins', {
  title: 'Tracy Hawkins | Dental Hygienist Bridgwater, Somerset',
  description:
    'Tracy Hawkins is a qualified dental hygienist at Supernova Dental in Bridgwater, Somerset. She specialises in oral hygiene, scale and polish treatments, gum health, stain removal, and preventive dental care. Book your appointment today!',
  keywords:
    'Tracy Hawkins, dental hygienist Bridgwater, hygienist Somerset, oral hygiene Bridgwater, scale and polish Bridgwater, gum health Somerset, stain removal Bridgwater, preventive dental care Bridgwater, Supernova Dental hygienist',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tracy Hawkins',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/tracy.jpg',
  url: 'https://www.supernovadental.co.uk/team/tracy-hawkins',
  jobTitle: 'Dental Hygienist',
  worksFor: {
    '@type': 'Organization',
    name: 'Supernova Dental',
    url: 'https://www.supernovadental.co.uk',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    addressRegion: 'Somerset',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 1278 228665',
    contactType: 'Customer Service',
    email: 'enquiries@supernovadental.co.uk',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK'],
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function TracyHawkinsPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='tracy-hawkins' />
    </>
  );
}
