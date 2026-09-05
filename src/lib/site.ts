export const SITE_URL = 'https://www.supernovadental.co.uk';

export const PRACTICE_ID = `${SITE_URL}/#dental-practice`;

export const practiceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': PRACTICE_ID,
  name: 'Supernova Dental',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo.png`,
  image: `${SITE_URL}/assets/images/outerBuilding.jpg`,
  description:
    'Supernova Dental is a private dental practice in Bridgwater, Somerset, offering cosmetic and general dentistry, dental implants, same-day emergency appointments and payment plans.',
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
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
    availableLanguage: ['English', 'Polish', 'Spanish', 'French', 'Romanian', 'Arabic'],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:15',
      closes: '18:15',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

type StructuredDataRecord = Record<string, unknown>;

export function extendPracticeStructuredData(data: StructuredDataRecord) {
  return {
    ...practiceStructuredData,
    ...data,
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': PRACTICE_ID,
    name: practiceStructuredData.name,
    url: SITE_URL,
  };
}

export function createServiceStructuredData(data: StructuredDataRecord) {
  const service = data.serviceProvided as StructuredDataRecord | undefined;
  const pageUrl = typeof data.url === 'string' ? data.url : SITE_URL;

  return {
    '@context': 'https://schema.org',
    ...(service ?? { '@type': 'Service', name: data.name }),
    '@id': `${pageUrl}#service`,
    url: pageUrl,
    description: service?.description ?? data.description,
    provider: { '@id': PRACTICE_ID },
    ...(data.potentialAction === undefined ? {} : { potentialAction: data.potentialAction }),
  };
}
