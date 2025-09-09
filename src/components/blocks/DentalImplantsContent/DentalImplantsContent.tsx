import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import { DentalImplantsJourney } from '@/components/DentalImplantsJourney/DentalImplantsJourney';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import InvisalignSmileView from '@/components/InvisalignSmileView/InvisalignSmileView';
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
        serviceName='Dental Implants Journey'
        serviceChip='Dental Implant Consultation'
        serviceDescription='Discover how dental implants can restore your smile, confidence, and quality of life with a personalised treatment plan.'
        formTitle='Sign up for your Dental Implant Consultation'
        formDescription='Book a no-obligation consultation with our experienced implant team and take the first step toward a permanent solution for missing teeth.'
        imgSrc='/assets/images/sara_cbct.jpeg'
        formId='implants-enquiry-form'
        eventType='DentalImplantsLead'
      />

      <div className='from-cream to-white bg-gradient-to-b'>
        <HeroSection data={dentalImplantsHeroData} />
      </div>

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
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
