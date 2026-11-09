import BankingWorkspace from '@/components/BankingWorkspace/BankingWorkspace';
import ConsentFormsAccessGate from '@/components/ConsentFormsAccessGate/ConsentFormsAccessGate';
import { hasStaffSession } from '@/lib/staffSession';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Cash handover & banking | Supernova Dental Practice' };

const staffNames = [
  'Amy Skinner',
  'Mia Coakley',
  'Teagan Ruby',
  'Geri Warren',
  'Adam Young',
  'Victoria Hands',
  'Dr. Scott Young',
];

export default function BankingPage() {
  if (!hasStaffSession()) return <ConsentFormsAccessGate redirectTo='/admin/banking' title='Cash handover & banking' />;

  return (
    <main className='min-h-[100dvh] bg-gradient-to-b from-cream/60 to-white px-4 py-6 sm:px-8 sm:py-10'>
      <div className='mx-auto max-w-5xl'>
        <Link href='/admin' className='inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4'>← Admin hub</Link>
        <header className='mb-8 mt-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Supernova Dental Practice</p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>Cash handover &amp; banking</h1>
          <p className='mt-3 max-w-xl text-muted-foreground'>Record a cash handover or cash you take directly from the till. Signing records the date and time automatically, and the signed PDF is emailed to enquiries@supernovadental.co.uk.</p>
        </header>
        <BankingWorkspace staffNames={staffNames} />
      </div>
    </main>
  );
}
