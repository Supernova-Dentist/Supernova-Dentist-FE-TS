import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import { DentalImplantsJourney } from '@/components/DentalImplantsJourney/DentalImplantsJourney';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import InvisalignSmileView from '@/components/InvisalignSmileView/InvisalignSmileView';
import SaraSection from '@/components/SaraSection/SaraSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import dentalImplantsHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function DentalImplantsContent() {
  return (
    <>
      <ServiceForm
        serviceName='Dental Implants Journey – Full-Arch (All-on-4) in Somerset'
        serviceChip='Dental Implant Consultation'
        serviceDescription='Discover single-tooth implants and advanced full-arch solutions such as All-on-4 delivered by our experienced implantologist at Supernova Dental in Bridgwater, Somerset.'
        formTitle='Register for your Dental Implant Consultation'
        formDescription='Book a no-obligation consultation with our expert implantologist, and explore single implants or full-arch options like All-on-4 for a permanent, natural-looking smile.'
        imgSrc='/assets/images/dental-implants-supernova-dental-bridgwater.webp'
        formId='implants-enquiry-form'
        eventType='DentalImplantsLead'
      />
      {/* <div className='bg-cream'>
        <SaraSection />
      </div> */}

      <div className='from-cream to-white bg-gradient-to-b'>
        <HeroSection data={dentalImplantsHeroData} />
      </div>

      {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}
      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />

      <DentalImplantsJourney />

      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
