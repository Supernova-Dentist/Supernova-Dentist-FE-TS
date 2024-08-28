import type { Metadata } from 'next';
import textBoxContent from './textBoxContent';
import PageHero from '@/components/blocks/PageHero/PageHero';
import ImageAndText from '@/components/blocks/ImageAndText/ImageAndText';
import DefaultTextBox from '@/components/blocks/ImageAndText/DefaultTextBox';
import TextBox from '@/components/TextBoxContainer/TextBox';
import Button from '@/components/Button/Button';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';

export const metadata: Metadata = {
  title: 'Supernova Dental | Team',
  description: 'Meet the team behind Supernova Dental',
};

export default function Team() {
  return (
    <>
      <PageHero bgImage='bg-team-cta' title='Meet the team' description='Behind Supernova Dental' />
      <div className='mb-8 relative'>
        <ImageAndText
          src='/assets/images/dummy-team-2.jpeg'
          alt='Meet the team'
          textBox={
            <DefaultTextBox
              title='Supernova Dental'
              emphasis='About'
              descriptionOne="We offer dental services in Tucson, AZ, ranging from general and family dentistry to cosmetic
          procedures. We use state-of-the-art technology along with trusted techniques to give you the bright and
          healthy smile you've always dreamed of."
              descriptionTwo="One of the main things that sets us apart from other dental practices is our passionate, skilled staff.
          Our team is comprised of talented dental professionals that are committed to providing personalized,
          high-quality care with service that will leave you smiling. From the front desk to the dental chair, you
          can rest assured that you're in good hands!"
            />
          }
        />
        <ImageAndText src='/assets/images/dummy-dentist.jpeg' alt='Dentist' imagePosition='right'>
          <TextBox title={textBoxContent.title} textOne={textBoxContent.textOne}>
            <Button className='text-xl sm:w-fit w-full mt-8' text="Read Dr. Young's bio" />
          </TextBox>
        </ImageAndText>
      </div>
      <div className='my-24'>
        <Steps />
      </div>
      <div className='my-24'>
        <GalleryCarousel />
      </div>
      <DynamicGoogleMap />
    </>
  );
}
