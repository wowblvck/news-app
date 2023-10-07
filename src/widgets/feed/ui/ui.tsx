'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FeedContent, FeedList, FeedItem, FeedMajor } from '@/entities/feed';
import { getMajorNews, getLastFeeds, NewsDto } from '@/shared/api';
import styles from './styles.module.scss';

type FeedProps = {
  initialFeeds?: NewsDto[];
  initialMajorNews?: NewsDto;
};

export const Feed: React.FC<FeedProps> = ({ initialFeeds, initialMajorNews }) => {
  const { data: feeds } = useQuery({
    queryKey: ['feeds'],
    queryFn: () => getLastFeeds(),
    initialData: initialFeeds,
  });

  const { data: majorNews } = useQuery({
    queryKey: ['majorNews'],
    queryFn: () => getMajorNews(),
    initialData: initialMajorNews,
  });

  return (
    <section className={styles.container}>
      <FeedContent>
        <FeedContent.Title>Лента</FeedContent.Title>
        <FeedContent.Body>
          {feeds && <FeedList data={feeds} onRender={(item) => <FeedItem item={item} />} />}
        </FeedContent.Body>
      </FeedContent>
      {majorNews && <FeedMajor data={majorNews} />}
    </section>
  );
};
