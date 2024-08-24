import React from 'react';
import styles from './bubble.module.css';

export const BubbleText = () => {
  return (
    <span className={styles.bubbleText}>
      {'Supernova'.split('').map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </span>
  );
};
