import AboutSection from '@/components/AboutSection/AboutSection';
import ConsultAboutSection from '@/components/AboutSection/ConsultAboutSection';
import GeneralAboutSection from '@/components/AboutSection/GeneralAboutSection';
import SainsburysAboutSection from '@/components/AboutSection/SainsburysAboutSection';
import { AccessibilityWidget } from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import Welcome from '@/components/blocks/Welcome/Welcome';
import ComingSoonSection from '@/components/ComingSoon/ComingSoon';
import ComseticCTABridgeSection from '@/components/CosmeticCTABridgeSection/CosmeticCTABridgeSection';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import ConsultFindUs from '@/components/FindUs/ConsultFindUs';
import FindUsSection from '@/components/FindUsSection/FindUsSection';
import JoinUsSection from '@/components/JoinUsSection/JoinUsSection';
import { Journey } from '@/components/Journey/Journey';
import PracticeFAQsSection from '@/components/PracticeFAQsSection/PracticeFAQsSection';
import Pricing from '@/components/Pricing/Pricing';
import PromotionFAQ from '@/components/PromotionFAQ/PromotionFAQ';
import ConsultationPromotionForm from '@/components/PromotionForm/ConsultationPromotionForm';
import GeneralPromotionForm from '@/components/PromotionForm/GeneralPromotionForm';
import ImplantPromotionForm from '@/components/PromotionForm/ImplantPromotionForm';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SainsburysForm from '@/components/PromotionForm/SainsburysForm';
import ServicesSelection from '@/components/ServicesSelection/ServicesSelection';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { ConsultationSparklesPreview } from '@/components/SparklesPreview/ConsultationSparklesPreview';
import { GeneralSparklesPreview } from '@/components/SparklesPreview/GeneralSparklesPreview';
import { ImplantSparklesPreview } from '@/components/SparklesPreview/ImplantSparklesPreview';
import { SainsburysSparklesPreview } from '@/components/SparklesPreview/SainsburysSparklesPreview';
import { SparklesPreview } from '@/components/SparklesPreview/SparklesPreview';
import TeamSection from '@/components/TeamSection/TeamSection';
import GeneralUSPS from '@/components/USPS/GeneralUSPS';
import ImplantUSPS from '@/components/USPS/ImplantUSPS';
import SainsburysUSPS from '@/components/USPS/SainsburysUSPS';
import USPS from '@/components/USPS/USPS';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';

