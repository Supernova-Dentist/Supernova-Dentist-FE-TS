'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { UseFormReturn } from 'react-hook-form';
import type { FormValues } from './ExtractionOralSurgeryConsentFormContent';
import definition from './wisdomToothConsent.json';

export function WisdomTextField({ form, name, label, readOnly = false }: {
  form: UseFormReturn<FormValues>;
  name: string;
  label: string;
  readOnly?: boolean;
}) {
  return <FormField control={form.control} name={`wisdom.${name}`} render={({ field }) => (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl><Input {...field} value={String(field.value ?? '')} readOnly={readOnly} className={`h-12 ${readOnly ? 'bg-muted/40' : ''}`} /></FormControl>
      <p className='text-xs text-muted-foreground'>{readOnly ? 'Filled automatically from the clinician’s team profile.' : 'Enter the clinician’s GDC number if it has not been filled automatically.'}</p>
      <FormMessage />
    </FormItem>
  )} />;
}

export default function WisdomToothClinicalDetails({ form }: { form: UseFormReturn<FormValues> }) {
  return <>
    {definition.sections.map((section) => <section key={section.title} className='space-y-5 rounded-2xl border bg-card p-4 shadow-sm'>
      <h2 className='text-xl font-semibold tracking-tight'>{section.title}</h2>
      {section.paragraphs.map((paragraph) => <p key={paragraph} className='text-sm leading-6 text-muted-foreground'>{paragraph}</p>)}
      {section.fields.map((item) => item.kind === 'choices' ? <div key={item.id} className='space-y-3'>
        {item.label !== section.title && <h3 className='text-sm font-semibold'>{item.label}</h3>}
        <div className='grid gap-3 sm:grid-cols-2'>
          {item.options?.map((option) => <FormField key={option.id} control={form.control} name={`wisdom.${option.id}`} render={({ field }) => (
            <FormItem>
              <FormLabel className='flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border bg-background p-4'>
                <FormControl><Checkbox checked={field.value === true} onCheckedChange={(checked) => {
                  field.onChange(checked === true);
                  if (checked === true && (item.exclusive || item.id === 'coronectomy' && option.id === 'coronectomy2')) {
                    item.options?.filter((other) => other.id !== option.id).forEach((other) => form.setValue(`wisdom.${other.id}`, false));
                  } else if (checked === true && item.id === 'coronectomy') {
                    form.setValue('wisdom.coronectomy2', false);
                  }
                  if (item.id === 'tooth') {
                    form.setValue('teeth', item.options?.filter((tooth) => form.getValues(`wisdom.${tooth.id}`) === true).map((tooth) => tooth.label).join(', ') ?? '', { shouldValidate: true });
                  }
                }} /></FormControl>
                <span className='text-sm leading-5'>{option.label}</span>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )} />)}
        </div>
        {form.formState.errors.wisdom?.[item.id]?.message !== undefined && (
          <p role='alert' className='text-sm font-medium text-destructive'>{String(form.formState.errors.wisdom[item.id]?.message)}</p>
        )}
      </div> : <FormField key={item.id} control={form.control} name={`wisdom.${item.id}`} render={({ field }) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl><Textarea {...field} value={String(field.value ?? '')} rows={3} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />)}
      {section.after.map((paragraph) => <p key={paragraph} className='text-sm leading-6 text-muted-foreground'>{paragraph}</p>)}
    </section>)}
  </>;
}
