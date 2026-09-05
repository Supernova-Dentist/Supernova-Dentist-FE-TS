import { type Dispatch, type SetStateAction } from 'react';
import { BsPersonAdd, BsPersonCheckFill, BsPersonFill, BsPersonHearts, BsPersonPlusFill } from 'react-icons/bs';

const EmergencyToggleSection = ({
  isExistingPatient,
  setIsExistingPatient,
}: {
  isExistingPatient: boolean;
  setIsExistingPatient: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='flex items-center justify-center gap-4 py-6'>
      <button
        type='button'
        aria-pressed={!isExistingPatient}
        onClick={() => setIsExistingPatient(false)}
        className={`flex min-h-11 items-center gap-2 rounded-full border px-5 py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 ${
          !isExistingPatient ? 'border-champagne bg-champagne text-obsidian' : 'border-stone bg-porcelain text-obsidian'
        }`}
      >
        <BsPersonPlusFill />
        New Patient
      </button>
      <button
        type='button'
        aria-pressed={isExistingPatient}
        onClick={() => setIsExistingPatient(true)}
        className={`flex min-h-11 items-center gap-2 rounded-full border px-5 py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 ${
          isExistingPatient ? 'border-champagne bg-champagne text-obsidian' : 'border-stone bg-porcelain text-obsidian'
        }`}
      >
        <BsPersonCheckFill />
        Existing Patient
      </button>
    </div>
  );
};

export default EmergencyToggleSection;
