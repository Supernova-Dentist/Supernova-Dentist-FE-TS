import BenefitSection from '@/components/BenefitSection/BenefitSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonSection from '@/components/ComparisonSection/ComparisonSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import InfoSection from '@/components/InfoSection/InfoSection';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import CompositeBondingIntroSection from './CompositeBondingIntro/CompositeBondingIntro';
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import infoData from './contentData/infoData';
import { CompositeBondingProcess } from './contentData/processData';

export default function CompositeBondingContent() {
  return (
    <>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        <div className='px-4 md:px-6 lg:px-8 my-2 md:py-4'>
          <BreadCrumb />
        </div>
        <HighlightCard title='Start Your Composite Bonding Journey Today' logoSrc='/favicon.ico' />

        <CompositeBondingIntroSection />
        {/* <ServiceForm
        serviceName='Composite Bonding'
        serviceChip='Bespoke Bonding Treatment Plan'
        serviceDescription='Brighten your smile safely with professional teeth whitening in Bridgwater, Somerset.'
        formTitle='Get Your Bespoke Teeth Whitening Treatment Plan'
        formDescription='Tell us your goals and let our expert cosmetic dental team design a safe, effective whitening plan tailored to you. Achieve a naturally brighter smile with Supernova Dental.'
        eventType='TeethWhiteningLead'
        imgSrc='/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp'
        formId='teeth-whitening-enquiry-form'
      />

      <div className=''>
        <HeroSection data={teethWhiteningHeroData} />
      </div> */}

        <InfoSection id='info' data={infoData} />
        <BenefitSection id='benefits' data={benefitsData} />

        <CompositeBondingProcess id='process' />

        <FaqSection id='faq' faqItems={faqItems} />
      </div>
    </>
  );
}
