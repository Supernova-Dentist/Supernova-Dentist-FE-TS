import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import dummyDentist from '../../../public/assets/images/dummy-dentist.jpeg';
import dummyTeam from '../../../public/assets/images/dummy-team-2.jpeg';
import PageHero from '@/components/blocks/PageHero/PageHero';
import ImageAndText from '@/components/blocks/ImageAndText/ImageAndText';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Supernova Dental | Team',
  description: 'Meet the team behind Supernova Dental',
};

export default function Team() {
  const titleTextOne = { emphasis: 'About', main: 'Supernova Dental' };
  const titleTextTwo = { main: 'Dr Young' };

  return (
    <>
      <PageHero bgImage='bg-team-cta' title='Meet the team' description='Behind Supernova Dental' />
      <div className='mb-8 relative'>
        <ImageAndText
          src={dummyTeam}
          alt='Meet the team'
          title={titleTextOne}
          descriptionOne="We offer dental services in Tucson, AZ, ranging from general and family dentistry to cosmetic
                procedures. We use state-of-the-art technology along with trusted techniques to give you the bright and
                healthy smile you've always dreamed of."
          descriptionTwo="One of the main things that sets us apart from other dental practices is our passionate, skilled staff.
                Our team is comprised of talented dental professionals that are committed to providing personalized,
                high-quality care with service that will leave you smiling. From the front desk to the dental chair, you
                can rest assured that you're in good hands!"
        />
        <ImageAndText
          src={dummyDentist}
          alt='Dentist'
          title={titleTextTwo}
          descriptionOne="“I'm so proud of my team here at Skyline Dental. We do such great work together serving our
                patients and our community!”"
          containerBg='bg-white'
          descriptionOneColor='text-black'
          titleColor='text-black'
          imagePosition='right'
        />
      </div>
      <div className='my-24'>
        <Steps />
      </div>
      <div className='my-24'>
        <GalleryCarousel />
      </div>
      <GoogleMap />
    </>
  );
}
