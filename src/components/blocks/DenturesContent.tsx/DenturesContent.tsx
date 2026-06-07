import BenefitSection from '@/components/BenefitSection/BenefitSection';
import { DenturesJourney } from '@/components/DenturesJourney/DenturesJourney';
import FaqSection from '@/components/FaqSection/FaqSection';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';

import DenturesIntro from './DentureslIntro/DenturesIntro';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import infoData from './contentData/infoData';

export default function DenturesContent() {
  return (
    <>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        <ServiceForm
          serviceName='Dentures Journey'
          serviceChip='Dentures'
          serviceDescription='Restore your smile and confidence with custom-made dentures at Supernova Dental in Bridgwater. We provide comfortable, natural-looking full and partial dentures tailored to your needs.'
          formTitle='Register Interest For Dentures'
          formDescription='Whether you need full or partial dentures, our experienced team will assess your needs and create a bespoke treatment plan to help restore your smile, comfort and confidence.'
          formId='dentures-enquiry-form'
          eventType='DenturesLead'
        />

        <HighlightCard title='Register Interest For Dentures At Supernova Dental' logoSrc='/favicon.ico' />

        <DenturesIntro />

        <InfoSection id='info' data={infoData} />
        <BenefitSection id='benefits' data={benefitsData} />

        <DenturesJourney id='journey' />

        <FaqSection id='faq' faqItems={faqItems} />
      </div>
    </>
  );
}
