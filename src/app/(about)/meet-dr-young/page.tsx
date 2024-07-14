import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { faqItems } from './utils/faqItems';
import textBoxContent from './utils/textBoxContent';
import PageHero from '@/components/blocks/PageHero/PageHero';
import ImageAndText from '@/components/blocks/ImageAndText/ImageAndText';
import DefaultTextBox from '@/components/blocks/ImageAndText/DefaultTextBox';
import TextBox from '@/components/TextBoxContainer/TextBox';
import Certifications from '@/components/blocks/Certifications/Certifications';
import FAQ from '@/components/FAQ/FAQ';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
const GoogleMap = dynamic(async () => await import('../../../components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Supernova Dental | Team',
  description: 'Meet the founder of Supernova Dental',
};

export default function MeetDoctorYoung() {
  return (
    <>
      <PageHero
        bgImage='bg-meet-dr-young'
        title='Meet Dr. Young'
        description='Top Bridgewater dentist with special training in advanced general, cosmetic, and full-mouth smile restorations'
      />
      <div className='mb-8'>
        <ImageAndText
          src='/assets/images/dummy-dentist.jpeg'
          alt='Dr Young'
          textBox={
            <DefaultTextBox
              title='Dr. Young'
              emphasis='About'
              descriptionOne='Dr. James Raymond is now the fifth dentist in his family, with his father, uncle, brother, and sister sharing in the profession. He recognized at an early age the amazing gift his father was able to share with the community and the appreciation and many friendships that developed through a lifetime of service in dentistry. Dr. Raymond attended the University of North Carolina at Chapel Hill and graduated from the honors program with a B.S. in Biology and attended Tufts University School of Dental Medicine. From his initial courses at Tufts, Dr. Raymond developed a passion for esthetic and restorative dentistry and he excelled at crown, bridge, and implant prostheses. He continues his professional studies by attending local monthly study clubs, including the Spear Study Club and Pima Study Club. He is a graduate of the Kois Center in Seattle, WA, a distinction few dentists achieve.'
            />
          }
        />
        <ImageAndText src='/assets/images/meet-dr-young-2.png' alt='Dr Young' imagePosition='right'>
          <TextBox textOne={textBoxContent.textOne} textTwo={textBoxContent.textTwo} />
        </ImageAndText>
      </div>
      <div className='flex flex-col justify-center items-center px-8 py-12 md:px-16 xl:px-36'>
        <h3 className='text-center text-2xl max-w-[25rem] mb-16'>CERTIFICATIONS & PROFESSIONAL ORGANIZATIONS</h3>
        <Certifications />
      </div>
      <div className='min-h-60 flex flex-col items-center justify-center bg-gray-100 py-10'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>Frequently Asked Questions</h1>
        <div className='w-full max-w-2xl bg-cream shadow-lg rounded-lg p-6'>
          <FAQ faqItems={faqItems} />
        </div>
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
