import AftercareSection from '@/components/AftercareSection/AftercareSection';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import ServicePageWrapper from '@/hoc/ServicePageWrapper';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import aftercareData from './contentData/aftercareData';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import invisalignHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { InvisalignJourney } from './contentData/processData';
import { tableData } from './contentData/tableData';
import testimonialsData from './contentData/testimonialsData';

export default function InvisalignContent() {
  return (
    <>
      <HeroSection data={invisalignHeroData} />

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <div className='block'>
        <SlideTabsExample />
      </div>
      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />
      <InvisalignJourney id='process' />
      {/* <TestimonialsSection id='testimonials' data={testimonialsData} /> */}
      {/* <AftercareSection data={aftercareData} /> */}
      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
