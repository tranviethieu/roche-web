// ProgressBar.tsx
import React from 'react';
import { NProgress } from '@tanem/react-nprogress';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  isAnimating: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isAnimating }) => {
  return (
    <NProgress isAnimating={isAnimating}>
      {({ isFinished, progress, animationDuration }) => (
        <div className={styles.container}>
          <div
            className={`${styles.bar} ${isFinished ? styles.finished : ''}`}
            style={{
              marginLeft: `${isFinished ? '100%' : progress * 100}%`,
              transitionDuration: `${animationDuration}ms`,
            }}
          />
        </div>
      )}
    </NProgress>
  );
};

export default ProgressBar;
