// Keep enquiry links aligned with the forms rendered by each treatment page.
const serviceForms: Record<string, string> = {
  '/cosmetic-dentistry/composite-bonding': 'composite-bonding-enquiry-form',
  '/cosmetic-dentistry/dental-implants': 'implants-enquiry-form',
  '/cosmetic-dentistry/invisalign': 'invisalign-enquiry-form',
  '/cosmetic-dentistry/teeth-whitening': 'teeth-whitening-enquiry-form',
  '/general-dentistry/dental-hygiene': 'hygiene-enquiry-form',
  '/general-dentistry/new-patient-examination': 'new-patient-examination-enquiry-form',
  '/general-dentistry/white-composite-fillings': 'fillings-enquiry-form',
  '/general-dentistry/root-canal-treatment': 'root-canal-enquiry-form',
  '/general-dentistry/dentures': 'dentures-enquiry-form',
  '/general-dentistry/sports-mouthguards': 'sports-mouthguards-enquiry-form',
  '/general-dentistry/dental-therapist': 'dental-therapist-enquiry-form',
  '/general-dentistry/dental-membership-plans': 'practice-enquiry-form',
};

export function getServiceAction(pathname: string) {
  const path = `/${pathname.replace(/^\/+|\/+$/g, '')}`;
  const formId = serviceForms[path];

  if (formId !== undefined) return { href: `#${formId}`, formId, label: 'Enquire now', emergency: false };
  if (path === '/general-dentistry/emergency-dentistry') {
    return { href: 'tel:01278228665', formId: 'form', label: 'Call reception', emergency: true };
  }
  if (path === '/general-dentistry/dental-finance') {
    return { href: `/enquiry?ref=${encodeURIComponent(path.slice(1))}`, formId: undefined, label: 'Enquire now', emergency: false };
  }
  return undefined;
}

export function getServiceEnquiryHref(referringPage: string) {
  const action = getServiceAction(referringPage);
  return action?.href ?? `/enquiry?ref=${encodeURIComponent(referringPage)}`;
}
