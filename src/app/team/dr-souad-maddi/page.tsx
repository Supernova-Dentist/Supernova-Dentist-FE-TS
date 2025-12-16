import { AdamOutlineCards } from '@/components/OutlineCards/AdamOutlineCards';
import DrSouadMaddiWaterDropHero from '@/components/WaterDropHeros/DrSouadMaddiWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';
import Head from 'next/head';

export const metadata = {
  title: 'Dr Souad Maddi | Cosmetic, General & Restorative Dentist Bridgwater, Somerset',
  description:
    'Dr Souad Maddi is a cosmetic, general and restorative dentist at Supernova Dental Practice in Bridgwater, Somerset. Expert in smile design, minimally invasive cosmetic dentistry, and natural-looking smile enhancements. Book your appointment today!',
  keywords:
    'Dr Souad Maddi, cosmetic dentist Bridgwater, general dentist Somerset, restorative dentist Bridgwater, smile design Bridgwater, cosmetic dentistry Somerset, private dentist Bridgwater, teeth whitening Bridgwater, minimally invasive dentistry',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr Souad Maddi',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/dr-souad-maddi.jpeg',
  url: 'https://www.supernovadental.co.uk/team/dr-souad-maddi',
  jobTitle: 'Cosmetic, General & Restorative Dentist',
  worksFor: {
    '@type': 'Organization',
    name: 'Supernova Dental',
    url: 'https://www.supernovadental.co.uk',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    addressRegion: 'Somerset',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 1278 228665',
    contactType: 'Customer Service',
    email: 'enquiries@supernovadental.co.uk',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK'],
    availableLanguage: ['English', 'Arabic', 'French', 'Spanish'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default async function Component() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <link rel='canonical' href='https://www.supernovadental.co.uk/team/dr-souad-maddi' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className='flex flex-col min-h-[100vh]'>
        <DrSouadMaddiWaterDropHero />

        <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <Reveal>
                <>
                  <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                    Have an enquiry about Souad&apos;s services? Enquire below!
                  </h2>
                  <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
                </>
              </Reveal>
              <Reveal>
                <AdamOutlineCards />
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
