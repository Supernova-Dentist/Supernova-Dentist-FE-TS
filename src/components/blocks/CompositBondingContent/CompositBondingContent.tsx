import HeroSection from '@/components/HeroSection/HeroSection';
import heroData from './contentData/heroData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import AftercareSection from '@/components/AftercareSection/AftercareSection';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import advantageData from './contentData/advantageData';
import useCaseData from './contentData/useCaseData';
import benefitsData from './contentData/benefitsData';
import processData from './contentData/processData';
import testimonialsData from './contentData/testimonialsData';
import aftercareData from './contentData/aftercareData';
import { tableData } from './contentData/tableData';
import { faqItems } from './contentData/faqData';

export default function CompositBondingContent() {
  return (
    <>
      <HeroSection data={heroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection
        title='What is Composite Bonding?'
        descriptions={[
          'Composite bonding is a highly versatile and popular cosmetic dental procedure used to enhance the appearance of teeth. It involves applying a tooth-colored resin material to the surface of the teeth, which is then shaped and polished to match the surrounding teeth for a natural look.',
          'This treatment has been in use for several decades and has a well-established safety record. Advances in dental materials and techniques have made this procedure more effective and longer-lasting than ever before.',
        ]}
        advantagesTitle='Advantages of Composite Bonding:'
        advantagesData={advantageData}
        useCaseTitle='Use Cases of Composite Bonding:'
        useCaseData={useCaseData}
      />
      <BenefitSection
        title='Who Can Benefit from Composite Bonding?'
        description='Composite bonding is a versatile treatment that can benefit a wide range of patients:'
        data={benefitsData}
      />
      <ProcessSection
        title='Your Composite Bonding Process'
        description='Our experienced dentists follow a simple and straightforward process to ensure your composite bonding
            treatment is comfortable and effective:'
        data={processData}
      />
      <TestimonialsSection data={testimonialsData} />
      <AftercareSection
        title='Composite Bonding Aftercare Instructions'
        descriptions={[
          'Proper aftercare is crucial to ensure the longevity and appearance of your composite bonding. Here are some tips to help you maintain your new smile:',
          'Common side effects of composite bonding may include slight sensitivity to hot and cold foods or drinks shortly after the procedure. This is usually temporary and should resolve within a few days. If you experience any prolonged discomfort or notice any damage to the bonded area, contact your dentist promptly.',
        ]}
        data={aftercareData}
      />
      <ComparisonSection
        title='Treatment Comparison'
        description='  Compare our composite bonding treatment with other common dental treatments to find the best option for your needs.'
        data={tableData}
      />
      <FaqSection faqItems={faqItems} />
    </>
  );
}
