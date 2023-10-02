import { ActionButton } from '@/shared/ui';
import { Icon } from '@/shared/ui';
import styles from './styles.module.scss';

export const Profile = () => {
  return (
    <ActionButton>
      <Icon type={'common'} name={'profile'} width={16} height={16} className={styles.icon} />
    </ActionButton>
  );
};
