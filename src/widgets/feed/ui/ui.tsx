import { FeedContent, FeedList, FeedItem, FeedMajor } from '@/entities/feed';
import { getHotNews, getLastFeeds } from '@/shared/api';
import styles from './styles.module.scss';

export const Feed = async () => {
  const feeds = await getLastFeeds();
  const hotNews = await getHotNews();

  return (
    <section id="#лента" className={styles.container}>
      <FeedContent>
        <FeedContent.Title>Лента</FeedContent.Title>
        <FeedContent.Body>
          <FeedList data={feeds} onRender={(item) => <FeedItem item={item} />} />
        </FeedContent.Body>
      </FeedContent>
      <FeedMajor data={hotNews} />
    </section>
  );
};
