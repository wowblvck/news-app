import { AdBlock } from '@/widgets/ad-block';
import { Feed } from '@/widgets/feed';
import { ContentLayout, LayoutWithSidebar } from '@/widgets/layouts';
import { NewsByCategory } from '@/widgets/news-by-category';
import { ReadMore } from '@/widgets/read-more';
import { getAdvertise, getCategoriesData, getLastFeeds, getMajorNews, getNews } from '@/shared/api';
import { Container } from '@/shared/ui';

export const dynamic = 'force-dynamic';

export default async function Main() {
  const categories = await getCategoriesData({ sortBy: 'order', order: 'asc' });
  const feeds = await getLastFeeds();
  const majorNews = await getMajorNews();
  const adv = await getAdvertise();
  const news = await getNews(5);

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
