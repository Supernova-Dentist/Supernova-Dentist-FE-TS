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
import { DentalTherapyJourney } from '@/components/TherapyJourney/TherapyJourney';

export default function DentalTherapistContent() {
  return (
    <>
      <ServiceForm
        serviceName='Dental Therapist Treatment'
        serviceChip='Expert Dental Care'
        serviceDescription='Enhance your oral health with professional dental therapist treatments, including preventive and restorative care.'
        formTitle='Sign Up For Dental Therapist Services'
        formDescription='Sign up now for professional dental therapist care, ensuring optimal oral health and wellbeing.'
        imgSrc='/assets/images/easter_dental_therapy_promo.png'
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
      <DentalTherapyJourney id='journey' />
      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
