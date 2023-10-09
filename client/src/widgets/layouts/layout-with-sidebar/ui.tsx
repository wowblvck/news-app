'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import React from 'react';
import { Categories } from '@/features/categories';
import { CategoryDto, getCategoriesData } from '@/shared/api';
import { useDetectSticky, useWindowWide } from '@/shared/lib';
import styles from './styles.module.scss';

const breakpointSM =
  typeof window !== 'undefined'
    ? Number(window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'))
    : 0;

const offsetPosition =
  typeof window !== 'undefined'
    ? Number(
        window.getComputedStyle(document.documentElement).getPropertyValue('--offset-nav-position')
      )
    : 0;

type LayoutWithSidebarProps = {
  children: React.ReactNode;
  initialCategories: CategoryDto[];
};

export const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = ({
  children,
  initialCategories,
}) => {
  const rootMargin = `-${offsetPosition + 1}px 0px 0px 0px`;

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesData({ sortBy: 'order', order: 'asc' }),
    initialData: initialCategories,
  });

  const [isSticky, ref] = useDetectSticky({
    rootMargin,
  });

  const wide = useWindowWide(breakpointSM - 1);

  return (
    <div className={styles.content}>
      <nav className={clsx(styles.nav, !wide && isSticky && styles.nav_scroll)} ref={ref}>
        <Categories data={data} />
      </nav>
      {children}
    </div>
  );
};
