import { CamOutlineCards } from '@/components/OutlineCards/CamOutlineCards';
import DrCameranWaterDropHero from '@/components/WaterDropHeros/DrCameranArmaghaniWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';
import Head from 'next/head';

export const metadata = {
  title: 'Dr. Cameran | Expert Implantologist Bridgwater, Somerset',
  description:
    'Dr. Cameran is a leading implantologist in Bridgwater, Somerset. Specialising in single-tooth, multiple-tooth, and full-arch dental implants including All-on-4 solutions. Book your consultation today!',
  keywords:
    'female implantologist Bridgwater, implantologist Bridgwater, dental implants Bridgwater, All-on-4 implants Somerset, full arch implants Bridgwater, single-tooth implants Somerset, multiple-tooth implants Bridgwater, dental implant specialist Somerset, cosmetic implants Bridgwater, oral surgery Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Cameran',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/cameran.jpg',
  url: 'https://www.supernovadental.co.uk/team/dr-cameran',
  jobTitle: 'Implantologist',
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
        <link rel='canonical' href='https://www.supernovadental.co.uk/team/dr-cameran' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className='flex flex-col min-h-[100vh]'>
        <DrCameranWaterDropHero />
        <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <Reveal>
                <>
                  <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                    Interested in dental implants with Dr. Cameran?
                  </h2>
                  <p className='text-lg text-white md:text-xl max-w-2xl mt-2 mx-auto'>
                    Discover how advanced implant options including single-tooth, multiple-tooth, and full-arch
                    solutions like All-on-4/6 can restore your smile and confidence.
                  </p>
                  <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
                </>
              </Reveal>
              <Reveal>
                <CamOutlineCards />
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
