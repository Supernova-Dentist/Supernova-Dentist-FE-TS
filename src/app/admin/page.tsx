import ConsentFormsAccessGate from '@/components/ConsentFormsAccessGate/ConsentFormsAccessGate';
import { hasStaffSession } from '@/lib/staffSession';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Staff admin hub | Supernova Dental Practice' };

const tools = [
  { href: '/admin/consent-forms', title: 'Consent forms', description: 'Prepare and sign patient consent forms.' },
  { href: '/admin/banking', title: 'Cash handover & banking', description: 'Sign a cash handover and email the acknowledgement as a PDF.' },
];

export default function AdminPage() {
  if (!hasStaffSession()) return <ConsentFormsAccessGate redirectTo='/admin' title='Staff admin hub' />;

  return (
    <main className='min-h-[100dvh] bg-gradient-to-b from-cream/60 to-white px-5 py-12 sm:py-20'>
      <div className='mx-auto max-w-4xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Supernova Dental Practice</p>
        <h1 className='mt-3 text-4xl font-bold tracking-tight'>Staff admin hub</h1>
        <p className='mt-3 text-muted-foreground'>Bookmark this page for quick access to the team’s forms.</p>
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className='group rounded-2xl border bg-white p-6 shadow-sm hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold'>
              <h2 className='text-xl font-bold'>{tool.title}</h2>
              <p className='mt-2 text-sm leading-6 text-muted-foreground'>{tool.description}</p>
              <span className='mt-5 inline-block text-sm font-semibold group-hover:underline'>Open <span aria-hidden='true'>→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
