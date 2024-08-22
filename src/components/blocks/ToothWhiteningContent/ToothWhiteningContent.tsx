import HeroSection from '@/components/HeroSection/HeroSection';
import heroData from './contentData/heroData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import infoData from './contentData/infoData';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import benefitsData from './contentData/benefitsData';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import processData from './contentData/processData';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import testimonialsData from './contentData/testimonialsData';
import AftercareSection from '@/components/AftercareSection/AftercareSection';
import aftercareData from './contentData/aftercareData';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import tableData from './contentData/TableData';
import FaqSection from '@/components/FaqSection/FaqSection';
import { faqItems } from './contentData/faqData';

export default function ToothWhiteningContent() {
  return (
    <>
      <HeroSection data={heroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection data={infoData} />
      <BenefitSection data={benefitsData} />
      <ProcessSection data={processData} />
      <TestimonialsSection data={testimonialsData} />
      <AftercareSection data={aftercareData} />
      <ComparisonSection data={tableData} />
      <FaqSection faqItems={faqItems} />
    </>
  );
}
