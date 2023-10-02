import { Icon } from '@/shared/ui';
import styles from './styles.module.scss';

export const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        По любым вопросам
        <br />
        пишите на{' '}
        <a className={styles.title__email} href="mailto:privet@yandex.com" target="_blank">
          privet@yandex.com
        </a>
      </p>
      <a href="https://t.me" target="_blank" className={styles.subscribe}>
        <Icon type={'social'} name={'telegram'} width={24} height={24} />
        Подписаться
      </a>
    </div>
  );
};
