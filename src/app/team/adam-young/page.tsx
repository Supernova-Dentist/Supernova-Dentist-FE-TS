import { AdamOutlineCards } from '@/components/OutlineCards/AdamOutlineCards';
import AdamWaterDropHero from '@/components/WaterDropHeros/AdamWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';
import Head from 'next/head';

export const metadata = {
  title: 'Adam | Operations Director | Supernova Dental Bridgwater, Somerset',
  description:
    'Meet Adam, the Operations Director at Supernova Dental in Bridgwater, Somerset. Adam manages the patient journey, dental software, website, and practice operations to ensure a seamless experience.',
  keywords:
    'Adam Supernova Dental, operations director Bridgwater, dental practice operations, dental software manager, dental website developer, dental IT specialist, dental marketing, patient journey manager, Supernova Dental team, Bridgwater dental practice, dental practice website',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adam',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/adam.jpg',
  url: 'https://www.supernovadental.co.uk/team/adam-young',
  jobTitle: 'Operations Director',
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
    availableLanguage: 'English',
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
        <link rel='canonical' href='https://www.supernovadental.co.uk/team/adam' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className='flex flex-col min-h-[100vh]'>
        <AdamWaterDropHero />
        <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <Reveal>
                <>
                  <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                    Got a question? We can help!
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
