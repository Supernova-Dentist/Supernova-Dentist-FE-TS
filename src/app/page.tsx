import AboutSection from '@/components/AboutSection/AboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import FindUsSection from '@/components/FindUsSection/FindUsSection';
import { Journey } from '@/components/Journey/Journey';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import Head from 'next/head';

export const metadata = {
  title: 'Bridgwater Dentist | Trusted Private Dental Practice - Supernova Dental',
  description:
    'Looking for a trusted dentist in Bridgwater? Supernova Dental provides expert dental care, including Invisalign, implants, dental hygiene, and emergency appointments. Now accepting new patients!',
  keywords:
    'dentist in Bridgwater, Bridgwater dentist, private dentist Bridgwater, Invisalign Bridgwater, Bridgwater Invisalign, dental implants Bridgwater, emergency dentist Bridgwater, dental hygiene appointment, teeth whitening, teeth cleaning, cosmetic dentistry, new patients, dentist near me, best dentist in Bridgwater, private dental practice Bridgwater, family dentist Bridgwater, dental care Bridgwater, dental services in Bridgwater, Invisalign for adults Bridgwater, affordable dentist in Bridgwater, trusted dentist Bridgwater, teeth implants Bridgwater, best emergency dentist Bridgwater, dentist open weekends Bridgwater, children’s dentist in Bridgwater, best dental practice Bridgwater, Invisalign braces in Bridgwater, cosmetic dental services Bridgwater, gentle dentist Bridgwater, local dental care Bridgwater, dentist with payment plans Bridgwater',
  openGraph: {
    title: 'Bridgwater Dentist | Trusted Private Dental Practice - Supernova Dental',
    description:
      'Need a dentist in Bridgwater? Supernova Dental offers Invisalign, dental implants, emergency care & more. Book today!',
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
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Supernova Dental",
    "url": "https://www.supernovadental.co.uk",
    "description": "Looking for a trusted private dentist in Bridgwater? Supernova Dental provides expert dental care, including Invisalign, implants, and emergency appointments. Book a consultation today!",
    "keywords": "best private dentist in Bridgwater, Invisalign dentist near Bridgwater, affordable dental implants Bridgwater, emergency dental care in Bridgwater, gentle and trusted dentist Bridgwater",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Supernova Building, Marsh Lane, Huntworth Gate",
      "addressLocality": "Bridgwater",
      "postalCode": "TA6 6LQ",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 1278 228665",
      "contactType": "Customer Service",
      "email": "enquiries@supernovadental.co.uk",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:15",
        "closes": "18:15"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "openingHours": ["Mo-Th 08:15-18:15", "Sa 09:00-13:00"],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Patient"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "13"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61567279201971",
      "https://www.instagram.com/supernova.dental/",
      "https://g.co/kgs/qqvPcF1"
    ]
  }

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
      {/* <Pricing /> */}
      <DentallyTutorial />
      <SmileTransformations />
      <GoogleReviews />
      <Journey />
      <VideoAnimationSection />
      <FindUsSection />
      <PromotionFAQ />
      <ComingSoonSection />
    </main>
  );
}
