'use client';

import { motion } from 'framer-motion';

const DURATION = 5;

export default function RedirectProgressBar() {
  return (
    <div className="w-full h-1 bg-gray-200 rounded overflow-hidden mt-4">
      <motion.div
        className="h-full bg-gold"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: DURATION, ease: 'linear' }}
      />
    </div>
  );
}