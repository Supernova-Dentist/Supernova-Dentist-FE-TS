'use client';

import SignatureField from '@/components/SignatureField/SignatureField';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const api = '/api/admin/banking';
const inputStyle = 'mt-1 block min-h-11 w-full rounded-lg border border-foreground/30 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60';
const panelStyle = 'rounded-2xl border bg-white p-5 shadow-sm sm:p-7';
const linkStyle = 'inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4';
const formatAmount = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
const ukSigningTime = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
const usualRecipients = ['Adam Young', 'Dr. Scott Young'];
const otherName = '__other__';

interface SavedHandover {
  id: string;
  amountPence: number;
  emailStatus: 'sent' | 'pending' | 'untracked';
  directCollection?: boolean;
}

const initialValues = {
  directCollection: false,
  staffName: '', staffOther: '', handoverAt: '', recipientName: '', recipientOther: '', recipientAt: '',
  amount: '', handoverSignature: '', recipientSignature: '',
};

function captureSigningTime() {
  const parts = ukSigningTime.formatToParts(new Date());
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((entry) => entry.type === type)?.value;
  return `${part('year')}-${part('month')}-${part('day')}T${part('hour')}:${part('minute')}`;
}

function SigningTime({ value }: { value: string }) {
  const [date, time] = value.split('T');
  return (
    <div className='text-sm'>
      <p className='font-semibold'>Signing date and time (UK)</p>
      <p aria-live='polite' className='mt-1 text-muted-foreground'>
        {value === '' ? 'Recorded automatically when you sign.' : `${date.split('-').reverse().join('/')} at ${time}`}
      </p>
    </div>
  );
}

class BankingError extends Error {
  constructor(message: string, readonly expired = false) {
    super(message);
  }
}

async function bankingRequest(path: string, init: RequestInit): Promise<SavedHandover> {
  const response = await fetch(`${api}${path}`, { ...init, cache: 'no-store' });
  if (!response.ok) {
    const data: { message?: string } | null = await response.json().catch(() => null);
    throw new BankingError(data?.message ?? 'Unable to complete this request. Please try again.', response.status === 401);
  }
  return await response.json();
}

function ErrorMessage({ error }: { error: unknown }) {
  if (error === null) return null;
  return (
    <p role='alert' className='text-sm font-semibold text-destructive'>
      {error instanceof BankingError ? error.message : 'Unable to reach the banking service. Please try again.'}
      {error instanceof BankingError && error.expired && (
        <> <a href='/admin' target='_blank' rel='noreferrer' className='underline'>Unlock in a new tab</a>, then retry here.</>
      )}
    </p>
  );
}

