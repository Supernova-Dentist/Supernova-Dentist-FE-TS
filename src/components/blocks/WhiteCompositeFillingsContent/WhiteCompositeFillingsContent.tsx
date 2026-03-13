import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { WhiteCompositeFillingJourney } from '../../WhiteCompositeFillingJourney/WhiteCompositeFillingJourney';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import fillingsHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function WhiteCompositeFillingsContent() {
  return (
    <>
      <ServiceForm
        serviceName='White Composite Fillings Journey'
        serviceChip='Natural-Looking Tooth Restoration'
        serviceDescription='Restore damaged or decayed teeth with durable, tooth-coloured white composite fillings that blend seamlessly with your natural smile.'
        formTitle='Book Your White Composite Filling Appointment'
        formDescription='Schedule an appointment with our experienced clinicians for natural-looking, long-lasting composite fillings.'
        eventType='FillingsLead'
        formId='fillings-enquiry-form'
      />

      <div className=''>
        <HeroSection data={fillingsHeroData} />
      </div>

      {/* <div className='sticky top-24 z-10'>
        <SlideTabsExample />
      </div> */}

      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />

      <WhiteCompositeFillingJourney id='journey' />

      <ComparisonSection id='comparison' data={tableData} />
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
