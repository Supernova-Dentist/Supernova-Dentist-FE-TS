import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';

import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import sportsGuardsHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';

export default function SportsMouthguardsContent() {
  return (
    <>
      <ServiceForm
        serviceName='Custom Sports Mouthguard Journey'
        serviceChip='Custom Sports Mouthguards'
        serviceDescription='Protect your Supernova smile with a professionally made, custom-fit mouthguard ideal for contact sports.'
        formTitle='Register Interest For Sports Mouthguards'
        formDescription='Secure your professionally fitted sports guard with a quick, digital scan at Supernova Dental.'
        formId='sports-mouthguards-enquiry-form'
        eventType='SportsMouthguardsLead'
      />

      <div className='from-cream to-white bg-gradient-to-b'>
        <HeroSection data={sportsGuardsHeroData} />
      </div>

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>

      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />

      {/* <ComparisonSection id='comparison' data={tableData} /> */}
      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
