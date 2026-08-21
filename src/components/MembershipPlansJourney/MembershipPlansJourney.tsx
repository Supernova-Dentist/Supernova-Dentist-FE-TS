'use client';

import Image from 'next/image';
import React from 'react';
import ConsultationImage from '../../../public/assets/images/new-patient-examination-1.webp';
import ExaminationImage from '../../../public/assets/images/new-patient-examination-2.webp';
import TreatmentPlanImage from '../../../public/assets/images/new-patient-examination-3.webp';
import { NewPatientTimeline } from '../ServiceTimelines/NewPatientTimeline';

export function MembershipPlansJourney({ id }: { id: string }) {
  const data = [
    {
      title: '1 - Register with Supernova Dental',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            To join one of our dental membership plans, you first need to register with Supernova Dental as a patient.
            Your journey begins with a new patient examination, where our dental team assesses your oral health,
            discusses your dental history and gets to know your individual needs.
          </p>
          <Image
            src={ConsultationImage}
            alt='New patient examination at Supernova Dental in Bridgwater'
            width={ConsultationImage.width}
            height={ConsultationImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '2 - Complete Your Required Appointments',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            For adults, you will need to complete both your new patient examination and an initial hygiene appointment
            before you can access the benefits of the membership plan. For children, only the new patient examination is
            required before joining the children&apos;s membership plan.
          </p>
          <Image
            src={ExaminationImage}
            alt='Dental examination and hygiene appointment at Supernova Dental'
            width={ExaminationImage.width}
            height={ExaminationImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
    {
      title: '3 - Enjoy Your Membership Benefits',
      content: (
        <div className='lg:px-12 py-8'>
          <p className='mb-8 font-bold text-md md:text-lg lg:text-xl md:text-left text-center text-gray-800'>
            Once you have completed the required appointments, you can join the appropriate membership plan and enjoy
            the benefits included. This can include regular dental examinations, hygiene appointments and emergency
            cover, depending on whether you choose our adult or children&apos;s plan.
          </p>
          <Image
            src={TreatmentPlanImage}
            alt='Dental membership benefits at Supernova Dental in Bridgwater'
            width={TreatmentPlanImage.width}
            height={TreatmentPlanImage.height}
            placeholder='blur'
            quality={75}
            className='md:max-w-[30rem] mx-auto py-4'
          />
        </div>
      ),
    },
  ];

  return (
    <div id={id} className='w-full'>
      <NewPatientTimeline data={data} />
    </div>
  );
}
