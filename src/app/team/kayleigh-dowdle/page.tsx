import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('kayleigh-dowdle', {
  title: 'Kayleigh Dowdle | Dental Therapist Bridgwater, Somerset',
  description:
    'Kayleigh Dowdle is a qualified dental therapist at Supernova Dental in Bridgwater, Somerset. She specialises in oral hygiene, teeth cleaning, whitening, and preventive dental care. Book your appointment today!',
  keywords:
    'Kayleigh Dowdle, dental therapist Bridgwater, female dental therapist Somerset, oral hygiene Bridgwater, teeth cleaning Bridgwater, teeth whitening Somerset, preventive dental care Bridgwater, Supernova Dental therapist, dental care for children Bridgwater',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kayleigh Dowdle',
  image:
    'https://www.supernovadental.co.uk/assets/images/Headshots/kayleigh-dowdle-dental-therapist-supernova-dental-bridgwater.webp',
  url: 'https://www.supernovadental.co.uk/team/kayleigh-dowdle',
  jobTitle: 'Dental Therapist',
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

export default function KayleighDowdlePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='kayleigh-dowdle' />
    </>
  );
}
