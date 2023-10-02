import { AdBlock } from '@/widgets/ad-block';
import { Feed } from '@/widgets/feed';
import { ContentLayout, LayoutWithSidebar } from '@/widgets/layouts';
import { Container } from '@/shared/ui';

export default function Main() {
  return (
    <Container>
      <LayoutWithSidebar>
        <ContentLayout feedSlot={<Feed />} adSlot={<AdBlock />} />
      </LayoutWithSidebar>
    </Container>
  );
}
