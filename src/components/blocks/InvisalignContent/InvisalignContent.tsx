import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import InvisalignSmileView from '@/components/InvisalignSmileView/InvisalignSmileView';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import invisalignHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { InvisalignJourney } from './contentData/processData';
import { tableData } from './contentData/tableData';

export default function InvisalignContent() {
  return (
    <>
      <div className='from-white to-cream bg-gradient-to-b'>
        <HeroSection data={invisalignHeroData} />
        <InvisalignSmileView id='smileView' />
      </div>

      <ServiceForm
        serviceName='Invisalign'
        serviceChip='Free Invisalign Consultation'
        serviceDescription='Get a personalised Invisalign treatment plan and discover how clear aligners can transform your smile.'
        formTitle='Sign up for your Free Invisalign Consultation'
        formDescription='Sign up now for a no-obligation consultation with our expert team, and take the first step towards your perfect smile with Invisalign clear aligners.'
      />

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>

      {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}
      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />
   
      <InvisalignJourney id='journey' />
     
      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
