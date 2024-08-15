import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import HeroSection from './HeroSection/HeroSection';
import InfoSection from './InfoSection/InfoSection';
import BenefitSection from './BenefitSection/BenefitSection';
import ProcessSection from './ProcessSection/ProcessSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import AftercareSection from './AftercareSection/AftercareSection';
import ComparisonSection from './ComparisonSection/ComparisonSection';
import FaqSection from './FaqSection/FaqSection';

export default function DentalImplantsContent() {
  return (
    <>
      <HeroSection />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection />
      <BenefitSection />
      <ProcessSection />
      <TestimonialsSection />
      <AftercareSection />
      <ComparisonSection />
      <FaqSection />
    </>
  );
}
