'use client';

import Image from 'next/image';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SubHeader from '@/components/SubHeader/SubHeader';
import logo from '../../../src/app/favicon.ico';

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Page Header */}
      <div className='bg-grey py-20 flex flex-col items-center justify-end'>
        <Image src={logo} alt='logo' className='w-16 h-16 object-cover mt-2' />
        <SectionTitle title='Privacy Policy' className='text-2xl' />
      </div>

      {/* Content */}
      <div className='max-w-screen-lg mx-auto p-8'>
        <SectionSpacing>
          <SubHeader>Introduction</SubHeader>
          <p className='text-left'>
            Welcome to <span className='text-gold font-semibold text-lg'>Supernova Dental</span>. We are committed to
            safeguarding your privacy and protecting your personal data. This privacy policy explains how we collect,
            use and protect your information when you use our website or services.
          </p>
          <p className='text-left'>
            If you have any questions regarding this privacy policy, please contact us at{' '}
            <a href='mailto:enquiries@supernovadental.co.uk' className='underline'>
              enquiries@supernovadental.co.uk
            </a>
            .
          </p>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>What Personal Information We Collect</SubHeader>
          <p className='text-left'>We collect the following types of personal information:</p>
          <ul className='text-left'>
            <li>Name</li>
            <li>Contact details (email, phone number, address)</li>
          </ul>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>How We Collect Personal Data</SubHeader>
          <p className='text-left'>We collect personal data through the following methods:</p>
          <ul className='text-left'>
            <li>Contact forms for appointments or inquiries</li>
            <li>User account registration (if applicable)</li>
          </ul>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Purpose of Data Collection</SubHeader>
          <p className='text-left'>We collect and use your data for the following purposes:</p>
          <ul className='text-left'>
            <li>To provide customer support</li>
            <li>To improve website functionality and performance</li>
          </ul>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Legal Basis for Processing Data (GDPR)</SubHeader>
          <p className='text-left'>We process your data under the following legal bases:</p>
          <ul className='text-left'>
            <li>Consent: For marketing communications</li>
            <li>Contractual necessity: For managing appointments</li>
            <li>Legal obligations: To comply with medical or financial regulations</li>
            <li>Legitimate interests: For customer service and analytics</li>
          </ul>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Data Sharing with Third Parties</SubHeader>
          <p className='text-left'>
            We may share your personal information with the following third parties to provide our services:
          </p>
          <ul className='text-left'>
            <li>Data storage and management services (e.g., Dentally for the patient portal)</li>
          </ul>
          <p className='text-left'>We also may disclose your information if required by law.</p>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Data Retention</SubHeader>
          <p className='text-left'>
            We will retain your personal data for as long as necessary to fulfill the purposes for which it was
            collected, or as required by law. This includes maintaining payment information for legal or regulatory
            purposes.
          </p>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Security of Your Information</SubHeader>
          <p className='text-left'>
            We take the security of your personal data seriously. Our website and systems use secure encryption and
            access controls to protect your data.
          </p>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Your Rights Under GDPR</SubHeader>
          <p className='text-left'>As a data subject under GDPR, you have the following rights:</p>
          <ul className='text-left'>
            <li>Right to Access: You can request a copy of the personal data we hold about you.</li>
            <li>Right to Rectification: You can request corrections to your personal data.</li>
            <li>Right to Erasure: You can request that your data be deleted (with some exceptions).</li>
            <li>Right to Data Portability: You can request a copy of your data in a structured format.</li>
            <li>Right to Object: You can object to data processing, especially for marketing purposes.</li>
          </ul>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Children&apos;s Privacy</SubHeader>
          <p className='text-left'>
            Our website is not directed to children under 16. If we become aware that we have collected personal data
            from a child without parental consent, we will take steps to delete that information.
          </p>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Contact Us</SubHeader>
          <p className='text-left'>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href='mailto:enquiries@supernovadental.co.uk' className='underline'>
              enquiries@supernovadental.co.uk
            </a>{' '}
            or call us at 01278 228665.
          </p>
        </SectionSpacing>

        <SectionSpacing>
          <SubHeader>Changes to This Privacy Policy</SubHeader>
          <p className='text-left'>
            We may update this privacy policy from time to time. The last update was made on 29th December 2024. Please
            review this policy periodically to stay informed about how we are protecting your data.
          </p>
        </SectionSpacing>
      </div>
    </div>
  );
}
