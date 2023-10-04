import { AdBlock } from '@/widgets/ad-block';
import { Feed } from '@/widgets/feed';
import { ContentLayout, LayoutWithSidebar } from '@/widgets/layouts';
import { ReadMore } from '@/widgets/read-more';
import { Container } from '@/shared/ui';

export default function Main() {
  return (
    <Container>
      <LayoutWithSidebar>
        <ContentLayout feedSlot={<Feed />} adSlot={<AdBlock />} readMoreSlot={<ReadMore />} />
      </LayoutWithSidebar>
    </Container>
  );
}
