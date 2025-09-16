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

        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-8M5WQJ7R5Z' />
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
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Q5NWLHG"
            height="0"
            width="0"
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
