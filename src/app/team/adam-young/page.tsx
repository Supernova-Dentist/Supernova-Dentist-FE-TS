import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('adam-young', {
  title: 'Adam | Operations Director | Supernova Dental Bridgwater, Somerset',
  description:
    'Meet Adam, the Operations Director at Supernova Dental in Bridgwater, Somerset. Adam manages the patient journey, dental software, website, and practice operations to ensure a seamless experience.',
  keywords:
    'Adam Supernova Dental, operations director Bridgwater, dental practice operations, dental software manager, dental website developer, dental IT specialist, dental marketing, patient journey manager, Supernova Dental team, Bridgwater dental practice, dental practice website',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adam',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/adam.jpg',
  url: 'https://www.supernovadental.co.uk/team/adam-young',
  jobTitle: 'Operations Director',
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

export default function AdamYoungPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='adam-young' />
    </>
  );
}
