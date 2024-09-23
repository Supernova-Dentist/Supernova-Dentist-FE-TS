import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import SubHeader from '@/components/SubHeader/SubHeader';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

export default function Complaints() {
  return (
    <section className='text-center sm:text-left my-20 px-4 sm:px-10'>
      <div className='text-center flex flex-col items-center'>
        <Image src={logo} alt='logo' className='w-20 h-20' />
        <div className='my-2'>
          <BreadCrumb />
        </div>
        <h2 className='text-gold text-2xl'>We are sorry you&apos;re here</h2>
        <h1 className='text-4xl'>But if you have a complaint</h1>
      </div>
      <div className='max-w-[1000px] mx-auto mt-8 flex flex-col gap-4'>
        <SectionSpacing className='flex flex-col gap-2'>
          <p>
            At our practice, we take all complaints seriously and strive to ensure that every patient is satisfied with
            their experience. When a complaint is made, we handle it promptly and courteously, aiming to resolve the
            matter as quickly as possible. Our procedure is guided by these core principles.
          </p>

          <p>
            Our goal is to respond to complaints in a manner that reflects how we would want our own concerns to be
            addressed.
          </p>

          <p>
            The <strong>Practice Manager</strong> is responsible for handling any complaints regarding our services. If
            the Practice Manager is unavailable, the practice owners will step in to address the issue. In cases where
            the complaint involves the Practice Manager directly, it will be managed by the practice owners as well.
          </p>
        </SectionSpacing>

        <SectionSpacing className='flex flex-col gap-2'>
          <SubHeader>How We Handle Complaints</SubHeader>
          <p>
            If a patient contacts us by phone to make a complaint, we will carefully listen to their concerns and
            immediately offer to connect them with the Practice Manager. If the Practice Manager is not available at
            that moment, we will arrange a suitable time for a follow-up conversation.
          </p>

          <p>
            For complaints made in person at the reception, the patient will be invited to sit privately with the
            Practice Manager in a comfortable setting. Should the Practice Manager be unavailable, we will inform the
            patient when they can expect to speak with her and make the necessary arrangements.
          </p>

          <p>
            The staff member who initially receives the complaint will take brief details and pass them along to ensure
            the issue is handled efficiently. If a discussion cannot take place within a reasonable timeframe, or if the
            patient prefers not to wait, the complaint will be escalated to the practice owners.
          </p>

          <p>
            Complaints submitted in writing, whether via letter or email, will be forwarded to the Practice Manager
            immediately for review and action.
          </p>

          <p>
            For any complaints related to clinical care or associated charges, these will be referred directly to the
            relevant dentist for further investigation.
          </p>
        </SectionSpacing>

        <SectionSpacing className='flex flex-col gap-2'>
          <SubHeader>Response and Resolution Timeline</SubHeader>
          <p>
            We will acknowledge receipt of the complaint in writing within two business days and provide the patient
            with a copy of our complaints procedure. We aim to investigate and address the issue within ten business
            days. If the patient prefers not to meet in person, we will attempt to discuss the matter over the phone. In
            the event we are unable to complete the investigation within the ten-day timeframe, we will notify the
            patient, providing reasons for the delay and an estimated time for resolution.
          </p>

          <p>
            Upon completing the investigation, we will inform the patient of the outcome in writing and provide a
            detailed explanation of the findings.
          </p>

          <p>
            All complaints and their resolutions will be documented thoroughly, ensuring comprehensive records are
            maintained.
          </p>
        </SectionSpacing>

        <SectionSpacing className='flex flex-col gap-2'>
          <SubHeader>Escalating a Complaint</SubHeader>
          <p>
            If a patient is dissatisfied with the outcome of our complaints process, they may escalate their concerns to
            the Dental Complaints Service:
          </p>

          <address>
            <strong>Dental Complaints Service</strong>
            <br />
            The Lansdowne Building,
            <br />
            2 Lansdowne Road,
            <br />
            Croydon, CR9 2ER
          </address>
        </SectionSpacing>
      </div>
    </section>
  );
}
