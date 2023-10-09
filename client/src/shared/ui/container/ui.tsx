import React from 'react';
import styles from './styles.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
