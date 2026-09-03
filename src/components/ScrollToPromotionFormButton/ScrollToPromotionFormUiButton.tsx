'use client';

import { Button, type ButtonProps } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';

type ScrollUiButtonProps = Omit<ButtonProps, 'onClick'>;

export function ScrollToPromotionFormUiButton(props: ScrollUiButtonProps) {
  return <Button {...props} onClick={scrollToPromotionForm} />;
}
