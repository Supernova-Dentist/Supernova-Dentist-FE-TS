import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { HygieneJourney } from '../../HygieneJourney/HygieneJourney';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import hygieneHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function HygieneContent() {
  return (
    <>
      <ServiceForm
        serviceName='Dental Hygiene'
        serviceChip='Guided Hygiene Journey'
        serviceDescription='Maintain a healthy smile with professional teeth cleaning and gum disease prevention treatments.'
        formTitle='Sign Up For A Dental Hygiene Appointment'
        formDescription='Sign up now for a professional hygiene appointment with our expert team, ensuring your teeth stay clean and your gums healthy.'
      />
      <div className='from-cream to-white bg-gradient-to-b'>
        <HeroSection data={hygieneHeroData} />
      </div>

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>

      {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}
      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />

      <HygieneJourney id='journey' />

      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
