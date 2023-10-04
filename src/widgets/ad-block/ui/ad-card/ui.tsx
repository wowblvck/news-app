'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { AdvertiseDto } from '@/shared/api';
import styles from './styles.module.scss';

type AdCardProps = {
  data: AdvertiseDto;
};

export const AdCard: React.FC<AdCardProps> = ({ data }) => {
  const { body, image, link } = data;
  const [error, setError] = React.useState<any>(null);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <a href={link} target="_blank" className={styles.link}>
          Ссылка на сайт
        </a>
        <p className={styles.title}>Реклама</p>
      </div>
      {error || image === null ? (
        <div className={styles.fallback}>Реклама</div>
      ) : (
        <Image
          src={image}
          alt="Реклама"
          width={240}
          height={276}
          className={styles.image}
          placeholder="empty"
          priority={true}
          onError={setError}
        />
      )}
      <p className={clsx(styles.body, styles.tooltip)} data-text={body}>
        <span className={clsx(styles.body, styles.body_clamp)}>{body}</span>
      </p>
    </div>
  );
};
