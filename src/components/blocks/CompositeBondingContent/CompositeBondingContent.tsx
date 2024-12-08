import AftercareSection from '@/components/AftercareSection/AftercareSection';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import aftercareData from './contentData/aftercareData';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import heroData from './contentData/heroData';
import infoData from './contentData/infoData';
import processData from './contentData/processData';
import { tableData } from './contentData/tableData';
import testimonialsData from './contentData/testimonialsData';

export default function CompositeBondingContent() {
  return (
    <>
      <HeroSection data={heroData} />
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