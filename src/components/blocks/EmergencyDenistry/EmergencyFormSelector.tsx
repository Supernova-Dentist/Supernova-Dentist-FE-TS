'use client';

import React, { useState } from 'react';
import EmergencyToggleSection from './utils/emergency-form-toggle';
import { ExisitingEmergencyFormContent } from './utils/exisiting-emergency-form-content';
import { NewEmergencyFormContent } from './utils/new-emergency-form-content';

function EmergencyFormSelector() {
  const [isExistingPatient, setIsExistingPatient] = useState(false);

  return (
    <div id='form' className='py-12 bg-cream'>
      <p className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4 mb-2'>
        Please fill in the Emergency Dentistry Triage Form below:
      </p>
      <EmergencyToggleSection isExistingPatient={isExistingPatient} setIsExistingPatient={setIsExistingPatient} />
      {!isExistingPatient ? <NewEmergencyFormContent /> : <ExisitingEmergencyFormContent />}
    </div>
  );
}

export default EmergencyFormSelector;
