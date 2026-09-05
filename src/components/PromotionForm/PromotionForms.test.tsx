import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ConsultationPromotionForm from './ConsultationPromotionForm';
import GeneralPromotionForm from './GeneralPromotionForm';
import ImplantPromotionForm from './ImplantPromotionForm';
import { ANALYTICS_CONSENT_KEY, CONSENT_READY_KEY } from '@/lib/tracking';

vi.mock('next/navigation', () => ({
  usePathname: () => '/test-consultation-route',
}));

vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

beforeEach(() => {
  vi.stubGlobal('ResizeObserver', class {
    observe() {}
    unobserve() {}
    disconnect() {}
  });
  process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL = 'https://example.test';
  localStorage.clear();
  window.history.replaceState({}, '', '/test-consultation-route');
  window.dataLayer = [];
  window.gtag = vi.fn();
  window.fbq = Object.assign(vi.fn(), {
    queue: [],
    disablePushState: false,
    forcePageView: false,
    generation: 1,
  });
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const formCases = [
  ['general', GeneralPromotionForm, 'Send Appointment Enquiry', 'NewDentalLead'],
  ['cosmetic', ConsultationPromotionForm, 'Send Cosmetic Enquiry', 'NewCosmeticPatientLead'],
  ['implant', ImplantPromotionForm, 'Send Implant Enquiry', 'NewImplantLead'],
] as const;

function completeValidForm() {
  fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'Test Patient' } });
  fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Contact Number'), { target: { value: '07123456789' } });
}

describe('consultation enquiry forms', () => {
  it.each(formCases)('connects visible validation errors to fields and focuses the first error for %s', async (_variant, FormComponent, buttonName) => {
    render(<FormComponent />);

    fireEvent.click(screen.getByRole('button', { name: buttonName }));

    const nameInput = screen.getByLabelText('Full Name');
    await waitFor(() => expect(nameInput).toHaveFocus());
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    expect(nameInput).toHaveAttribute('aria-describedby', 'fullname-error');
    expect(screen.getAllByRole('alert')).toHaveLength(3);
    expect(screen.getByText('Email is required')).toHaveAttribute('role', 'alert');
    expect(screen.getByText('Phone number is required')).toHaveAttribute('role', 'alert');
  });

  it.each(formCases)('handles a synthetic successful %s submission without a production conversion', async (_variant, FormComponent, buttonName, eventName) => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    sessionStorage.setItem(CONSENT_READY_KEY, 'true');
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ alreadyExists: false }),
    });
    vi.stubGlobal('fetch', fetchMock);
    render(<FormComponent />);
    completeValidForm();

    fireEvent.click(screen.getByRole('button', { name: buttonName }));

    expect(await screen.findByRole('dialog', { name: /Thank you, Test Patient/ })).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock.mock.calls[0]?.[0]).toBe('https://example.test/promotion');
    const request = fetchMock.mock.calls[0]?.[1] as RequestInit;
    const payload = JSON.parse(String(request.body)) as { optOutEmails: boolean; tracking: { mode: string; conversionPage: { pagePath: string } } };
    expect(payload.optOutEmails).toBe(false);
    expect(payload.tracking.mode).toBe('current');
    expect(payload.tracking.conversionPage.pagePath).toBe('/test-consultation-route');
    expect(window.dataLayer).toContainEqual({ event: eventName });
    expect(window.gtag).not.toHaveBeenCalled();
    expect(window.fbq).not.toHaveBeenCalled();
  });

  it.each(formCases)('shows an unchecked accessible marketing opt-out for %s', (_variant, FormComponent) => {
    render(<FormComponent />);
    const checkbox = screen.getByRole('checkbox', { name: /I do not want to receive occasional emails/i });
    expect(checkbox).not.toBeChecked();
  });

  it.each(formCases)('shows the synthetic server message in an accessible %s failure dialog', async (_variant, FormComponent, buttonName) => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ message: 'Synthetic server error' }),
    }));
    render(<FormComponent />);
    completeValidForm();

    fireEvent.click(screen.getByRole('button', { name: buttonName }));

    expect(await screen.findByRole('alertdialog', { name: 'Submission Failed' })).toBeInTheDocument();
    expect(screen.getByText('Synthetic server error')).toBeInTheDocument();
  });
});
