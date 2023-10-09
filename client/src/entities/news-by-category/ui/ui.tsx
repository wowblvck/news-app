import Link from 'next/link';
import React from 'react';
import { AvailableCategoryValue } from '@/shared/api';
import { routes } from '@/shared/config';
import { Icon } from '@/shared/ui';
import styles from './styles.module.scss';

type NewsByCategoryContentProps = {
  children: React.ReactNode;
};

type NewsByCategoryContentTitleProps = {
  category: AvailableCategoryValue;
  children: React.ReactNode;
};

type NewsByCategoryContentBodyProps = {
  children: React.ReactNode;
};

type NewsByCategoryContentPropsExtended<T> = React.FC<T> & {
  Title: React.FC<NewsByCategoryContentTitleProps>;
  Body: React.FC<NewsByCategoryContentBodyProps>;
};

export const NewsByCategoryContent: NewsByCategoryContentPropsExtended<
  NewsByCategoryContentProps
> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

NewsByCategoryContent.Title = ({ children, category }) => (
  <h2 className={styles.title}>
    <Link href={routes.category(category)} className={styles.link}>
      {children}
      <Icon type={'common'} name={'arrow'} width={24} height={24} />
    </Link>
  </h2>
);
NewsByCategoryContent.Title.displayName = 'NewsByCategoryContentTitle';

NewsByCategoryContent.Body = ({ children }) => <>{children}</>;
NewsByCategoryContent.Body.displayName = 'NewsByCategoryContentBody';
