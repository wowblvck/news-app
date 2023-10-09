import Link from 'next/link';
import React from 'react';
import { NewsDto } from '@/shared/api';
import { routes } from '@/shared/config';
import { Icon, Marquee } from '@/shared/ui';
import styles from './styles.module.scss';

type HotNewsProps = {
  data: NewsDto;
};

export const FeedMajor: React.FC<HotNewsProps> = ({ data }) => {
  const { id, title } = data;
  return (
    <div className={styles.container}>
      <Marquee>
        <div className={styles.content}>
          <span className={styles.icon}>
            <Icon type={'common'} name={'hot'} width={16} height={19} />
          </span>
          <Link href={routes.feed(id)} className={styles.title}>
            {title}
          </Link>
        </div>
      </Marquee>
    </div>
  );
};
