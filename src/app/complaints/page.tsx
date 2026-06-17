import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SubHeader from '@/components/SubHeader/SubHeader';
import { type Metadata } from 'next';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';

export const metadata: Metadata = {
robots: {
    index: false,
    follow: false,
  },
};

export default function Complaints() {
  return (
    <section className='text-center sm:text-left my-20 px-4 sm:px-10 pt-8'>
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
            We try to ensure that all our patients are pleased with their experience of our services. We welcome
            feedback from patients and take any complaints seriously. We aim to deal with complaints courteously and
            efficiently so they can be resolved as quickly as possible.
          </p>

          <p>
            Our complaints procedure outlines how we deal with any complaints. The person responsible for dealing with
            any complaints in the practice is Dr Scott Young.
          </p>
        </SectionSpacing>
        <SectionSpacing className='flex flex-col space-y-4'>
          <p>
            <strong>How to Complain</strong>
            <br />
            We hope that most issues can be resolved easily and quickly, often at the time they arise and with the
            person concerned. If your issues cannot be sorted out this way and you wish to make a complaint, you can do
            so verbally by speaking to one of our team members, who will direct you to our complaints lead, or you can
            write to us by letter or email.
          </p>
          <p>
            <strong>Complaints Made Verbally</strong>
            <br />
            If you wish to make a complaint over the phone or in person, we will listen to your complaint and offer to
            refer you to our complaints lead. If they are unavailable, the staff member will take your details and a
            brief explanation of the complaint to pass on. Your complaint will be acknowledged within three working days
          </p>
          <p>
            <strong>Complaints Made via Email or Letter</strong>
            <br />
            Any letters or emails regarding a complaint will be immediately passed to our complaints lead. Your
            complaint will be acknowledged within three working days.
          </p>
          <p>
            <strong>Investigations</strong>
            <br />
            We will contact you to discuss your complaint unless it can be resolved easily. Any complaints involving
            clinical care will be referred to the treating dentist unless you request this not to happen.
          </p>
          <p>
            We will then investigate your complaint and will aim to have a response for you within ten working days. If
            it is not possible to resolve this within that timeframe, we will inform you and let you know when it is
            likely to be resolved.
          </p>
          <p>
            Once we have made a decision regarding your complaint, we will inform you using your preferred contact
            method.
          </p>
          <p>
            It is possible that if a complaint regards clinical care or is complex, we may need to seek advice from our
            insurers, indemnifiers or legal advisors and, therefore, may need to share some of your information for this
            purpose.
          </p>
          <p>
            <strong>Complaining on behalf of someone else</strong>
            <br />
            Please note that we strictly adhere to the rules of clinical confidentiality. If you are complaining on
            behalf of someone else, we must know that you have their permission to do so. A note signed by the person
            concerned will be needed unless they are incapable (because of physical and mental illness) of providing
            this
          </p>
          <p>
            <strong>Time Limits for Opening Complaints</strong>
            <br />
            Complaints should be made within 12 months of the incident or when the complainant first discovered the
            problem.
          </p>
          <p>
            <strong>Complaints to External Bodies</strong>
            <br />
            We hope you will use our practice complaints procedure if you have a concern. We believe this will give us
            the best chance of correcting whatever has gone wrong and an opportunity to improve our practice. However,
            this does not affect your right to complain to an external body if you feel you cannot raise your complaint
            with us or are dissatisfied with our investigation&apos;s result.
          </p>
          <p>
            <strong>The CQC:</strong>
            The CQC don&apos;t get involved with complaints about the practice. They do, however, encourage giving
            feedback on service providers.
            <br />
          </p>
          <p>
            To send feedback to the CQC please go to:{' '}
            <a
              href='https://www.cqc.org.uk/give-feedback-on-care'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gold underline'
            >
              https://www.cqc.org.uk/give-feedback-on-care
            </a>
          </p>
          <p>Telephone: 03000 616161 (Mon to Fri, 8.30am - 5.30pm Excluding Bank Holidays)</p>
          <p>
            <strong>The Parliamentary and Health Service Ombudsman</strong>
            <br />
            Telephone: 0345 015 4033
            <br />
            Website:{' '}
            <a
              href='https://www.ombudsman.org.uk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gold underline'
            >
              https://www.ombudsman.org.uk
            </a>
          </p>
          <p>
            <strong>
              Private Patients: The Dental Complaints Service handles complaints made by private patients.
            </strong>
            <br />
            Telephone: 0208 253 0800 (Mon-Fri, 9am-5pm)
            <br />
            Website:{' '}
            <a href='https://dcs.gdc-uk.org' target='_blank' rel='noopener noreferrer' className='text-gold underline'>
              https://dcs.gdc-uk.org
            </a>
          </p>
          <p>
            <strong>The GDC</strong>
            <br />
            Telephone: 0854 222 4141 or 0207 887 3800
            <br />
            Website:{' '}
            <a
              href='https://contactus.gdc-uk.org/Complaint/Process/13'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gold underline'
            >
              https://contactus.gdc-uk.org/Complaint/Process/13
            </a>
          </p>
        </SectionSpacing>

        {/* <SectionSpacing className='flex flex-col gap-2'>
          <SubHeader>Complaining on behalf of someone else</SubHeader>
          <ul className='list-disc list-inside'>
            <li>
              Complaints by phone: We will carefully listen to your concerns and offer to connect you with the Practice
              Manager. If unavailable, we will arrange a suitable time for a follow-up.
            </li>
            <li>
              Complaints in person: You will be invited to sit privately with the Practice Manager. If unavailable, we
              will inform you when they can meet and arrange accordingly.
            </li>
            <li>
              Written complaints: Complaints via letter or email will be forwarded to the Practice Manager immediately
              for review and action.
            </li>
            <li>
              Clinical care or charges: These complaints will be referred directly to the relevant dentist for further
              investigation.
            </li>
          </ul>
        </SectionSpacing>

        <SectionSpacing className='flex flex-col gap-2'>
          <SubHeader>Response and Resolution Timeline</SubHeader>
          <p>
            We will acknowledge receipt of your complaint in writing within <strong>2 business days</strong> and provide
            you with a copy of our complaints procedure. If we cannot complete the investigation within{' '}
            <strong>10 business days</strong>, we will provide an update and continue to provide an update every{' '}
            <strong>10 business days</strong> until the complaint is resolved.
          </p>

          <p>
            Upon completing the investigation, we will inform you of the outcome in writing and provide a detailed
            explanation of our findings.
          </p>

          <p>
            All complaints and their resolutions will be documented thoroughly to ensure comprehensive records are
            maintained.
          </p>
        </SectionSpacing>

        <SectionSpacing className='flex flex-col gap-2'>
          <SubHeader>Escalating a Complaint</SubHeader>
          <p>If you are not satisfied with our resolution, you may refer your complaint to:</p>

          <address>
            <strong>Dental Complaints Service</strong>
            <br />
            The Lansdowne Building,
            <br />
            2 Lansdowne Road,
            <br />
            Croydon, Greater London CR9 2ER
            <br />
            08456 120 540 or <a href='http://www.dentalcomplaints.org.uk'>www.dentalcomplaints.org.uk</a>
          </address>

          <p>Alternatively, you can contact the General Dental Council, the dentists’ registration body:</p>

          <address>
            <strong>General Dental Council</strong>
            <br />
            37 Wimpole Street,
            <br />
            London, W1M 8DQ
          </address>
        </SectionSpacing> */}
      </div>
    </section>
  );
}
