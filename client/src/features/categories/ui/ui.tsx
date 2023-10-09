import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React from 'react';
import { CategoryDto } from '@/shared/api';
import { SpriteCategories } from '@/shared/config';
import { Icon } from '@/shared/ui';
import { staticCategory } from '../config';
import { mapToOptions } from '../lib';
import { CategoryOption } from '../model';
import styles from './styles.module.scss';

type CategoriesType = {
  data: CategoryDto[];
};

export const Categories: React.FC<CategoriesType> = ({ data }) => {
  const router = useRouter();
  const [selectValue, setSelectValue] = React.useState<number>(0);

  const handleSelectItem = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const liElement = target.closest('li');

    if (liElement) {
      const dataId = liElement.getAttribute('data-id');
      const dataValue = liElement.getAttribute('data-value');

      if (dataId && dataValue) {
        setSelectValue(Number(dataId));
        router.push(`#${dataValue}`);
      }
    }
  };

  const allCategories: CategoryOption[] = [staticCategory, ...mapToOptions(data)];

  return (
    <ul className={styles.list} onClick={handleSelectItem}>
      {allCategories.map((category, idx) => {
        const { value, label } = category;
        return (
          <li
            key={value}
            className={clsx(styles.item, idx === selectValue && styles['item_active'])}
            data-id={idx}
            data-value={value}
          >
            <Icon
              type={'categories'}
              name={value as SpriteCategories}
              width={32}
              height={32}
              className={clsx(styles.icon)}
            />
            <p className={styles.label}>{label}</p>
          </li>
        );
      })}
    </ul>
  );
};
