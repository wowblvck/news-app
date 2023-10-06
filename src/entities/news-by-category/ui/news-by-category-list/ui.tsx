import React from 'react';
import { NewsDto } from '@/shared/api';
import styles from './styles.module.scss';

type NewsByCategoryListProps = {
  data: NewsDto[];
  onRender: (item: NewsDto) => React.ReactNode;
};

export const NewsByCategoryList: React.FC<NewsByCategoryListProps> = ({ data, onRender }) => {
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
