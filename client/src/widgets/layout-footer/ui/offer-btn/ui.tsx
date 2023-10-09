import React from 'react';
import styles from './styles.module.scss';

type OfferBtnProps = {
  children: React.ReactNode;
};

export const OfferBtn: React.FC<OfferBtnProps> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
