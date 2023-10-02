import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { FeedDto } from '@/shared/api';
import { Chip, Icon } from '@/shared/ui';
import styles from './styles.module.scss';

type FeedItemProps = {
  item: FeedDto;
};

export const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const { title, category, date_full, id } = item;

  const formattedTime = moment(date_full).format('HH:mm');

  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <Icon type={'common'} name={'fire'} width={14} height={19} />
      </span>
      <div className={styles.content}>
        <Link href={{ pathname: `/feed/${id}` }} className={styles.title}>
          {title}
        </Link>
        <div className={styles.info}>
          <p className={styles.time}>{formattedTime}</p>
          {category && (
            <Link href={{ pathname: `/category/${category.value}` }}>
              <Chip>{category.label}</Chip>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
