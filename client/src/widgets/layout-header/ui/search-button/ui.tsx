import { ActionButton } from '@/shared/ui';
import { Icon } from '@/shared/ui';
import styles from './styles.module.scss';

export const SearchButton = () => {
  return (
    <ActionButton>
      <Icon type={'common'} name={'search'} width={16} height={16} className={styles.icon} />
    </ActionButton>
  );
};
