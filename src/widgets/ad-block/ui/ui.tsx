'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AdvertiseDto, getAdvertise } from '@/shared/api';
import { AdCard } from './ad-card';
import styles from './styles.module.scss';

type AdBLockProps = {
  initialData?: AdvertiseDto;
};

export const AdBlock: React.FC<AdBLockProps> = ({ initialData }) => {
  const { data: adv } = useQuery({
    queryKey: ['advertise'],
    queryFn: () => getAdvertise(),
    initialData: initialData,
  });

  return <section className={styles.container}>{adv && <AdCard data={adv} />}</section>;
};
