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
import NewPatientIntroSection from './RootCanalIntro/RootCanalIntro';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import hygieneHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function RootCanalContent() {
  return (
    <>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        {/* <div className='px-4 md:px-6 lg:px-8 my-2 md:py-4'>
          <BreadCrumb />
        </div> */}

        <ServiceForm
          serviceName='Root Canal Treatment'
          serviceChip='Root Canal'
          serviceDescription='Save your natural tooth with expert root canal treatment at Supernova Dental in Bridgwater. We remove infection, relieve pain and restore your tooth to full function.'
          formTitle='Register Interest For Root Canal Treatment'
          formDescription='If you are experiencing tooth pain or infection, book an examination with our team. We will assess your tooth and provide a bespoke treatment plan to restore your oral health.'
          formId='root-canal-enquiry-form'
          eventType='RootCanalLead'
        />

        <HighlightCard title='Register Interest For Root Canal Treatment' logoSrc='/favicon.ico' />

        <RootCanalContent />

        <InfoSection id='info' data={infoData} />
        <BenefitSection id='benefits' data={benefitsData} />

        <NewPatientJourney id='journey' />

        <FaqSection id='faq' faqItems={faqItems} />
      </div>
    </>
  );
}
