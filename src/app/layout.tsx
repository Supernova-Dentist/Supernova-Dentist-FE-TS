import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import TidioChat from '@/components/blocks/TidioChat/TideoChat';

import AccessibilityWidget from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import CrispChat from '@/components/blocks/CrispChat/CrispChat';
import Footer from '@/components/blocks/Footer/Footer';
import MainNav from '@/components/blocks/MainNav/MainNav';
import PromotionFooter from '@/components/PromotionFooter/PromotionFooter';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import Script from 'next/script';
import './globals.css';
import './reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supernova Dental - Expert Dental Care in Bridgwater | 50% Off First Exam & Hygiene Appointment',
  description:
    'Join Supernova Dental in Bridgwater for exclusive offers: 50% off your first dental exam and hygiene appointment, plus special Invisalign deals. Book today and start your journey to a healthier smile!',
  keywords:
    'Supernova Dental, dental exam offer, dental hygiene offer, Invisalign Bridgwater, dental practice Bridgwater, teeth whitening Bridgwater, healthy smile, dentist Bridgwater, best dentist in Bridgwater, cosmetic dentistry Bridgwater, affordable Invisalign',
  openGraph: {
    title: 'Supernova Dental - Exclusive Offers for New Patients',
    description:
      'Join Supernova Dental in Bridgwater with exclusive offers: 50% off your first dental exam and hygiene appointment and special Invisalign deals. Book today!',
    url: 'https://www.supernovadental.co.uk/',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Supernova Dental',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/supernova-dental.appspot.com/o/Supernova_Opening_Post.jpeg?alt=media&token=06c6642d-57dc-48a2-820d-0a332febe798',
        width: 1080,
        height: 1080,
        alt: 'Supernova Dental - Smile Brighter Promotion',
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
      <body className={inter.className}>
        <MainNav />
        {children}
        <Footer />
        <div aria-hidden='true'>
          {/* <CrispChat /> */}
          <TidioChat />
        </div>
        <ScrollToTopButton />
        <div aria-hidden='true'>{/* <CrispChat /> */}</div>
        <AccessibilityWidget />
        {/* <ScrollToTopButton /> */}
        <PromotionFooter />
      </body>
    </html>
  );
}
