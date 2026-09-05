import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('dr-souad-maddi', {
  title: 'Dr Souad Maddi | Cosmetic, General & Restorative Dentist Bridgwater, Somerset',
  description:
    'Dr Souad Maddi is a cosmetic, general and restorative dentist at Supernova Dental Practice in Bridgwater, Somerset. Expert in smile design, minimally invasive cosmetic dentistry, and natural-looking smile enhancements. Book your appointment today!',
  keywords:
    'Dr Souad Maddi, cosmetic dentist Bridgwater, general dentist Somerset, restorative dentist Bridgwater, smile design Bridgwater, cosmetic dentistry Somerset, private dentist Bridgwater, teeth whitening Bridgwater, minimally invasive dentistry',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr Souad Maddi',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/dr-souad-maddi.jpeg',
  url: 'https://www.supernovadental.co.uk/team/dr-souad-maddi',
  jobTitle: 'Cosmetic, General & Restorative Dentist',
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
    availableLanguage: ['English', 'Arabic', 'French', 'Spanish'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function DrSouadMaddiPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='dr-souad-maddi' />
    </>
  );
}
