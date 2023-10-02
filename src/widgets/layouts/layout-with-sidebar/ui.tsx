import React from 'react';
import { Categories } from '@/features/categories';
import { getCategoriesData } from '@/shared/api';
import styles from './styles.module.scss';

type LayoutWithSidebarProps = {
  children: React.ReactNode;
};

export const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = async ({ children }) => {
  const categories = await getCategoriesData({ sortBy: 'order', order: 'asc' });
  return (
    <div className={styles.content}>
      <Categories data={categories} />
      {children}
    </div>
  );
};
