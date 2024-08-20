import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import AftercareSection from '@/components/AftercareSection/AftercareSection';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import dentalImplantsHeroData from './heroData';
import advantagesData from './advantagesData';
import useCaseData from './useCaseData';
import benefitBoxData from './benefitsData';
import processBoxData from './processBoxData';
import testimonialsData from './testimonialsData';
import afterCareData from './afterCareData';
import { tableData } from './tableData';
import { faqItems } from './faqData';

export default function DentalImplantsContent() {
  return (
    <>
      <HeroSection data={dentalImplantsHeroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection
        title='What are Dental Implants?'
        descriptions={[
          'Dental implants are a modern solution for replacing missing teeth. They consist of a titanium post that is surgically inserted into the jawbone, which acts as a replacement root for a new tooth. This procedure provides a stable and durable foundation for attaching crowns, bridges, or dentures.',
          'Implants offer a natural look and feel, effectively restoring both the function and aesthetics of your smile. They can be used to replace a single tooth, multiple teeth, or even support full dentures. Our expert team ensures a precise and comfortable procedure with long-lasting results.',
        ]}
        advantagesTitle='Advantages of Dental Implants:'
        advantagesData={advantagesData}
        useCaseTitle='Use Cases of Dental Implants'
        useCaseData={useCaseData}
      />
      <BenefitSection
        title='Who Can Benefit from Dental Implants?'
        description='Dental implants offer a reliable solution for replacing missing teeth and can significantly enhance your oral
          health and quality of life. They are ideal for a variety of patients:'
        data={benefitBoxData}
      />
      <ProcessSection
        title='Your Dental Implant Process'
        description="Our comprehensive dental implant process is designed to ensure a successful and comfortable experience. Here's how we guide you through each step:"
        data={processBoxData}
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
