import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import teethWhiteningHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { TeethWhiteningProcess } from './contentData/processData';
import { tableData } from './contentData/tableData';

export default function TeethWhiteningContent() {
  return (
    <>
      <ServiceForm
        serviceName='Teeth Whitening'
        serviceChip='Bespoke Whitening Treatment Plan'
        serviceDescription='Brighten your smile safely with professional teeth whitening in Bridgwater, Somerset.'
        formTitle='Get Your Bespoke Teeth Whitening Treatment Plan'
        formDescription='Tell us your goals and let our expert cosmetic dental team design a safe, effective whitening plan tailored to you. Achieve a naturally brighter smile with Supernova Dental.'
        eventType='TeethWhiteningLead'
        imgSrc='/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp'
        formId='teeth-whitening-enquiry-form'
      />

      <div className='from-cream to-white bg-gradient-to-b'>
        <HeroSection data={teethWhiteningHeroData} />
      </div>

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>

      <InfoSection id='info' data={infoData} />
      <BenefitSection id='benefits' data={benefitsData} />

      <TeethWhiteningProcess id='process' />

      <FaqSection id='faq' faqItems={faqItems} />
    </>
  );
}
