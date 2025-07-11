import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
// import EmergencyDentistryView from '@/components/EmergencyDentistryView/EmergencyDentistryView';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import heroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';
import { EmergencyDentistryJourney } from '@/components/EmergencyDentistryJourney/EmergencyDentistryJourney';
import EmergencyHero from './utils/EmergencyHero';
import EmergencyFormSelector from './EmergencyFormSelector';

export default function EmergencyDentistryContent() {
  return (
    <>
      <EmergencyHero />
      
      <EmergencyFormSelector />

      <div className='from-cream to-white bg-gradient-to-b'>
        <HeroSection data={heroData} />
        {/* <EmergencyDentistryView id='emergencyView' /> */}
      </div>

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>

      {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}
      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />

      <EmergencyDentistryJourney />

      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
