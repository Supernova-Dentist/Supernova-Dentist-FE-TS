import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ServiceActions from './ServiceActions';
import { getServiceAction } from '@/lib/serviceActions';

let onIntersection: (entries: Array<{ isIntersecting: boolean }>) => void;
const scrollIntoView = vi.fn();

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback: typeof onIntersection) { onIntersection = callback; }
    observe = vi.fn();
    disconnect = vi.fn();
  });
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
  HTMLElement.prototype.scrollIntoView = scrollIntoView;
});

afterEach(() => { cleanup(); vi.unstubAllGlobals(); vi.clearAllMocks(); });

function setup() {
  render(<><form id='composite-bonding-enquiry-form' tabIndex={-1}><input aria-label='Your name' /></form><ServiceActions pathname='/cosmetic-dentistry/composite-bonding' /></>);
  const nav = screen.getByRole('navigation', { hidden: true });
  act(() => { window.scrollY = 500; fireEvent.scroll(window); });
  return nav;
}

describe('service contact actions', () => {
  it('shows one enquiry and a call action after scrolling, then hides both from keyboard navigation when the form is visible', () => {
    const nav = setup();
    expect(nav).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByRole('link', { name: 'Enquire now' })).toHaveAttribute('href', '#composite-bonding-enquiry-form');
    expect(screen.getByRole('link', { name: /^Call$/ })).toHaveAttribute('href', 'tel:01278228665');
    act(() => onIntersection([{ isIntersecting: true }]));
    expect(nav).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByText('Enquire now')).toHaveAttribute('tabindex', '-1');
    act(() => onIntersection([{ isIntersecting: false }]));
    expect(nav).toHaveAttribute('aria-hidden', 'false');
  });

  it('moves focus to the existing form and respects reduced motion without navigating away', () => {
    setup();
    fireEvent.click(screen.getByRole('link', { name: 'Enquire now' }));
    expect(document.activeElement).toBe(document.getElementById('composite-bonding-enquiry-form'));
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'instant' });
  });

  it('gets out of the way while a patient edits a field', () => {
    const nav = setup();
    act(() => screen.getByRole('textbox').focus());
    expect(nav).toHaveAttribute('aria-hidden', 'true');
  });

  it('prioritises calling reception on emergency pages and retains the triage form', () => {
    render(<ServiceActions pathname='/general-dentistry/emergency-dentistry' />);
    act(() => { window.scrollY = 500; fireEvent.scroll(window); });
    expect(screen.getByRole('link', { name: 'Call reception' })).toHaveAttribute('href', 'tel:01278228665');
    expect(screen.getByRole('link', { name: 'Triage form' })).toHaveAttribute('href', '#form');
  });

  it('preserves a treatment-specific fallback for finance and leaves other routes alone', () => {
    expect(getServiceAction('/general-dentistry/dental-finance')?.href).toBe('/enquiry?ref=general-dentistry%2Fdental-finance');
    expect(getServiceAction('/pricing')).toBeUndefined();
  });
});
