import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import InfoSection from '@/components/InfoSection/InfoSection';
import { NewPatientJourney } from '@/components/NewPatientJourney/NewPatientJourney';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import NewPatientIntroSection from './NewPatientIntro/NewPatientIntro';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import hygieneHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function NewPatientContent() {
  return (
    <>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        {/* <div className='px-4 md:px-6 lg:px-8 my-2 md:py-4'>
          <BreadCrumb />
        </div> */}
        <ServiceForm
          serviceName='Patient Journey With A New Patient Dental Examination'
          serviceChip='New Patient Examination'
          serviceDescription='Join Supernova Dental in Bridgwater with a comprehensive new patient dental examination. Our team will assess your oral health, discuss any concerns, and create a personalised treatment plan if needed.'
          formTitle='Register as a New Patient'
          formDescription='Book your new patient examination and meet our friendly dental team. We will carry out a full assessment of your teeth and gums and help you plan the next steps for your oral health.'
          // imgSrc='/assets/images/new-patient-examination-supernova-dental-bridgwater.webp'
          formId='new-patient-examination-enquiry-form'
          eventType='NewPatientExaminationLead'
        />
        <HighlightCard title='Book Your New Patient Examination Today' logoSrc='/favicon.ico' />

        <NewPatientIntroSection />
        {/* <ServiceForm
        serviceName='Dental Hygiene Journey'
        serviceChip='Guided Hygiene Journey'
        serviceDescription='Maintain a healthy smile with professional teeth cleaning and gum disease prevention treatments.'
        formTitle='Register For A Dental Hygiene Appointment'
        formDescription='Register now for a professional hygiene appointment with our expert team, ensuring your teeth stay clean and your gums healthy.'
        eventType='HygieneLead'
        formId='hygiene-enquiry-form'
      />
      <div className=''>
        <HeroSection data={hygieneHeroData} />
      </div> */}

        {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}
        <InfoSection id='info' data={infoData} />
        <BenefitSection id='benefits' data={benefitsData} />

        <NewPatientJourney id='journey' />

        <FaqSection id='faq' faqItems={faqItems} />
      </div>
    </>
  );
}
