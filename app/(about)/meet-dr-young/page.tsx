import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import PageHero from '@/components/blocks/PageHero/PageHero';
import ImageAndText from '@/components/blocks/ImageAndText/ImageAndText';
import DefaultTextBox from '@/components/blocks/ImageAndText/DefaultTextBox';
import TextBox from '@/components/TextBoxContainer/TextBox';
import dummyDentist from '../../../public/assets/images/dummy-dentist.jpeg';
import dummyDentistTwo from '../../../public/assets/images/meet-dr-young-2.png';
import textBoxContent from './textBoxContent';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
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
          src={dummyDentist}
          alt='Dr Young'
          textBox={
            <DefaultTextBox
              title='Dr. Young'
              emphasis='About'
              descriptionOne='Dr. James Raymond is now the fifth dentist in his family, with his father, uncle, brother, and sister sharing in the profession. He recognized at an early age the amazing gift his father was able to share with the community and the appreciation and many friendships that developed through a lifetime of service in dentistry. Dr. Raymond attended the University of North Carolina at Chapel Hill and graduated from the honors program with a B.S. in Biology and attended Tufts University School of Dental Medicine. From his initial courses at Tufts, Dr. Raymond developed a passion for esthetic and restorative dentistry and he excelled at crown, bridge, and implant prostheses. He continues his professional studies by attending local monthly study clubs, including the Spear Study Club and Pima Study Club. He is a graduate of the Kois Center in Seattle, WA, a distinction few dentists achieve.'
            />
          }
        />
        <ImageAndText src={dummyDentistTwo} alt='Dr Young' imagePosition='right'>
          <TextBox textOne={textBoxContent.textOne} textTwo={textBoxContent.textTwo} />
        </ImageAndText>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-center text-2xl max-w-[25rem] mb-16'>CERTIFICATIONS & PROFESSIONAL ORGANIZATIONS</h3>
        <div className='flex flex-wrap flex-col md:flex-row gap-4 px-16'>
          <div className='flex flex-col gap-4 flex-1'>
            <h4 className='text-2xl font-light'>American Academy of Cosmetic Dentistry</h4>
            <p className='font-light text-lg'>
              The American Academy of Cosmetic Dentistry (AACD) strives to advance excellence in the field of cosmetic
              dentistry. AACD members have support from other experts around the globe. The organization is also at the
              cutting edge of dental technology.
            </p>
          </div>
          <div className='flex flex-col gap-3 flex-1 mb-8'>
            <h4 className='text-2xl font-light'>Digital Smile Design</h4>
            <p className='font-light text-lg'>
              DSD is a planning protocol that allows for complete analysis of the patient&apos;s facial and dental
              structures through state-of-the-art videography, photo, and 3d imaging digital technology. The DSD
              approach is considered the most modern, patient-centered process for smile design and transformation.
            </p>
          </div>
          <div className='flex flex-col gap-3 flex-1'>
            <h4 className='text-2xl font-light'>American Dental Association</h4>
            <p className='font-light text-lg'>
              The American Dental Association (ADA) is committed to driving dentistry forward with innovation and a
              focus on patient care. Dr. Raymond is an ADA dentist and is also a member of the Arizona Dental
              Association (AZDA).
            </p>
          </div>
          <div className='flex flex-col gap-3 flex-1'>
            <h4 className='text-2xl font-light'>Continuing Dental Education</h4>
            <p className='font-light text-lg'>
              In the constantly evolving field of dentistry, continued education is important. Dr. Raymond attends
              various courses at Spear Education, the Kois Center, and other learning centers nationwide. He uses
              advanced techniques and provides his patients with the highest standard of care
            </p>
          </div>
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
