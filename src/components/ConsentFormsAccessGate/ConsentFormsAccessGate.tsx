'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PASSCODE_LENGTH = 4;
const KEYPAD_DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

interface ConsentFormsAccessGateProps {
  redirectTo: string;
}

export default function ConsentFormsAccessGate({ redirectTo }: ConsentFormsAccessGateProps) {
  const router = useRouter();
  const [passcodeEntry, setPasscodeEntry] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const verifyPasscode = async (passcode: string) => {
    setIsChecking(true);

    try {
      const response = await fetch('/api/consent-forms/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      if (!response.ok) {
        setPasscodeEntry('');
        setPasscodeError('Incorrect passcode. Please try again.');
        return;
      }

      router.replace(redirectTo);
      router.refresh();
    } catch {
      setPasscodeEntry('');
      setPasscodeError('Unable to check the passcode. Please try again.');
    } finally {
      setIsChecking(false);
    }
  };

  const handleKeypadDigit = (digit: string) => {
    if (isChecking || passcodeEntry.length >= PASSCODE_LENGTH) return;

    const nextEntry = `${passcodeEntry}${digit}`;
    setPasscodeEntry(nextEntry);
    setPasscodeError('');

    if (nextEntry.length === PASSCODE_LENGTH) void verifyPasscode(nextEntry);
  };

  return (
    <main className='flex min-h-[100dvh] items-center justify-center bg-gradient-to-b from-cream/60 via-white to-white px-5 py-32'>
      <section className='w-full max-w-md rounded-3xl border bg-white p-7 shadow-xl sm:p-9' aria-labelledby='access-title'>
        <div className='text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold'>
            <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-8 w-8'>
              <rect width='14' height='11' x='5' y='10' rx='2' />
              <path strokeLinecap='round' d='M8 10V7a4 4 0 0 1 8 0v3' />
            </svg>
          </div>
          <p className='mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold'>Supernova Dental Practice</p>
          <h1 id='access-title' className='mt-2 text-2xl font-bold tracking-tight'>
            Consent forms
          </h1>
          <p className='mt-2 text-sm leading-6 text-muted-foreground'>Enter the four-digit staff passcode to continue.</p>
        </div>

        <div className='mx-auto mt-6 max-w-xs'>
          <div className='flex h-8 items-center justify-center gap-4' aria-label={`${passcodeEntry.length} of 4 digits entered`}>
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                aria-hidden='true'
                className={`h-3.5 w-3.5 rounded-full border-2 border-gold transition-colors ${
                  index < passcodeEntry.length ? 'bg-gold' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          <p className='mt-1 text-center text-sm font-medium text-muted-foreground' aria-live='polite'>
            {passcodeEntry.length} of 4 digits entered
          </p>
          <p role='alert' className='mt-2 min-h-5 text-center text-sm font-semibold text-destructive'>
            {isChecking ? 'Checking passcode…' : passcodeError}
          </p>

          <div className='mt-4 grid grid-cols-3 gap-3' aria-label='Numeric keypad'>
            {KEYPAD_DIGITS.map((digit) => (
              <button
                key={digit}
                type='button'
                onClick={() => handleKeypadDigit(digit)}
                disabled={isChecking}
                className='h-16 rounded-2xl border bg-white text-2xl font-medium shadow-sm transition-colors hover:bg-muted active:scale-95 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
                aria-label={digit}
              >
                {digit}
              </button>
            ))}
            <span aria-hidden='true' />
            <button
              type='button'
              onClick={() => handleKeypadDigit('0')}
              disabled={isChecking}
              className='h-16 rounded-2xl border bg-white text-2xl font-medium shadow-sm transition-colors hover:bg-muted active:scale-95 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
              aria-label='0'
            >
              0
            </button>
            <button
              type='button'
              onClick={() => {
                setPasscodeEntry((entry) => entry.slice(0, -1));
                setPasscodeError('');
              }}
              disabled={isChecking || passcodeEntry.length === 0}
              className='flex h-16 items-center justify-center rounded-2xl text-muted-foreground transition-colors hover:bg-muted active:scale-95 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
              aria-label='Delete last digit'
            >
              <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-7 w-7'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21 6H8l-5 6 5 6h13a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z' />
                <path strokeLinecap='round' d='m10 10 4 4m0-4-4 4' />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
