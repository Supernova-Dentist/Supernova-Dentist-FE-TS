import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('dr-cameran-armaghani', {
  title: 'Dr. Cameran | Expert Implantologist Bridgwater, Somerset',
  description:
    'Dr. Cameran is a leading implantologist in Bridgwater, Somerset. Specialising in single-tooth, multiple-tooth, and full-arch dental implants including All-on-4 solutions. Book your consultation today!',
  keywords:
    'female implantologist Bridgwater, implantologist Bridgwater, dental implants Bridgwater, All-on-4 implants Somerset, full arch implants Bridgwater, single-tooth implants Somerset, multiple-tooth implants Bridgwater, dental implant specialist Somerset, cosmetic implants Bridgwater, oral surgery Bridgwater',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Cameran',
  image:
    'https://www.supernovadental.co.uk/assets/images/Headshots/dr-cameran-armaghani-implantologist-supernova-dental-bridgwater.webp',
  url: 'https://www.supernovadental.co.uk/team/dr-cameran-armaghani',
  jobTitle: 'Implantologist',
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

export default function DrCameranArmaghaniPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='dr-cameran-armaghani' />
    </>
  );
}
