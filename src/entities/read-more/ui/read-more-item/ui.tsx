import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { NewsDto } from '@/shared/api';
import { routes } from '@/shared/config';
import { Chip } from '@/shared/ui';
import styles from './styles.module.scss';

type ReadMoreItemProps = {
  item: NewsDto;
};

export const ReadMoreItem: React.FC<ReadMoreItemProps> = ({ item }) => {
  const { title, category, date_full, id } = item;

  const formattedDate = moment(date_full).format('D.MM.YYYY, HH:mm');

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {category && (
          <Link href={routes.category(category.value)}>
            <Chip>{category.label}</Chip>
          </Link>
        )}
        <time className={styles.date}>{formattedDate}</time>
      </div>
      <Link href={routes.feed(id)} className={styles.title}>
        {title}
      </Link>
    </div>
  );
};
