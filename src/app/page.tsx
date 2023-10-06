import { AdBlock } from '@/widgets/ad-block';
import { Feed } from '@/widgets/feed';
import { ContentLayout, LayoutWithSidebar } from '@/widgets/layouts';
import { NewsByCategory } from '@/widgets/news-by-category';
import { ReadMore } from '@/widgets/read-more';
import { getCategoriesData } from '@/shared/api';
import { Container } from '@/shared/ui';

export default async function Main() {
  const categories = await getCategoriesData({ sortBy: 'order', order: 'asc' });

  return (
    <Container>
      <LayoutWithSidebar initialCategories={categories}>
        <ContentLayout
          feedSlot={<Feed />}
          adSlot={<AdBlock />}
          readMoreSlot={<ReadMore />}
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
