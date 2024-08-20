import HeroSection from '@/components/HeroSection/HeroSection';
import invisalignHeroData from './heroData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import invisalignAdvantagesData from './advantagesData';
import invisalignUseCaseData from './useCaseData';
import BenefitSection from '../../BenefitSection/BenefitSection';
import invisalignBenefitData from './benefitsData';
import ProcessSection from '../../ProcessSection/ProcessSection';
import processData from './processData';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import testimonialsDats from './testimonialsDats';
import AftercareSection from '../../AftercareSection/AftercareSection';
import aftercareData from './aftercareData';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import { tableData } from './tableData';
import FaqSection from '@/components/FaqSection/FaqSection';
import { faqItems } from './faqData';

export default function InvisalignContent() {
  return (
    <>
      <HeroSection data={invisalignHeroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection
        title='What is Invisalign?'
        descriptions={[
          'Invisalign is a popular and effective orthodontic treatment that uses a series of clear, removable aligners to gradually straighten your teeth. These aligners are custom-made to fit your teeth and are virtually invisible, making them a discreet option for achieving a straighter smile.',
          'Invisalign aligners are made from a comfortable, BPA-free plastic that won’t irritate your cheeks and gums like traditional metal braces. With Invisalign, you can achieve a beautiful smile without the inconvenience of traditional braces.',
        ]}
        advantagesTitle='Advantages of Invisalign:'
        advantagesData={invisalignAdvantagesData}
        useCaseTitle='Use Cases of Invisalign:'
        useCaseData={invisalignUseCaseData}
      />
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
