import React from 'react';
import { SpriteDateAndCurrency } from '@/shared/config';
import { Icon } from '@/shared/ui';
import styles from './styles.module.scss';

type ChipCardProps = {
  icon: SpriteDateAndCurrency;
  children: React.ReactNode;
};

export const ChipCard: React.FC<ChipCardProps> = ({ icon, children }) => {
  return (
    <div className={styles.container}>
      <Icon type={'date_and_currency'} name={icon} width={24} height={24} />
      <p className={styles.body}>{children}</p>
    </div>
  );
};
