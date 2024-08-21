import HeroSection from '@/components/HeroSection/HeroSection';
import heroData from './contentData/heroData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import infoData from './contentData/infoData';
import useCaseData from './contentData/useCaseData';
import advantagesData from './contentData/advantagesData';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import benefitsData from './contentData/benefitsData';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import processData from './contentData/processData';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import testimonialsData from './contentData/testimonialsData';
import AftercareSection from '@/components/AftercareSection/AftercareSection';
import aftercareData from './contentData/aftercareData';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import { tableData } from './contentData/TableData';
import FaqSection from '@/components/FaqSection/FaqSection';
import { faqItems } from './contentData/faqData';

export default function ToothWhiteningContent() {
  return (
    <>
      <HeroSection data={heroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection data={infoData} useCaseData={useCaseData} advantagesData={advantagesData} />
      <BenefitSection
        title='Who Can Benefit from Tooth Whitening?'
        description='Tooth whitening is a popular cosmetic treatment that can enhance your smile and boost your confidence. It’s
            ideal for a variety of patients:'
        data={benefitsData}
      />
      <ProcessSection
        title='Your Tooth Whitening Process'
        description='Our professional tooth whitening process is designed to safely and effectively brighten your smile. Here’s
            how we ensure a smooth and successful treatment:'
        data={processData}
      />
      <TestimonialsSection data={testimonialsData} />
      <AftercareSection
        title='Tooth Whitening Aftercare Instructions'
        descriptions={[
          'Proper aftercare is crucial to ensure the longevity and appearance of your tooth whitening results. Follow these tips to keep your smile bright and healthy:',
          "It's common to experience some temporary sensitivity to hot or cold foods and beverages after tooth whitening. This sensitivity usually subsides within a few days. If you experience prolonged discomfort or any other issues, contact your dentist for advice.",
        ]}
        data={aftercareData}
      />
      <ComparisonSection
        title='Cosmetic Treatment Comparison'
        description='Compare our professional tooth whitening with veneers and teeth bonding to discover the ideal solution for
            your smile enhancement.'
        data={tableData}
      />
      <FaqSection faqItems={faqItems} />
    </>
  );
}
