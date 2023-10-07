import { AdBlock } from '@/widgets/ad-block';
import { Feed } from '@/widgets/feed';
import { ContentLayout, LayoutWithSidebar } from '@/widgets/layouts';
import { NewsByCategory } from '@/widgets/news-by-category';
import { ReadMore } from '@/widgets/read-more';
import { getAdvertise, getCategoriesData, getLastFeeds, getMajorNews, getNews } from '@/shared/api';
import { Container } from '@/shared/ui';

export default async function Main() {
  /* Необходимо для предварительной загрузки данных (SSR).
     Минус подхода в том, что если не выполнится один из промисов, то будет ошибка на всей странице.
     Плюс такого подхода в том, что мы получаем предварительно загруженные данные (good for SEO).
     Можно удалить, но в таком случае первичные данные будут загружаться у клиента (bad for SEO).
  */
  const [categories, feeds, majorNews, adv, news] = await Promise.all([
    getCategoriesData({ sortBy: 'order', order: 'asc' }),
    getLastFeeds(),
    getMajorNews(),
    getAdvertise(),
    getNews(5),
  ]);

  return (
    <Container>
      <LayoutWithSidebar initialCategories={categories}>
        <ContentLayout
          feedSlot={<Feed initialFeeds={feeds} initialMajorNews={majorNews} />}
          adSlot={<AdBlock initialData={adv} />}
          readMoreSlot={<ReadMore initialData={news} />}
          newsByCategorySlot={
            <>
              {categories &&
                categories.map((category) => (
                  <NewsByCategory key={category.id} category={category} />
                ))}
            </>
          }
        />
      </LayoutWithSidebar>
    </Container>
  );
}
