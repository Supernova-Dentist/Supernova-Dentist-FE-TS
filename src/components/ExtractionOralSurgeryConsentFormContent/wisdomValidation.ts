import definition from './wisdomToothConsent.json';

export function validateClinicianGdcDetails(data: Record<string, string | boolean>) {
  const errors: Array<{ field: string; message: string }> = [];
  for (const field of ['treatingGdc', 'clinicianGdc']) {
    if (typeof data[field] !== 'string' || !/^\d{5,6}$/.test(String(data[field]).trim())) {
      errors.push({ field, message: 'Please enter the clinician’s GDC number (5 or 6 digits).' });
    }
  }
  return errors;
}

export function validateWisdomDetails(data: Record<string, string | boolean>) {
  const errors = validateClinicianGdcDetails(data);
  for (const section of definition.sections) {
    for (const group of section.fields) {
      if (group.kind !== 'choices') continue;
      const selected = group.options?.filter((option) => data[option.id] === true) ?? [];
      if (group.required && selected.length === 0 || group.exclusive === true && selected.length > 1) {
        errors.push({ field: group.id, message: `Please select ${group.exclusive === true ? 'one option' : 'at least one option'} for ${group.label.toLowerCase()}.` });
      }
      if (group.id === 'coronectomy' && data.coronectomy2 === true && selected.length > 1) {
        errors.push({ field: group.id, message: 'Not applicable cannot be selected with a coronectomy option.' });
      }
      const other = selected.find((option) => option.label === 'Other');
      if (other !== undefined && String(data[`${group.id}Other`] ?? '').trim() === '') {
        errors.push({ field: `${group.id}Other`, message: 'Please specify the other option.' });
      }
    }
  }
  return errors;
}
