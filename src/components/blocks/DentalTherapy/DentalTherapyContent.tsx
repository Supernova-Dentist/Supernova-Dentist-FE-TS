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

export default function DentalTherapyContent() {
  return (
    <>
      <div className='from-white to-cream bg-gradient-to-b'>
        <HeroSection data={hygieneHeroData} />
      </div>

      <ServiceForm
        serviceName='Dental Therapy'
        serviceChip='Guided Therapy Journey'
        serviceDescription='Enhance your oral health with professional dental therapy treatments, including preventive and restorative care.'
        formTitle='Sign Up For A Dental Therapy Appointment'
        formDescription='Sign up now for a professional dental therapy appointment with our expert team, ensuring optimal oral health and well-being.'
      />

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
