import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import SubHeader from '@/components/SubHeader/SubHeader';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

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
            We will acknowledge receipt of your complaint in writing within two business days and provide you with a
            copy of our complaints procedure. We aim to investigate and address the issue within{' '}
            <strong>10 business days</strong>. If we cannot complete the investigation within this timeframe, we will
            notify you of the reasons for the delay and provide an estimated resolution time.
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
        </SectionSpacing>
      </div>
    </section>
  );
}
