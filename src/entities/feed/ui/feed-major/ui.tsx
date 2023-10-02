import Link from 'next/link';
import React from 'react';
import { FeedDto } from '@/shared/api';
import { Icon, Marquee } from '@/shared/ui';
import styles from './styles.module.scss';

type HotNewsProps = {
  data: FeedDto;
};

export const FeedMajor: React.FC<HotNewsProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Link href={{ pathname: `/feed/${data.id}` }}>
        <Marquee>
          <div className={styles.content}>
            <span className={styles.icon}>
              <Icon type={'common'} name={'hot'} width={16} height={19} />
            </span>
            <p className={styles.title}>{data.title}</p>
          </div>
        </Marquee>
      </Link>
    </div>
  );
};
