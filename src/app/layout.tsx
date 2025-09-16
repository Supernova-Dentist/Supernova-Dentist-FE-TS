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
  weight: ['400', '700'], // add weights if needed
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.supernovadental.co.uk'),
  title: 'Supernova Dental - Luxury Private Dental Care in Bridgwater',
  description:
    'Supernova Dental is a luxury private dental practice in Bridgwater, providing expert care in cosmetic and general dentistry. Now welcoming new patients. Book your consultation today!',
  keywords:
    'Supernova Dental, private dentist Bridgwater, luxury dental care, cosmetic dentistry Bridgwater, Invisalign Bridgwater, teeth whitening Bridgwater, dental implants Bridgwater, emergency dentist Bridgwater, best dentist in Bridgwater, new patients',
  openGraph: {
    title: 'Supernova Dental - Luxury Private Dental Care in Bridgwater',
    description:
      'Experience premium private dental care at Supernova Dental in Bridgwater. We offer expert cosmetic and general dentistry services and are currently accepting new patients.',
    url: 'https://www.supernovadental.co.uk/',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Supernova Dental',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/supernova-dental.appspot.com/o/Supernova_cover.png?alt=media&token=fce9e004-b06b-4348-a65f-ce6371631b15',
        width: 1080,
        height: 1080,
        alt: 'Supernova Dental - Premium Dental Care',
      },
    ],
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
        <Script
          id='Cookiebot'
          src='https://consent.cookiebot.com/uc.js'
          data-cbid='aced3b94-7f1a-4ccd-a22f-90b2c1d4bf6b'
          data-blockingmode='auto'
          type='text/javascript'
        />

        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-8M5WQJ7R5Z'></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-8M5WQJ7R5Z'); // Google Analytics ID
            gtag('config', 'AW-16737398524'); // Google Ads ID
          `}
        </Script>

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
        <Script id='meta-pixel' strategy='beforeInteractive'>
          {`
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '539899052125710');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=539899052125710&ev=PageView&noscript=1'
          />
        </noscript>
      </head>
      <body className={`${playfair.variable} ${ibmPlex.variable}`}>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5Q5NWLHG'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}
        <MainNav />
        {children}
        <FloatingMenu />

        {/* <ScrollToTopButton /> */}
        <Footer />
      </body>
    </html>
  );
}
