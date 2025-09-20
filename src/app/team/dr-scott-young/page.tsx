import fetchInstagramPosts from '@/actions/instagram';
// import InstagramPostGrid from '@/app/social/utils/InstagramPostGrid';
import { ScottOutlineCards } from '@/components/OutlineCards/ScottOutlineCards';
import StackedCardTestimonials from '@/components/StackedCardTestimonials/StackedCardTestimonials';
import ScottWaterDropHero from '@/components/WaterDropHeros/ScottWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';
import Head from 'next/head';

export const metadata = {
  title: 'Dr. Scott Young | Invisalign & Principal Dentist Bridgwater, Somerset',
  description:
    'Dr. Scott Young is the principal dentist and owner at Supernova Dental in Bridgwater, Somerset. Experienced Invisalign provider, cosmetic dentistry specialist, and committed to transforming smiles. Book your consultation today!',
  keywords:
    'Invisalign Bridgwater, principal dentist Bridgwater, cosmetic dentist Somerset, Dr. Scott Young, invisible braces Bridgwater, teeth straightening Somerset, orthodontics Bridgwater, dental practice owner Bridgwater, smile transformation Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Scott Young',
  image: 'https://www.supernovadental.co.uk/assets/images/Headshots/scott_headshot.jpeg',
  url: 'https://www.supernovadental.co.uk/team/dr-scott-young',
  jobTitle: 'Principal Dentist & Invisalign Provider',
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
  // const instagramPosts = await fetchInstagramPosts('scott-young');
  // const username = instagramPosts?.length > 0 ? instagramPosts[0].username : 'Our Instagram';
  // const instagramProfileUrl = `https://www.instagram.com/${username}/`;

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <link rel='canonical' href='https://www.supernovadental.co.uk/team/dr-scott-young' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className='flex flex-col min-h-[100vh]'>
        <ScottWaterDropHero />

        <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <Reveal>
                <>
                  <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                    How Scott Can Transform Your Smile
                  </h2>
                  <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
                </>
              </Reveal>
              <Reveal>
                <ScottOutlineCards />
              </Reveal>
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
            <Reveal>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>Hear from Scott</h2>
                <hr className='bg-gold h-1 w-16 mx-auto' />
                <p className='max-w-[600px] text-muted-foreground md:text-xl mx-auto'>
                  Get to know Dr. Scott Young, his journey, and his passion for aesthetics and dentistry.
                </p>
              </div>
            </Reveal>
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-96 aspect-[1/1] relative mx-auto'>
                <video
                  className='absolute top-0 left-0 w-full h-full rounded-lg'
                  controls
                  preload='metadata'
                  poster={'/assets/images/scott_intro_placeholder.png'}
                >
                  <source src={'/assets/videos/scott_intro.mp4'} type='video/mp4' />
                  Sorry, your browser doesn&apos;t support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* {instagramPosts?.length > 0 ? (
          <InstagramPostGrid posts={instagramPosts} />
        ) : (
          <span className='flex justify-center mt-20'>No Instagram posts yet. Check back later.</span>
        )} */}

        <StackedCardTestimonials />
      </div>
    </>
  );
}
