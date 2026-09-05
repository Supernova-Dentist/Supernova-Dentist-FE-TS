import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import GoogleReview from './GoogleReview';

describe('GoogleReview', () => {
  it('uses a deliberate excerpt without fixed-height clipping and exposes both actions', () => {
    const onClickReview = vi.fn();
    const review = 'A detailed patient review '.repeat(30);
    const { container } = render(
      <GoogleReview
        name='Test Patient'
        date='2026-09-01'
        review={review}
        rating={5}
        url='https://example.com/review'
        previewUrl='https://example.com/preview'
        onClickReview={onClickReview}
      />
    );

    expect(container.innerHTML).not.toContain('h-[235px]');
    expect(container.querySelector('.overflow-hidden')).not.toBeInTheDocument();
    expect(screen.getByText(/A detailed patient review/)).toHaveTextContent('...');

    fireEvent.click(screen.getByRole('button', { name: "Read Test Patient's full review" }));
    expect(onClickReview).toHaveBeenCalledOnce();
    expect(screen.getByRole('link', { name: 'View on Google' })).toHaveAttribute('href', 'https://example.com/review');
  });
});
