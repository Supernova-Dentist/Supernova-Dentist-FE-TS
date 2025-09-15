import AboutSection from '@/components/AboutSection/AboutSection';
import { AccessibilityWidget } from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import FindUsSection from '@/components/FindUsSection/FindUsSection';
import { Journey } from '@/components/Journey/Journey';
import PracticeFAQsSection from '@/components/PracticeFAQsSection/PracticeFAQsSection';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import ServicesSelection from '@/components/ServicesSelection/ServicesSelection';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import TeamSection from '@/components/TeamSection/TeamSection';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import Head from 'next/head';

export const metadata = {
  title: 'Private Dentist Bridgwater & Taunton | Cosmetic Dentistry & Same-Day Appointments',
  description:
    'Supernova Dental offers high-quality private dental care in Bridgwater, Taunton and Somerset. We provide cosmetic dentistry, same-day appointments, flexible payment plans, dental implants, and emergency dental services. Register today!',
  keywords:
    'private dentist Bridgwater, private dentist Taunton, cosmetic dentist Bridgwater, cosmetic dentist Taunton, teeth whitening, composite bonding, dental implants Somerset, same-day dental appointments Bridgwater, dental payment plans, emergency dentist Bridgwater, dental practice near Taunton, private dental care Somerset',
  openGraph: {
    title: 'Private Dentist in Bridgwater, Somerset | Cosmetic Dentistry & Same-Day Appointments',
    description:
      'Looking for a cosmetic or private dentist in Bridgwater, Somerset? Supernova Dental offers expert care, flexible finance, and same-day appointments for patients across Bridgwater, Taunton, and the wider Somerset area.',
    url: 'https://www.supernovadental.co.uk',
    type: 'website',
    images: [
      {
        url: '/favicon.ico',
        width: 500,
        height: 500,
        alt: 'Supernova Dental Logo',
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Supernova Dental',
    url: 'https://www.supernovadental.co.uk',
    description:
      'Supernova Dental is a trusted private dental practice in Bridgwater, welcoming patients from Taunton and across Somerset. We offer cosmetic dentistry, dental implants, same-day appointments, and 0% finance options.',
    keywords:
      'cosmetic dentist Bridgwater, private dentist Taunton, same-day dentist Somerset, dental payment plans, teeth whitening, composite bonding, emergency dentist Bridgwater, dental hygiene Taunton, finance for dental work, best private dentist in Somerset',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
      addressLocality: 'Bridgwater',
      postalCode: 'TA6 6LQ',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44 1278 228665',
      contactType: 'Customer Service',
      email: 'enquiries@supernovadental.co.uk',
      areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
      availableLanguage: 'English',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
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
    openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'],
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-08-11',
        reviewBody:
          'I am 58 years old and Supernova is by far the best dentist I have ever been to. The people are so friendly and professional, the place is very smart and modern. The work I had done was amazing and it only cost half what I thought it would do. Going to the dentist always made me very nervous, NOT any more. I have now got myself a dental plan with them. Supernova is a top dentist.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-07-21',
        reviewBody:
          'I recently had composite veneers done on six of my teeth at Supernova Dental, and I couldn’t be happier with the results! Dr. Scott Young did an exceptional job – his attention to detail and skill made a huge difference in the final outcome. My smile looks completely transformed, yet still natural. From the moment I walked in, the staff were incredibly friendly and helpful. The whole experience was smooth, professional, and exceeded my expectations. Highly recommend!',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '75',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61567279201971',
      'https://www.instagram.com/supernova.dental/',
      'https://g.co/kgs/qqvPcF1',
    ],
  };

  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta property='og:title' content={metadata.openGraph.title} />
        <meta property='og:description' content={metadata.openGraph.description} />
        <meta property='og:url' content={metadata.openGraph.url} />
        <meta property='og:type' content={metadata.openGraph.type} />
        <meta property='og:image' content={metadata.openGraph.images[0].url} />
        <link rel='canonical' href='https://www.supernovadental.co.uk' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <Welcome />
      <PromotionForm />
      <AboutSection />
      <TeamSection />
      {/* <Pricing /> */}
      <DentallyTutorial />
      <SmileTransformations />
      <ServicesSelection />
      <GoogleReviews />
      <Journey />
      <VideoAnimationSection />
      <FindUsSection />
      <PracticeFAQsSection />
      {/* <AccessibilityWidget /> */}
      {/* <ComingSoonSection /> */}
    </main>
  );
}
