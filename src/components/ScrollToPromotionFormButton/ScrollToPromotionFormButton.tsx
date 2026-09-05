'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import type { ButtonHTMLAttributes } from 'react';

type ScrollButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export function ScrollToPromotionFormButton(props: ScrollButtonProps) {
  return <button {...props} onClick={scrollToPromotionForm} />;
}
