import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ConsultationTrustStrip from './ConsultationTrustStrip';
import { consultationTrustContent } from './consultationTrustContent';

describe('ConsultationTrustStrip', () => {
  it.each([
    ['cosmetic', consultationTrustContent.cosmetic, 'Share your priorities'],
    ['implant', consultationTrustContent.implant, 'Describe what you need'],
    ['appointment', consultationTrustContent.appointment, 'Explain what you need'],
  ] as const)('renders complete page-specific %s content in normal flow', (_variant, content, expectedTitle) => {
    const { container } = render(<ConsultationTrustStrip content={content} />);

    expect(screen.getByRole('region', { name: content.label })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: expectedTitle })).toBeInTheDocument();
    expect(container.querySelectorAll('article')).toHaveLength(4);
    expect(container.firstElementChild).not.toHaveClass('fixed', 'absolute', 'h-[235px]', 'overflow-hidden');
  });
});
