import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('dr-scott-young', {
  title: 'Dr. Scott Young | Invisalign & Principal Dentist Bridgwater, Somerset',
  description:
    'Dr. Scott Young is the principal dentist and owner at Supernova Dental in Bridgwater, Somerset. Experienced Invisalign provider, cosmetic dentistry specialist, and committed to transforming smiles. Book your consultation today!',
  keywords:
    'Invisalign Bridgwater, principal dentist Bridgwater, cosmetic dentist Somerset, Dr. Scott Young, invisible braces Bridgwater, teeth straightening Somerset, orthodontics Bridgwater, dental practice owner Bridgwater, smile transformation Bridgwater',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Scott Young',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/scott_headshot.jpeg',
  url: 'https://www.supernovadental.co.uk/team/dr-scott-young',
  jobTitle: 'Principal Dentist & Invisalign Provider',
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

export default function DrScottYoungPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='dr-scott-young' />
    </>
  );
}
