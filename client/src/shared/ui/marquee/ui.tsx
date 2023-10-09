import React from 'react';
import styles from './styles.module.scss';

type MarqueeProps = {
  children: React.ReactNode;
};

export const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className={styles.marqueeContainer}>
      {Array(2)
        .fill(children)
        .map((item, idx) => (
          <div key={idx} className={styles.marqueeContent}>
            {item}
          </div>
        ))}
    </div>
  );
};
