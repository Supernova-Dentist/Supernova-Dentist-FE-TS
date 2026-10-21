import { zodResolver } from '@hookform/resolvers/zod';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import type { FormValues } from './ExtractionOralSurgeryConsentFormContent';
import WisdomToothClinicalDetails from './WisdomToothClinicalDetails';
import definition from './wisdomToothConsent.json';
import { validateWisdomDetails } from './wisdomValidation';

function Harness() {
  const form = useForm<FormValues>({
    resolver: zodResolver(z.object({ wisdom: z.record(z.union([z.string(), z.boolean()])) }).superRefine((data, ctx) => {
      validateWisdomDetails(data.wisdom).forEach(({ field, message }) => ctx.addIssue({ code: 'custom', path: ['wisdom', field], message }));
    })),
    defaultValues: {
      wisdom: Object.fromEntries([
        ['treatingGdc', '123456'], ['clinicianGdc', '123456'],
        ...definition.sections.flatMap((section) => section.fields.flatMap((field) =>
          field.kind === 'choices' ? (field.options ?? []).map((option) => [option.id, false]) : [[field.id, '']]
        )),
      ]),
    },
  });
  return <Form {...form}>
    <form>
      <WisdomToothClinicalDetails form={form} />
      <button type='button' onClick={() => { void form.trigger('wisdom').then((valid) => form.setValue('patientName', valid ? 'Valid' : 'Invalid')); }}>Validate</button>
      <output>{form.watch('patientName')}</output>
      <output>{form.watch('teeth')}</output>
    </form>
  </Form>;
}

describe('wisdom tooth clinical preparation', () => {
  beforeEach(() => vi.stubGlobal('ResizeObserver', class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }));
  afterEach(() => vi.unstubAllGlobals());
  it('validates controlled selections and replaces mutually exclusive risk choices', async () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole('button', { name: 'Validate' }));
    await screen.findByText('Invalid');
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole('checkbox', { name: 'Lower Right (LR8)' }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'Surgical extraction' }));
    fireEvent.click(screen.getAllByRole('checkbox', { name: 'Discussed / Applicable' })[0]);
    fireEvent.click(screen.getAllByRole('checkbox', { name: 'Not applicable' })[0]);
    expect(screen.getAllByRole('checkbox', { name: 'Discussed / Applicable' })[0]).not.toBeChecked();
    fireEvent.click(screen.getByRole('checkbox', { name: 'Coronectomy discussed' }));
    fireEvent.click(screen.getAllByRole('checkbox', { name: 'Not applicable' })[2]);
    fireEvent.click(screen.getByRole('checkbox', { name: 'Local anaesthetic' }));
    fireEvent.click(screen.getByRole('button', { name: 'Validate' }));
    await screen.findByText('Valid');
    expect(screen.getByText('Lower Right (LR8)', { selector: 'output' })).toBeInTheDocument();
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
  });
});
