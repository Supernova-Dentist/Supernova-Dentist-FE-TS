import { AdamOutlineCards } from '@/components/OutlineCards/AdamOutlineCards';
import DrJacquelineAmarinWaterDropHero from '@/components/WaterDropHeros/DrJacquelineAmarinWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';
import StackedCardTestimonials from '@/components/StackedCardTestimonials/StackedCardTestimonials';
import Head from 'next/head';

export const metadata = {
  title: 'Dr. Jacqueline Amarin | General & Restorative Dentist Bridgwater, Somerset',
  description:
    'Dr. Jacqueline Amarin is a skilled general and restorative dentist at Supernova Dental in Bridgwater, Somerset. Expert in teeth whitening, fillings, crowns, and preventative care. Book your appointment today!',
  keywords:
    'Dr. Jacqueline Amarin, female dentist Bridgwater, general dentist Somerset, restorative dentist Bridgwater, teeth whitening Bridgwater, dental fillings Somerset, dental crowns Bridgwater, preventative dental care Bridgwater, private dentist Somerset, cosmetic dentist Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Jacqueline Amarin',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/jackie.jpeg',
  url: 'https://www.supernovadental.co.uk/team/dr-jacqueline-amarin',
  jobTitle: 'General & Restorative Dentist',
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
        <link rel='canonical' href='https://www.supernovadental.co.uk/team/dr-jacqueline-amarin' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className='flex flex-col min-h-[100vh]'>
        <DrJacquelineAmarinWaterDropHero />

        <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <Reveal>
                <>
                  <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                    Have an enquiry about Jacqueline&apos;s services? Enquire below!
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
