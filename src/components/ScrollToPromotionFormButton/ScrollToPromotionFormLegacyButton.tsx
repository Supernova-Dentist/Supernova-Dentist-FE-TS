'use client';

import Button from '@/components/Button/Button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import type { ComponentProps } from 'react';

type ScrollLegacyButtonProps = Omit<ComponentProps<typeof Button>, 'onClick'>;

export function ScrollToPromotionFormLegacyButton(props: ScrollLegacyButtonProps) {
  return <Button {...props} onClick={scrollToPromotionForm} />;
}
