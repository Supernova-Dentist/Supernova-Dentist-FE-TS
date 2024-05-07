import type { Metadata } from 'next';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import dynamic from 'next/dynamic';
import PageHero from '@/components/blocks/PageHero/PageHero';
import ImageAndText from '@/components/blocks/ImageAndText/ImageAndText';
import dummyDentist from '../../../public/assets/images/dummy-dentist.jpeg';
import dummyDentistTwo from '../../../public/assets/images/meet-dr-young-2.png';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Supernova Dental | Team',
  description: 'Meet the founder of Supernova Dental',
};

export default function MeetDoctorYoung() {
  const titleText = { emphasis: 'About', main: 'Dr. Young' };

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
          title={titleText}
          descriptionOne='Dr. James Raymond is now the fifth dentist in his family, with his father, uncle, brother, and sister sharing in the profession. He recognized at an early age the amazing gift his father was able to share with the community and the appreciation and many friendships that developed through a lifetime of service in dentistry. Dr. Raymond attended the University of North Carolina at Chapel Hill and graduated from the honors program with a B.S. in Biology and attended Tufts University School of Dental Medicine. From his initial courses at Tufts, Dr. Raymond developed a passion for esthetic and restorative dentistry and he excelled at crown, bridge, and implant prostheses. He continues his professional studies by attending local monthly study clubs, including the Spear Study Club and Pima Study Club. He is a graduate of the Kois Center in Seattle, WA, a distinction few dentists achieve.'
        />
        <ImageAndText
          src={dummyDentistTwo}
          alt='Dr Young'
          descriptionOne='Beyond his work at the office, Dr. Raymond is passionate about his involvement in dental outreach programs, both within the United States and abroad. During his most recent mission trip abroad, Dr. Raymond spent 10 days in the Dominican Republic, providing free dental care to underserved children. He also serves on the board of the Arizona Dental Foundation and spearheaded the dental charity TDC Cares (Tucson Dental Community Cares) providing services to veterans and job-seeking homeless citizens of Tucson. Learn more about Skyline Dental’s charity and community efforts here.'
          descriptionTwo='On the weekends, you will find Dr. Raymond either trail running in the Catalinas or sitting atop Mt. Lemmon, pondering the existence of pine trees in the desert with his wife, Jessie, and dog, Rudy. Apart from spending time with his family, Dr. Raymond loves traveling, yoga, surfing, and golf.'
          imagePosition='right'
          containerBg='bg-white'
          titleColor='text-black'
          descriptionColor='text-black'
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
