import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NewsDto } from '@/shared/api';
import { routes } from '@/shared/config';
import styles from './styles.module.scss';

type NewsByCategoryItemProps = {
  item: NewsDto;
  reactionSlot: React.ReactNode;
};

export const NewsByCategoryItem: React.FC<NewsByCategoryItemProps> = ({ item, reactionSlot }) => {
  const { date_full, title, thumbnail, id } = item;

  const formattedDate = moment(date_full).format('D.MM.YYYY, HH:mm');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src={thumbnail} alt={`Миниатюра`} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.body}>
          <p className={styles.date}>{formattedDate}</p>
          <Link href={routes.feed(id)} className={styles.title}>
            {title}
          </Link>
        </div>
      </div>
      {reactionSlot && <div className={styles.reactions}>{reactionSlot}</div>}
    </div>
  );
};
