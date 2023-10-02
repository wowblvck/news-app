import React from 'react';
import { getAdvertise } from '@/shared/api';
import { AdCard } from './ad-card';
import styles from './styles.module.scss';

export const AdBlock = async () => {
  const data = await getAdvertise();

  return (
    <section className={styles.container}>
      <AdCard data={data} />
    </section>
  );
};
