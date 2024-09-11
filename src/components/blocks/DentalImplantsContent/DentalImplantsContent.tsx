import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import AftercareSection from '@/components/AftercareSection/AftercareSection';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import dentalImplantsHeroData from './contentData/heroData';
import benefitsData from './contentData/benefitsData';
import processData from './contentData/processData';
import testimonialsData from './contentData/testimonialsData';
import afterCareData from './contentData/afterCareData';
import { tableData } from './contentData/tableData';
import { faqItems } from './contentData/faqData';
import infoData from './contentData/infoData';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';

export default function DentalImplantsContent() {
  return (
    <>
      <HeroSection data={dentalImplantsHeroData} />
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
      <AftercareSection data={afterCareData} />
      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
