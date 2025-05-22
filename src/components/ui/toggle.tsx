import { type Dispatch, type SetStateAction } from 'react';
import { BsPersonAdd, BsPersonFill, BsPersonHearts, BsPersonPlusFill } from 'react-icons/bs';

const PatientToggleSection = ({
  isExistingPatient,
  setIsExistingPatient,
}: {
  isExistingPatient: boolean;
  setIsExistingPatient: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <button
        onClick={() => setIsExistingPatient(true)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full ${
          isExistingPatient ? 'bg-gold text-white' : 'bg-gray-200'
        }`}
      >
        <BsPersonAdd />
        Friend Referral
      </button>
      <button
        onClick={() => setIsExistingPatient(false)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full ${
          !isExistingPatient ? 'bg-gold text-white' : 'bg-gray-200'
        }`}
      >
        <BsPersonPlusFill />
        New Patient
      </button>
    </div>
  );
};

export default PatientToggleSection;
