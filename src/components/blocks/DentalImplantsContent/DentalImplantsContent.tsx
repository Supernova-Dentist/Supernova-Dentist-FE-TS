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
import advantagesData from './contentData/advantagesData';
import useCaseData from './contentData/useCaseData';
import benefitsData from './contentData/benefitsData';
import processData from './contentData/processData';
import testimonialsData from './contentData/testimonialsData';
import afterCareData from './contentData/afterCareData';
import { tableData } from './contentData/tableData';
import { faqItems } from './contentData/faqData';
import infoData from './contentData/infoData';

export default function DentalImplantsContent() {
  return (
    <>
      <HeroSection data={dentalImplantsHeroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection data={infoData} advantagesData={advantagesData} useCaseData={useCaseData} />
      <BenefitSection
        title='Who Can Benefit from Dental Implants?'
        description='Dental implants offer a reliable solution for replacing missing teeth and can significantly enhance your oral
          health and quality of life. They are ideal for a variety of patients:'
        data={benefitsData}
      />
      <ProcessSection
        title='Your Dental Implant Process'
        description="Our comprehensive dental implant process is designed to ensure a successful and comfortable experience. Here's how we guide you through each step:"
        data={processData}
      />
      <TestimonialsSection data={testimonialsData} />
      <AftercareSection
        title='Dental Implant After Care Instructions'
        descriptions={[
          'Proper care is essential to ensure the success and longevity of your dental implants. Follow these guidelines to maintain optimal oral health and implant function:',
          'Some initial discomfort or swelling is normal following the placement of dental implants. If you experience persistent pain, unusual swelling, or other issues, contact your dentist promptly.',
        ]}
        data={afterCareData}
      />
      <ComparisonSection
        title='Dental Restoration Comparison'
        description='Compare dental implants with bridges and dentures to find the best option for your tooth replacement needs.'
        data={tableData}
      />
      <FaqSection faqItems={faqItems} />
    </>
  );
}
