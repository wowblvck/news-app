import React from 'react';
import { NewsDto } from '@/shared/api';
import styles from './styles.module.scss';

type ReadMoreListProps = {
  data: NewsDto[];
  onRender: (item: NewsDto) => React.ReactNode;
};

export const ReadMoreList: React.FC<ReadMoreListProps> = ({ data, onRender }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id} className={styles.item}>
          {onRender(item)}
        </li>
      ))}
    </ul>
  );
};