export const metadata = {
  title: "Dentist Near Sainsbury's Bridgwater | Supernova Dental",
  description:
    "Looking for a dentist near Sainsbury's in Bridgwater? Supernova Dental is just minutes away at Huntworth Gate, welcoming new private patients for cosmetic, general and emergency dentistry.",
  alternates: {
    canonical: '/bridgwater-sainsburys',
  },
  keywords:
    "dentist near Sainsbury's Bridgwater, dentist Bridgwater Sainsbury's, private dentist Bridgwater, dentist near Huntworth Gate, emergency dentist Bridgwater, Invisalign Bridgwater, cosmetic dentist Bridgwater, dental implants Bridgwater, new dentist Bridgwater, dentist near Bridgwater retail park",
  openGraph: {
    title: "Dentist Near Sainsbury's Bridgwater | Supernova Dental",
    description:
      "Only minutes from Sainsbury's Bridgwater, Supernova Dental provides private dental care, Invisalign, dental implants, hygiene appointments and emergency dentistry.",
    url: 'https://www.supernovadental.co.uk/bridgwater-sainsburys',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Supernova Dental',
    images: [
      {
        url: '/assets/images/outerBuildingPreview.jpg',
        width: 1200,
        height: 900,
        alt: "Supernova Dental near Sainsbury's Bridgwater",
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': 'https://www.supernovadental.co.uk/bridgwater-sainsburys#dentist',

    name: 'Supernova Dental',

    url: 'https://www.supernovadental.co.uk/bridgwater-sainsburys',

    image: 'https://www.supernovadental.co.uk/assets/images/outerBuildingPreview.jpg',

    logo: 'https://www.supernovadental.co.uk/assets/images/logo.png',

    description:
      "Supernova Dental is a private dental practice located just a few minutes from Sainsbury's Bridgwater at Huntworth Gate. We provide cosmetic dentistry, Invisalign, dental implants, hygiene appointments, emergency dental care and routine dentistry for patients across Bridgwater and Somerset.",

    telephone: '+44 1278 228665',

    email: 'enquiries@supernovadental.co.uk',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
      addressLocality: 'Bridgwater',
      addressRegion: 'Somerset',
      postalCode: 'TA6 6LQ',
      addressCountry: 'GB',
    },

    areaServed: [
      'Bridgwater',
      'Huntworth',
      'Chilton Trinity',
      'Puriton',
      'Taunton',
      'Cannington',
      'North Petherton',
      'Somerset',
    ],

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

    hasMap: 'https://maps.google.com/?q=Supernova+Dental+Bridgwater',

    sameAs: [
      'https://www.facebook.com/profile.php?id=61567279201971',
      'https://www.instagram.com/supernova.dental/',
      'https://g.co/kgs/qqvPcF1',
    ],

    knowsAbout: [
      'Private Dentistry',
      'Cosmetic Dentistry',
      'General Dentistry',
      'Emergency Dentistry',
      'Dental Implants',
      'Invisalign',
      'Composite Bonding',
      'Dental Hygiene',
      'Smile Makeovers',
      'Dental Membership Plans',
    ],

    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Parking',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair Accessible',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Accepting New Patients',
        value: true,
      },
    ],


    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-03-15', // 25 weeks ago
        reviewBody:
          'I am deathly nervous of the dentist, but I called up Thursday as I was in so much pain and spoke to Kayleigh, who was amazing, I was booked in with Scott for today, I was so scared, he was brilliant I had xrays first then asked to come back later, he did an extraction, I have never had some one so gentle and helpful in all my life, I need a few more appointments with things to be done, but Scott put my mind at ease and im ready to do this now 😀 Thank Supernova team',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-03-11', // 29 weeks ago
        reviewBody:
          'I had a great experience at Supernova Dental, my new dentist in Bridgwater. The team were friendly and explained everything clearly, helping me understand my options for the smile I’ve always wanted.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-03-11', // 29 weeks ago
        reviewBody:
          'It’s refreshing to finally find a Dentist practice that are warm, welcoming and friendly, all the staff I’ve met are lovely, Scott explaines everything clearly and your not TOLD what you HAVE to have done, you’re advised what needs to be done with no pressure attached. It’s nice and easy to get an appointment, no issues at all with parking. I would definitely recommend Supernova. Dr. Scott Young gave me an Invisalign consultation which included a 3D scan to visualise my future smile, it was amazing.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-06-20', // 14 weeks ago
        reviewBody:
          "I can honestly say this is the best experience I've ever had at a dentist. Scott gave the best advice and followed up with expert dentistry skills. From what we were trying to achieve, the whitening, the crowns and veneer, all exceeded our expectations, the staff were amazing and my wife now has the best smile in Bridgwater x",
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-07-23', // 8 weeks ago
        reviewBody:
          'Can not fault anything with this dentist from first going going to leaving, everything was so friendly and very professional. Will look forward to getting the rest on my children sign up thank you',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-08-15', // 5 weeks ago
        reviewBody:
          'After breaking a tooth, I had to have an emergency extraction. The staff at Supernova were excellent. Dr. Amarin, who performed the procedure, went out of her way to explain to a very nervous patient exactly what she was doing. Her words calmed me, and everything went like clockwork. I will definitely use Supernova Dental again',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Patient' },
        datePublished: '2025-09-06', // 2 weeks ago
        reviewBody:
          'I am extremely nervous of the dentist, the care and treatment I received from Kayleigh was excellent, fully understood how I felt, talked through every step. Had further treatment with Scott again treatment and care excellent. Thank you both.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
    ],

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Treatments',

      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Free Invisalign Consultation',
          url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/invisalign',
        },
        {
          '@type': 'Offer',
          name: 'Dental Implants',
          url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/dental-implants',
        },
        {
          '@type': 'Offer',
          name: 'General Dentistry',
          url: 'https://www.supernovadental.co.uk/general-dentistry',
        },
      ],
    },
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Dentist Near Sainsbury's Bridgwater",
    url: 'https://www.supernovadental.co.uk/bridgwater-sainsburys',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Supernova Dental',
      url: 'https://www.supernovadental.co.uk',
    },
    about: {
      '@type': 'Dentist',
      name: 'Supernova Dental',
      url: 'https://www.supernovadental.co.uk/bridgwater-sainsburys',
      description:
        "Supernova Dental is a private dental practice located just a few minutes from Sainsbury's Bridgwater at Huntworth Gate. We provide cosmetic dentistry, Invisalign, dental implants, hygiene appointments, emergency dental care and routine dentistry for patients across Bridgwater and Somerset.",
    },
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...structuredData, review: undefined }),
        }}
      />
      <div className='hidden lg:block'>
        <SainsburysUSPS />
      </div>
      <SainsburysSparklesPreview />
      <SainsburysForm />
      <div className='block lg:hidden'>
        <SainsburysUSPS />
      </div>
      <SainsburysAboutSection />

      {/* <Pricing /> */}

      {/* <SmileTransformations />
      <ComseticCTABridgeSection /> */}
      <GoogleReviews />
      <ConsultFindUs />
      {/* <Journey /> */}
      {/* <VideoAnimationSection /> */}
      {/* <FindUsSection /> */}
      {/* <JoinUsSection /> */}
      {/* <PracticeFAQsSection /> */}
      {/* <AccessibilityWidget /> */}
      {/* <ComingSoonSection /> */}
    </main>
  );
}
