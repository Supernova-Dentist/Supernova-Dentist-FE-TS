'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ScrollMotionButtonProps = Omit<HTMLMotionProps<'button'>, 'onClick'>;

export function ScrollToPromotionFormMotionButton(props: ScrollMotionButtonProps) {
  return <motion.button {...props} onClick={scrollToPromotionForm} />;
}
