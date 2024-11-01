'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SubHeader from '@/components/SubHeader/SubHeader';
import logo from '../../../src/app/favicon.ico';

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useDisableBodyScroll(isOpen);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current !== null && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4'
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='relative w-full max-w-3xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden'
            ref={modalRef}
          >
            {/* Close Button */}
            <button
              className='absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl'
              onClick={onClose}
              aria-label='Close'
            >
              &times;
            </button>

            {/* Modal Header */}
            <div className='flex flex-col items-center justify-end bg-grey py-4'>
              <Image src={logo} alt='logo' className='w-16 h-16 object-cover mt-2' />
              <SectionTitle title='Privacy Policy' className='text-2xl' />
            </div>

            {/* Scrollable Content */}
            <div className='overflow-y-auto p-8 max-h-privacy-policy-content'>
              <SectionSpacing>
                <SubHeader>Introduction</SubHeader>
                <p>
                  Welcome to <span className='text-gold font-semibold text-lg'>Supernova Dental</span>. We are committed
                  to safeguarding your privacy and protecting your personal data. This privacy policy explains how we
                  collect, use, and protect your information when you use our website or services.{' '}
                  {/* including our online booking
              system powered by Dentally. */}
                </p>
                <p>
                  If you have any questions regarding this privacy policy, please contact us at{' '}
                  <a href='mailto:info@supernovadentalclinic.com' className='underline'>
                    enquiries@supernovadental.co.uk
                  </a>
                  .
                </p>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>What Personal Information We Collect</SubHeader>
                <p>We collect the following types of personal information:</p>
                <ul>
                  <li>Name</li>
                  <li>Contact details (email, phone number, address)</li>
                  {/* <li>Payment details (handled by Dentally)</li> */}
                  {/* <li>IP address, browser details, cookies, etc.</li> */}
                </ul>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>How We Collect Personal Data</SubHeader>
                <p>We collect personal data through the following methods:</p>
                <ul>
                  <li>Contact forms for appointments or inquiries</li>
                  {/* <li>Online payments (handled by Dentally)</li> */}
                  {/* <li>Online booking through Dentally</li> */}
                  {/* <li>Website cookies and tracking tools</li> */}
                  {/* <li>Newsletter sign-ups</li> */}
                  <li>User account registration (if applicable)</li>
                </ul>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Purpose of Data Collection</SubHeader>
                <p>We collect and use your data for the following purposes:</p>
                <ul>
                  {/* <li>To schedule and manage appointments through Dentally</li> */}
                  {/* <li>To process payments (handled by Dentally)</li> */}
                  <li>To provide customer support</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To improve website functionality and performance</li>
                </ul>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Legal Basis for Processing Data (GDPR)</SubHeader>
                <p>We process your data under the following legal bases:</p>
                <ul>
                  <li>Consent: For marketing communications</li>
                  <li>Contractual necessity: For managing appointments</li>
                  <li>Legal obligations: To comply with medical or financial regulations</li>
                  <li>Legitimate interests: For customer service and analytics</li>
                </ul>
              </SectionSpacing>

              {/* <SectionSpacing>
            <SubHeader>Data Sharing and Disclosure</SubHeader>
            <p>Your personal data is used for the following purposes:</p>
            <ul>
              <li>Appointment scheduling and management through Dentally</li>
              <li>Billing and payment processing (handled by Dentally)</li>
              <li>Marketing communications (if opted in)</li>
            </ul>
          </SectionSpacing> */}

              <SectionSpacing>
                <SubHeader>Data Sharing with Third Parties</SubHeader>
                <p>We may share your personal information with the following third parties to provide our services:</p>
                <ul>
                  {/* <li>Payment processors (e.g., Dentally)</li> */}
                  {/* <li>Dentally for appointment scheduling</li> */}
                  <li>Marketing services (e.g., Mailchimp)</li>
                  {/* <li>Web analytics providers (e.g., Google Analytics)</li> */}
                </ul>
                <p>We also may disclose your information if required by law.</p>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Data Retention</SubHeader>
                <p>
                  We will retain your personal data for as long as necessary to fulfill the purposes for which it was
                  collected, or as required by law. This includes maintaining payment information for legal or
                  regulatory purposes.
                </p>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Security of Your Information</SubHeader>
                <p>
                  We take the security of your personal data seriously. Our website and systems use secure encryption
                  and access controls to protect your data.
                </p>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Your Rights Under GDPR</SubHeader>
                <p>As a data subject under GDPR, you have the following rights:</p>
                <ul>
                  <li>Right to Access: You can request a copy of the personal data we hold about you.</li>
                  <li>Right to Rectification: You can request corrections to your personal data.</li>
                  <li>Right to Erasure: You can request that your data be deleted (with some exceptions).</li>
                  <li>Right to Data Portability: You can request a copy of your data in a structured format.</li>
                  <li>Right to Object: You can object to data processing, especially for marketing purposes.</li>
                </ul>
              </SectionSpacing>

              {/* <SectionSpacing>
            <SubHeader>Cookie Policy</SubHeader>
            <p>
              We use cookies to enhance your experience on our website. You can manage your cookie preferences or opt
              out of non-essential cookies via your browser settings.
            </p>
          </SectionSpacing> */}

              <SectionSpacing>
                <SubHeader>Children&apos;s Privacy</SubHeader>
                <p>
                  Our website is not directed to children under 16. If we become aware that we have collected personal
                  data from a child without parental consent, we will take steps to delete that information.
                </p>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Contact Us</SubHeader>
                <p>
                  If you have any questions about this privacy policy, please contact us at{' '}
                  <a href='mailto:info@supernovadentalclinic.com' className='underline'>
                    enquiries@supernovadental.co.uk
                  </a>{' '}
                  or call us at 01278 228665.
                </p>
              </SectionSpacing>

              <SectionSpacing>
                <SubHeader>Changes to This Privacy Policy</SubHeader>
                {/* TODO: Add updated at date programatically */}
                <p>
                  We may update this privacy policy from time to time. The last update was made on 1st Nov 2024. Please
                  review this policy periodically to stay informed about how we are protecting your data.
                </p>
              </SectionSpacing>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
