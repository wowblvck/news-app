import { Reactions } from '@/features/reactions';
import { ReadMoreContent, ReadMoreItem } from '@/entities/read-more';
import { ReadMoreList } from '@/entities/read-more';
import { getNews } from '@/shared/api';
import styles from './styles.module.scss';

export const ReadMore = async () => {
  const news = await getNews(5);

  return (
    <section className={styles.container}>
      <ReadMoreContent>
        <ReadMoreContent.Title>Читайте также</ReadMoreContent.Title>
        <ReadMoreContent.Body>
          <ReadMoreList
            data={news}
            onRender={(item) => (
              <>
                <ReadMoreItem item={item} />
                {item.reaction && <Reactions data={item.reaction} />}
              </>
            )}
          />
        </ReadMoreContent.Body>
      </ReadMoreContent>
    </section>
  );
};
