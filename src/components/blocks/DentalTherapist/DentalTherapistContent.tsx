import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { DentalTherapyJourney } from '@/components/TherapyJourney/TherapyJourney';
import { HygieneJourney } from '../../HygieneJourney/HygieneJourney';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import hygieneHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function DentalTherapistContent() {
  return (
    <>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        <ServiceForm
          serviceName='Dental Therapist Treatment'
          serviceChip='Expert Dental Care'
          serviceDescription='Enhance your oral health with professional dental therapist treatments, including preventive and restorative care.'
          formTitle='Register For Dental Therapist Services'
          formDescription='Register now for professional dental therapist care, ensuring optimal oral health and wellbeing.'
          formId='dental-therapist-enquiry-form'
          eventType='DentalTherapistLead'
        />
        <div className=''>
          <HeroSection data={hygieneHeroData} />
        </div>

        {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}
        <InfoSection id='info' data={infoData} />
        <BenefitSection id='benefits' data={benefitsData} />
        <DentalTherapyJourney id='journey' />
        <ComparisonSection id='comparison' data={tableData} />
        <FaqSection id='faq' faqItems={faqItems} />
      </div>
    </>
  );
}
