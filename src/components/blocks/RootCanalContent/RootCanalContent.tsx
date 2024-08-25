import HeroSection from '@/components/HeroSection/HeroSection';
import heroData from './contentData/heroData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InfoSection from '@/components/InfoSection/InfoSection';
import infoData from './contentData/infoData';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import benefitsData from './contentData/benefitsData';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import processData from './contentData/processData';

import FaqSection from '@/components/FaqSection/FaqSection';
import { faqItems } from './contentData/faqData';

export default function RootCanalContent() {
  return (
    <>
      <HeroSection data={heroData} />
      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <InfoSection data={infoData} />
      <BenefitSection data={benefitsData} />
      <ProcessSection data={processData} />
      <FaqSection faqItems={faqItems} />
    </>
  );
}
