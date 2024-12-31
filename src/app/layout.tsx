import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import AccessibilityWidget from '@/components/blocks/AccessibilityWidget/AccessibilityWidget';
import Footer from '@/components/blocks/Footer/Footer';
import MainNav from '@/components/blocks/MainNav/MainNav';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import PromotionFooter from '@/components/PromotionFooter/PromotionFooter';
import Script from 'next/script';
import './globals.css';
import './reset.css';

const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supernova Dental - Expert Dental Care in Bridgwater',
  description:
    'Discover premium dental care in Bridgwater with Supernova Dental. Explore our services, promotions and team. Your journey to a brighter smile starts here!',
  keywords: 'Supernova Dental, dental care Bridgwater, dentist, Invisalign, teeth whitening, cosmetic dentistry',
  openGraph: {
    title: 'Supernova Dental - Expert Dental Care in Bridgwater',
    description: 'Providing premium dental services in Bridgwater. Start your journey to a brighter smile today!',
    url: 'https://www.supernovadental.co.uk',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Supernova Dental',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 500,
        height: 500,
        alt: 'Supernova Dental Logo',
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
          
            gtag('config', 'G-8M5WQJ7R5Z');
            gtag('config', 'AW-16737398524');
          `}
        </Script>
        <meta name='google-site-verification' content='6AoMb9jPZjKrBtnIYhIpHOb96jJ_QaDRMAIqUffMCMw' />
        <Script id='meta-pixel' strategy='beforeInteractive'>
          {`
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0;
              n.version='2.0'; n.queue=[]; t=b.createElement(e);
              t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0];
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
        <ScrollToTopButton />
        <FloatingMenu />
        <AccessibilityWidget />
        <PromotionFooter />
      </body>
    </html>
  );
}
