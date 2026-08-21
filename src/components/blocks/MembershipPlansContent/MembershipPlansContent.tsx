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
import benefitsData from './contentData/benefitsData';
import { faqItems } from './contentData/faqData';
import hygieneHeroData from './contentData/heroData';
import infoData from './contentData/infoData';
import { tableData } from './contentData/tableData';
import MembershipPlansIntroSection from './MembershipPlansIntroSection/MembershipPlansIntroSection';

export default function MembershipPlansContent() {
  return (
    <>
      <div className='container mx-auto py-16 md:py-24 md:px-8'>
        {/* <div className='px-4 md:px-6 lg:px-8 my-2 md:py-4'>
          <BreadCrumb />
        </div> */}

        <ServiceForm
          serviceName='Practice Plan'
          serviceChip='Join Our Practice Plan'
          serviceDescription='Enjoy affordable, ongoing dental care with our Practice Plan, designed to keep your oral health in top condition.'
          formTitle='Register for Our Practice Plan'
          formDescription='Join our Practice Plan from £5.99/month for children or £24.99/month for adults (16+). Enjoy routine check-ups, hygiene visits, emergency cover, and more. Register today for expert dental care and peace of mind.'
          videoSrc='/assets/videos/sd_practice_plan.mp4'
          videoThumbnailSrc='/assets/images/practice_plan_thumbnail.png'
          formId='practice-enquiry-form'
          eventType='PracticePlanLead'
        />
        <HighlightCard title='Join Our Dental Membership Plan Today' logoSrc='/favicon.ico' />

        <MembershipPlansIntroSection />
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
