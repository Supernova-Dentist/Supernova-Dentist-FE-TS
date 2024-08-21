import HeroSection from '@/components/HeroSection/HeroSection';
import invisalignHeroData from './contentData/heroData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import invisalignAdvantagesData from './contentData/advantagesData';
import invisalignUseCaseData from './contentData/useCaseData';
import BenefitSection from '../../BenefitSection/BenefitSection';
import invisalignBenefitData from './contentData/benefitsData';
import ProcessSection from '../../ProcessSection/ProcessSection';
import processData from './contentData/processData';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import testimonialsDats from './contentData/testimonialsDats';
import AftercareSection from '../../AftercareSection/AftercareSection';
import aftercareData from './contentData/aftercareData';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import { tableData } from './contentData/tableData';
import FaqSection from '@/components/FaqSection/FaqSection';
import { faqItems } from './contentData/faqData';
import infoData from './contentData/infoData';

export default function InvisalignContent() {
  return (
    <>
      <HeroSection data={invisalignHeroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection data={infoData} advantagesData={invisalignAdvantagesData} useCaseData={invisalignUseCaseData} />
      <BenefitSection
        title='Who Can Benefit from Invisalign?'
        description=' Invisalign is a versatile treatment suitable for almost everyone looking to improve their smile:'
        data={invisalignBenefitData}
      />
      <ProcessSection
        title='Your Invisalign Process'
        description='Our experienced dentists follow a simple and straightforward process to ensure your Invisalign treatment is comfortable and effective:'
        data={processData}
      />
      <TestimonialsSection data={testimonialsDats} />
      <AftercareSection
        title='Invisalign Aftercare Instructions'
        descriptions={[
          'Proper aftercare is crucial to ensure the effectiveness and longevity of your Invisalign treatment. Here are some tips to help you maintain your aligners and achieve the best results:',
          'Common side effects of Invisalign may include slight discomfort or pressure as your teeth adjust. This is usually temporary and should resolve within a few days. If you experience any prolonged discomfort or notice any issues with your aligners, contact your dentist promptly.',
        ]}
        data={aftercareData}
      />
      <ComparisonSection
        title='Treatment Comparison'
        description='Compare Invisalign with other common orthodontic treatments to find the best option for your needs.'
        data={tableData}
      />
      <FaqSection faqItems={faqItems} />
    </>
  );
}
