import ProfilePage from '@/components/TeamExperience/ProfilePage';
import { getTeamMetadata } from '@/data/team';

export const metadata = getTeamMetadata('dr-jacqueline-amarin', {
  title: 'Dr. Jacqueline Amarin | General & Restorative Dentist Bridgwater, Somerset',
  description:
    'Dr. Jacqueline Amarin is a skilled general and restorative dentist at Supernova Dental in Bridgwater, Somerset. Expert in teeth whitening, fillings, crowns, and preventative care. Book your appointment today!',
  keywords:
    'Dr. Jacqueline Amarin, female dentist Bridgwater, general dentist Somerset, restorative dentist Bridgwater, teeth whitening Bridgwater, dental fillings Somerset, dental crowns Bridgwater, preventative dental care Bridgwater, private dentist Somerset, cosmetic dentist Bridgwater',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Jacqueline Amarin',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/jackie.jpeg',
  url: 'https://www.supernovadental.co.uk/team/dr-jacqueline-amarin',
  jobTitle: 'General & Restorative Dentist',
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

export default function DrJacquelineAmarinPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProfilePage slug='dr-jacqueline-amarin' />
    </>
  );
}
