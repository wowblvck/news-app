import React from 'react';
import styles from './styles.module.scss';

type ChipProps = {
  children: React.ReactNode;
};

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <div className={styles.chip}>
      <p className={styles.title}>{children}</p>
    </div>
  );
};
