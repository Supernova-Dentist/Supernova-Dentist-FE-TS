'use client';

import React, { useState } from 'react';
import EmergencyToggleSection from './utils/emergency-form-toggle';
import { ExisitingEmergencyFormContent } from './utils/exisiting-emergency-form-content';
import { NewEmergencyFormContent } from './utils/new-emergency-form-content';

function EmergencyFormSelector() {
  const [isExistingPatient, setIsExistingPatient] = useState(false);

  return (
    <section id='form' className='bg-ivory px-4 py-14 md:py-20'>
      <h2 className='mx-auto mb-2 mt-4 max-w-3xl text-balance text-center text-3xl leading-tight text-obsidian md:text-4xl'>
        Please fill in the Emergency Dentistry Triage Form below:
      </h2>
      <EmergencyToggleSection isExistingPatient={isExistingPatient} setIsExistingPatient={setIsExistingPatient} />
      {!isExistingPatient ? <NewEmergencyFormContent /> : <ExisitingEmergencyFormContent />}
    </section>
  );
}

export default EmergencyFormSelector;
