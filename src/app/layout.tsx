import { AccessibilityWidget } from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import CrispChat from '@/components/blocks/CrispChat/CrispChat';
import Footer from '@/components/blocks/Footer/Footer';
import MainNav from '@/components/blocks/MainNav/MainNav';
import PromotionFooter from '@/components/PromotionFooter/PromotionFooter';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { IBM_Plex_Sans, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import './reset.css';

const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), { ssr: false });

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.supernovadental.co.uk'),
  title: 'Supernova Dental | Private Dentist in Bridgwater, Somerset',
  description:
    'Supernova Dental is a trusted private dental practice in Bridgwater, Somerset. We offer cosmetic and general dentistry, dental implants, and same-day appointments. Accepting patients from Bridgwater, Taunton, and surrounding areas.',
  keywords:
    'private dentist Bridgwater, cosmetic dentist Somerset, general dentistry Bridgwater, dental implants Somerset, same-day dental appointments, emergency dentist Bridgwater, best dentist in Bridgwater',
  openGraph: {
    title: 'Supernova Dental | Private Dentist in Bridgwater, Somerset',
    description:
      'Supernova Dental offers expert cosmetic and general dental care in Bridgwater, Somerset. Accepting patients from Bridgwater, Taunton, and surrounding areas.',
    url: 'https://www.supernovadental.co.uk/',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Supernova Dental',
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

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental',
  url: 'https://www.supernovadental.co.uk',
  logo: 'https://www.supernovadental.co.uk/assets/images/logo.png',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Supernova Dental is a trusted private dental practice in Bridgwater, Somerset, offering cosmetic and general dentistry, dental implants, same-day appointments, and flexible payment plans.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+44 1278 228665',
      contactType: 'Customer Service',
      email: 'enquiries@supernovadental.co.uk',
      areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
      availableLanguage: 'English',
    },
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
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '76',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Cookiebot */}
        {/* <Script
          id='Cookiebot'
          src='https://consent.cookiebot.com/uc.js'
          data-cbid='aced3b94-7f1a-4ccd-a22f-90b2c1d4bf6b'
          data-blockingmode='auto'
          type='text/javascript'
        /> */}

        {/* Google Analytics */}
        {/* <Script async src='https://www.googletagmanager.com/gtag/js?id=G-8M5WQJ7R5Z' /> */}
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8M5WQJ7R5Z');
            gtag('config', 'AW-16737398524');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id='gtm-script' strategy='beforeInteractive'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5Q5NWLHG');
          `}
        </Script>

        <meta name='google-site-verification' content='6AoMb9jPZjKrBtnIYhIpHOb96jJ_QaDRMAIqUffMCMw' />

        {/* Crazy Egg */}
        <Script src='//script.crazyegg.com/pages/scripts/0131/3081.js' strategy='afterInteractive' async />

        {/* Meta Pixel with Cookiebot Compliance */}
        {/* <Script id='meta-pixel' strategy='afterInteractive'>
          {`
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;
    n=f.fbq=function(){n.callMethod ?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
    t=b.createElement(e);t.async=!0;t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

  // Start with consent revoked
  window.fbq('consent', 'revoke');

  // When Cookiebot signals consent status
  window.addEventListener('CookiebotOnConsentReady', function() {
    if (Cookiebot.consent.marketing) {
      window.fbq('consent', 'grant');
      window.fbq('init','539899052125710');
      window.fbq('track','PageView');
    }
  }, false);
`}
        </Script> */}

        {/* Meta Pixel */}
        <Script id='meta-pixel' strategy='afterInteractive'>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4387651841513330');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Structured data */}
        <Script
          id='structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${playfair.variable} ${ibmPlex.variable}`}>
        <MainNav />
        {children}
        <FloatingMenu />
        <Footer />
      </body>
    </html>
  );
}
