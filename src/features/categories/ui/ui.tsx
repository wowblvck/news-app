'use client';

import clsx from 'clsx';
import React from 'react';
import { CategoryDto } from '@/shared/api';
import { SpritesMeta } from '@/shared/config';
import { Icon } from '@/shared/ui';
import { staticCategory } from '../config';
import styles from './styles.module.scss';

type CategoriesType = {
  data: CategoryDto[];
};

export const Categories: React.FC<CategoriesType> = ({ data }) => {
  const [selectValue, setSelectValue] = React.useState<number>(0);

  const handleSelectItem = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const liElement = target.closest('li');

    if (liElement) {
      const dataId = liElement.getAttribute('data-id');
      const dataValue = liElement.getAttribute('data-value');

      if (dataId && dataValue) {
        setSelectValue(Number(dataId));
      }
    }
  };

  const allCategories = [staticCategory, ...data];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list} onClick={handleSelectItem}>
        {allCategories.map((category, idx) => {
          return (
            <li
              key={category.value}
              className={clsx(styles.item, idx === selectValue && styles['item_active'])}
              data-id={idx}
              data-value={category.value}
            >
              <Icon
                type={'categories'}
                name={category.value as SpritesMeta['categories']}
                width={32}
                height={32}
                className={clsx(styles.icon)}
              />
              <p className={styles.label}>{category.label}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
