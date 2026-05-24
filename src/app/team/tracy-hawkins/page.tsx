import { TracyOutlineCards } from '@/components/OutlineCards/TracyOutlineCards';
// import TracyTestimonials from '@/components/StackedCardTestimonials/TracyTestimonials';
import TracyWaterDropHero from '@/components/WaterDropHeros/TracyWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';
import Head from 'next/head';

export const metadata = {
  title: 'Tracy Hawkins | Dental Hygienist Bridgwater, Somerset',
  description:
    'Tracy Hawkins is a qualified dental hygienist at Supernova Dental in Bridgwater, Somerset. She specialises in oral hygiene, scale and polish treatments, gum health, stain removal, and preventive dental care. Book your appointment today!',
  keywords:
    'Tracy Hawkins, dental hygienist Bridgwater, hygienist Somerset, oral hygiene Bridgwater, scale and polish Bridgwater, gum health Somerset, stain removal Bridgwater, preventive dental care Bridgwater, Supernova Dental hygienist',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tracy Hawkins',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/tracy.jpg',
  url: 'https://www.supernovadental.co.uk/team/tracy-hawkins',
  jobTitle: 'Dental Hygienist',
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

export default function Component() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <link rel='canonical' href='https://www.supernovadental.co.uk/team/tracy-hawkins' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className='flex flex-col min-h-[100vh]'>
        <TracyWaterDropHero />

        <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <Reveal>
                <>
                  <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                    How Tracy Can Help Keep Your Smile Healthy
                  </h2>
                  <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
                </>
              </Reveal>

              <Reveal>
                <TracyOutlineCards />
              </Reveal>
            </div>
          </div>
        </section>

        {/* <TracyTestimonials /> */}
      </div>
    </>
  );
}