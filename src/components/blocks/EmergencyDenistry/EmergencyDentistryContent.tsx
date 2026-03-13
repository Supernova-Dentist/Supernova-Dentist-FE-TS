import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
// import EmergencyDentistryView from '@/components/EmergencyDentistryView/EmergencyDentistryView';
import { EmergencyDentistryJourney } from '@/components/EmergencyDentistryJourney/EmergencyDentistryJourney';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import heroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';
import EmergencyFormSelector from './EmergencyFormSelector';
import EmergencyHero from './utils/EmergencyHero';
import EmergencyHeroSection from './utils/EmergencyHeroSection';

export default function EmergencyDentistryContent() {
  return (
    <>
      <EmergencyHero />

      <EmergencyFormSelector />

      <div className=''>
        <EmergencyHeroSection data={heroData} />
        {/* <EmergencyDentistryView id='emergencyView' /> */}
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
