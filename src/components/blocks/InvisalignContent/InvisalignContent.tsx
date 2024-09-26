import HeroSection from '@/components/HeroSection/HeroSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import AftercareSection from '@/components/AftercareSection/AftercareSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import invisalignHeroData from './contentData/heroData';
import benefitsData from './contentData/benefitsData';
import processData from './contentData/processData';
import testimonialsData from './contentData/testimonialsData';
import aftercareData from './contentData/aftercareData';
import { tableData } from './contentData/tableData';
import { faqItems } from './contentData/faqData';
import infoData from './contentData/infoData';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';

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
      <ProcessSection id='process' data={processData} />
      <TestimonialsSection id='testimonials' data={testimonialsData} />
      <AftercareSection data={aftercareData} />
      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
