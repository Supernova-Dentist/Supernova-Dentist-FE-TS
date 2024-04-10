import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNav from './components/blocks/MainNav/MainNav';
import Footer from './components/blocks/Footer/Footer';
import CrispChat from './components/blocks/CrispChat/CrispChat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supernova Dental',
  description: 'Description here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainNav />
        {children}
        <Footer />
        <div aria-hidden='true'>
          <CrispChat />
        </div>
      </body>
    </html>
  );
}