export default function BankingWorkspace({ staffNames }: { staffNames: string[] }) {
  const form = useForm({ defaultValues: initialValues });
  const { register, setValue, watch, reset, handleSubmit, control, formState } = form;
  const id = useRef<string>();
  const busy = formState.isSubmitting;
  const [error, setError] = useState<unknown>(null);
  const [saved, setSaved] = useState<SavedHandover | null>(null);
  const [retrying, setRetrying] = useState(false);
  const directCollection = watch('directCollection');
  const handoverNames = directCollection ? usualRecipients : staffNames;
  const staffSigned = watch('handoverSignature') !== '';
  const recipientSigned = watch('recipientSignature') !== '';

  const resetRecipient = () => {
    setValue('recipientSignature', '');
    setValue('recipientAt', '');
  };

  const resetSignatures = () => {
    setValue('handoverSignature', '');
    setValue('handoverAt', '');
    resetRecipient();
  };

  const changeCollectionMode = () => {
    setValue('staffName', '');
    setValue('staffOther', '');
    resetSignatures();
  };

  const submit = handleSubmit(async (data) => {
    setError(null);
    const amount = /^(\d{1,6})(?:\.(\d{1,2}))?$/.exec(data.amount.trim());
    const amountPence = amount === null ? 0 : Number(amount[1]) * 100 + Number((amount[2] ?? '').padEnd(2, '0'));
    if (amountPence < 1) {
      setError(new BankingError('Enter the cash amount in pounds, for example 250.00.'));
      return;
    }
    if (data.handoverSignature === '' || (!data.directCollection && data.recipientSignature === '')) {
      setError(new BankingError(data.directCollection ? 'Sign to confirm you collected the cash.' : 'Both people must sign the handover.'));
      return;
    }
    const staffName = (data.staffName === otherName ? data.staffOther : data.staffName).trim();
    const recipientName = (data.recipientName === otherName ? data.recipientOther : data.recipientName).trim();
    if (!data.directCollection && staffName.toLowerCase() === recipientName.toLowerCase()) {
      setError(new BankingError('Select two different people, or choose “Taking cash directly from the till” if you collected it yourself.'));
      return;
    }
    try {
      id.current ??= window.crypto.randomUUID();
      const record = await bankingRequest('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id.current,
          amountPence,
          reference: 'Reception till',
          directCollection: data.directCollection,
          staffName,
          handoverAt: data.handoverAt,
          handoverSignature: data.handoverSignature,
          ...(!data.directCollection && {
            recipientName,
            recipientAt: data.recipientAt,
            recipientSignature: data.recipientSignature,
          }),
        }),
      });
      id.current = undefined;
      reset();
      setSaved(record);
    } catch (error) {
      setError(error);
    }
  });

  async function retryEmail(handoverId: string) {
    setRetrying(true);
    setError(null);
    try {
      setSaved(await bankingRequest(`/${handoverId}/email`, { method: 'POST' }));
    } catch (error) {
      setError(error);
    } finally {
      setRetrying(false);
    }
  }

  return (
    <section className={panelStyle} aria-labelledby='new-handover'>
      <h2 id='new-handover' className='text-xl font-bold'>New cash handover</h2>
      {saved !== null ? (
        <div className='mt-4 rounded-xl bg-emerald-50 p-4'>
          <p role='status' className='font-semibold text-emerald-900'>{saved.directCollection === true ? 'Signed collection' : 'Signed handover'} saved for {formatAmount.format(saved.amountPence / 100)}.</p>
          <p role='status' className='mt-1 text-sm'>{saved.emailStatus === 'sent'
            ? 'The signed PDF was emailed to enquiries@supernovadental.co.uk.'
            : 'Email delivery is unconfirmed. You can retry it here or download the PDF.'}</p>
          <div className='mt-2 flex flex-wrap items-center gap-x-5 gap-y-2'>
            <a href={`${api}/${saved.id}/handover`} className={linkStyle}>Download signed PDF</a>
            {saved.emailStatus !== 'sent' && (
              <Button type='button' variant='outline' disabled={retrying} onClick={() => { void retryEmail(saved.id); }}>
                {retrying ? 'Checking email delivery…' : 'Retry sending PDF'}
              </Button>
            )}
            <Button type='button' variant='outline' disabled={retrying} onClick={() => { setSaved(null); setError(null); }}>Start a new record</Button>
          </div>
          <ErrorMessage error={error} />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={(event) => { void submit(event); }} className='mt-5'>
            <fieldset disabled={busy} className='space-y-5'>
              <label className='flex min-h-11 items-center gap-3 text-sm font-semibold'>
                <input type='checkbox' className='h-5 w-5 shrink-0 accent-primary' {...register('directCollection', { onChange: changeCollectionMode })} />
                Taking cash directly from the till
              </label>
              <label className='block max-w-xs text-sm font-semibold'>
                Cash counted (£)
                <input className={inputStyle} inputMode='decimal' placeholder='0.00' maxLength={9} required {...register('amount', { onChange: resetSignatures })} />
              </label>
              <p className='text-sm text-muted-foreground'>
                {directCollection
                  ? 'Count the cash yourself and enter the amount before signing.'
                  : 'Both people should count the cash, together or separately. If your totals differ, recount and agree the amount before signing.'}
              </p>
              <div className='space-y-3 border-t pt-5'>
                <h3 className='text-lg font-bold'>{directCollection ? 'Collected by' : '1. Handed over by'}</h3>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <label className='block text-sm font-semibold'>
                    Name
                    <select className={inputStyle} required {...register('staffName', { onChange: resetSignatures })}>
                      <option value=''>Select a team member</option>
                      {handoverNames.map((name) => <option key={name} value={name}>{name}</option>)}
                      <option value={otherName}>Other team member</option>
                    </select>
                  </label>
                  {watch('staffName') === otherName && (
                    <label className='block text-sm font-semibold'>
                      Full name
                      <input className={inputStyle} maxLength={80} required {...register('staffOther', { onChange: resetSignatures })} />
                    </label>
                  )}
                </div>
                <p className='text-sm'>{directCollection
                  ? 'I confirm that I have counted and taken the cash shown above from the reception till. I accept responsibility for keeping it safe and for depositing it or arranging for it to be deposited.'
                  : 'I confirm that I have counted and handed over the cash shown above.'}</p>
                <FormField control={control} name='handoverSignature' render={({ field }) => (
                  <SignatureField label={directCollection ? 'Collector signature' : 'Staff handover signature'} value={field.value} disabled={busy} onChange={(value) => {
                    field.onChange(value);
                    setValue('handoverAt', value === '' ? '' : captureSigningTime());
                    resetRecipient();
                  }} />
                )} />
                <SigningTime value={watch('handoverAt')} />
              </div>
              {!directCollection && <div className='space-y-4 border-t pt-5'>
                <h3 className='text-lg font-bold'>2. Received by</h3>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <label className='block text-sm font-semibold'>
                    Name
                    <select className={inputStyle} required {...register('recipientName', { onChange: resetRecipient })}>
                      <option value=''>Select who received the cash</option>
                      {usualRecipients.map((name) => <option key={name} value={name}>{name}</option>)}
                      <option value={otherName}>Other team member</option>
                    </select>
                  </label>
                  {watch('recipientName') === otherName && (
                    <label className='block text-sm font-semibold'>
                      Full name
                      <input className={inputStyle} maxLength={80} required {...register('recipientOther', { onChange: resetRecipient })} />
                    </label>
                  )}
                </div>
                <p className='text-sm'>I confirm that I have received and counted the cash shown above. I accept responsibility for keeping it safe and for depositing it or arranging for it to be deposited.</p>
                {!staffSigned && <p className='text-sm text-muted-foreground'>The staff member signs first.</p>}
                <FormField control={control} name='recipientSignature' render={({ field }) => (
                  <SignatureField label='Recipient signature' value={field.value} disabled={busy || !staffSigned} onChange={(value) => {
                    field.onChange(value);
                    setValue('recipientAt', value === '' ? '' : captureSigningTime());
                  }} />
                )} />
                <SigningTime value={watch('recipientAt')} />
              </div>}
              <ErrorMessage error={error} />
              <Button type='submit' disabled={busy || !staffSigned || (!directCollection && !recipientSigned)}>{busy ? 'Saving and emailing…' : 'Save and email signed PDF'}</Button>
            </fieldset>
          </form>
        </Form>
      )}
    </section>
  );
}
