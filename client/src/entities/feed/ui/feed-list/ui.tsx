import React from 'react';
import { NewsDto } from '@/shared/api';
import styles from './styles.module.scss';

type FeedListProps = {
  data: NewsDto[];
  onRender: (item: NewsDto) => React.ReactNode;
};

export const FeedList: React.FC<FeedListProps> = ({ data, onRender }) => {
  return (
    <ul className={styles.list}>
      {data.map((feed) => (
        <li key={feed.id}>{onRender(feed)}</li>
      ))}
    </ul>
  );
};
