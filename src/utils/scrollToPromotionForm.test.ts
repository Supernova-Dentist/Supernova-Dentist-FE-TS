import { describe, expect, it, vi } from 'vitest';
import { scrollToPromotionForm } from './scrollToPromotionForm';

describe('scrollToPromotionForm', () => {
  it('uses the current consultation anchor, respects reduced motion, and focuses the first control', () => {
    document.body.innerHTML = `<section id="consultation-form"><input aria-label="Full Name" /></section>`;
    const section = document.getElementById('consultation-form');
    if (section === null) throw new Error('Expected consultation form section');
    const scrollIntoView = vi.fn();
    section.scrollIntoView = scrollIntoView;
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });
    window.requestAnimationFrame = (callback: FrameRequestCallback) => {
      callback(performance.now());
      return 1;
    };

    scrollToPromotionForm();

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' });
    expect(document.querySelector('input')).toHaveFocus();
  });
});
