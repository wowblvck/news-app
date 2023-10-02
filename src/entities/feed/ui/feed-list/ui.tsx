import React from 'react';
import { FeedDto } from '@/shared/api';
import styles from './styles.module.scss';

type FeedListProps = {
  data: FeedDto[];
  onRender: (item: FeedDto) => React.ReactNode;
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
