import ImplantAboutSection from '@/components/AboutSection/ImplantAboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import ConsultFindUs from '@/components/FindUs/ConsultFindUs';
import ConsultationTrustStrip from '@/components/ConsultationTrustStrip/ConsultationTrustStrip';
import { consultationTrustContent } from '@/components/ConsultationTrustStrip/consultationTrustContent';
import ImplantPromotionForm from '@/components/PromotionForm/ImplantPromotionForm';
import { ImplantSparklesPreview } from '@/components/SparklesPreview/ImplantSparklesPreview';

export const metadata = {
  title: 'Private Dentist in Bridgwater, Somerset | Supernova Dental',
  description:
    'Private dentist in Bridgwater, Somerset. Supernova Dental offers cosmetic and general dentistry, dental implants and flexible payment options for new patients.',
  alternates: { canonical: '/implant-consultation' },
  robots: { index: false, follow: true },
  keywords:
    'private dentist Bridgwater, new dentist Bridgwater, taking new patients, cosmetic dentist Bridgwater, general dentist Bridgwater, dental implants Somerset, same-day emergency dentist Bridgwater, dental payment plans, cosmetic dentistry Somerset, dental care near Taunton',
  openGraph: {
    title: 'Private Dentist Bridgwater, Somerset | Cosmetic & General Dentistry',
    description:
      'Supernova Dental offers cosmetic and general dentistry, dental implants and same-day emergency appointments in Bridgwater, Somerset.',
    url: 'https://www.supernovadental.co.uk/implant-consultation',
    type: 'website',
    images: [
      {
        url: '/assets/images/outerBuildingPreview.jpg',
        width: 1200,
        height: 900,
        alt: 'Supernova Dental - Premium Dental Care',
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
      'Supernova Dental is a private dental practice in Bridgwater, Somerset. We offer cosmetic and general dentistry, dental implants, Invisalign consultations, same-day emergency appointments and payment plans.',
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
    sameAs: [
      'https://www.facebook.com/profile.php?id=61567279201971',
      'https://www.instagram.com/supernova.dental/',
      'https://g.co/kgs/qqvPcF1',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Supernova Dental Treatments & Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Invisalign Consultation (Free)',
          description: 'Free Invisalign consultation at Supernova Dental.',
          url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/invisalign',
        },
        {
          '@type': 'Offer',
          name: 'Adult Membership Plan (£24.99/month)',
          description:
            'Includes 2 routine examinations per year, 2 hygiene maintenance appointments, 1 emergency assessment, routine X-rays, and free worldwide emergency cover.',
          price: '24.99',
          priceCurrency: 'GBP',
          url: 'https://www.supernovadental.co.uk/practice',
        },
        {
          '@type': 'Offer',
          name: "Children's Membership Plan (£5.99/month)",
          description:
            'Includes 2 routine examinations per year, fluoride varnish application, and free worldwide emergency cover.',
          price: '5.99',
          priceCurrency: 'GBP',
          url: 'https://www.supernovadental.co.uk/practice',
        },
      ],
    },
  };

  return (
    <main className='campaign-experience min-w-0 overflow-x-clip bg-porcelain text-obsidian'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...structuredData, review: undefined }),
        }}
      />
      <ImplantSparklesPreview />
      <section id='consultation-form' className='scroll-mt-24 bg-porcelain px-5 py-16 sm:px-8 lg:px-12 lg:py-24' aria-label='Dental implant consultation enquiry'>
        <ImplantPromotionForm />
      </section>
      <div className='campaign-trust-strip bg-ivory px-5 py-4 sm:px-8 lg:px-12'>
        <ConsultationTrustStrip content={consultationTrustContent.implant} />
      </div>
      <div className='campaign-support bg-porcelain'>
        <ImplantAboutSection />
      </div>

      {/* <Pricing /> */}

      {/* <SmileTransformations />
      <ComseticCTABridgeSection /> */}
      <div className='campaign-reviews bg-ivory'>
        <GoogleReviews />
      </div>
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
