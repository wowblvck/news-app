'use client';

import { useQuery } from '@tanstack/react-query';
import { Reactions } from '@/features/reactions';
import { ReadMoreContent, ReadMoreItem } from '@/entities/read-more';
import { ReadMoreList } from '@/entities/read-more';
import { getNews, NewsDto } from '@/shared/api';
import styles from './styles.module.scss';

type ReadMoreProps = {
  initialData?: NewsDto[];
};

export const ReadMore: React.FC<ReadMoreProps> = ({ initialData }) => {
  const { data: news } = useQuery({
    queryKey: ['readMoreNews'],
    queryFn: () => getNews(5),
    initialData: initialData,
  });

  return (
    <section className={styles.container}>
      <ReadMoreContent>
        <ReadMoreContent.Title>Читайте также</ReadMoreContent.Title>
        <ReadMoreContent.Body>
          {news && (
            <ReadMoreList
              data={news}
              onRender={(item) => (
                <ReadMoreItem
                  item={item}
                  reactionSlot={item.reaction && <Reactions data={item.reaction} />}
                />
              )}
            />
          )}
        </ReadMoreContent.Body>
      </ReadMoreContent>
    </section>
  );
};
