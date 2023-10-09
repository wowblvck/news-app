import { Container } from '@/shared/ui';
import { Logo } from '@/shared/ui';
import { OfferBtn } from './offer-btn';
import { SocialLinks } from './social-links';
import styles from './styles.module.scss';
import { UsefulLinks } from './useful-links';

export const LayoutFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Logo type="footer">Лого</Logo>
            <p className={styles.copyright}>
              &copy; <span className={styles.copyright__name}>Название</span> 2023. Все права
              защищены
            </p>
          </div>
          <div className={styles.linksContainer}>
            <UsefulLinks />
            <SocialLinks />
          </div>
          <OfferBtn>Предложить новость</OfferBtn>
        </div>
      </Container>
    </footer>
  );
};
