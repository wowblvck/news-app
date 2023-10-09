import Link from 'next/link';
import React from 'react';
import { routes } from '@/shared/config';
import { Icon } from '@/shared/ui';
import styles from './styles.module.scss';

type ReadMoreContentProps = {
  children: React.ReactNode;
};

type ReadMoreContentTitleProps = {
  children: React.ReactNode;
};

type ReadMoreContentBodyProps = {
  children: React.ReactNode;
};

type ReadMoreContentPropsExtended<T> = React.FC<T> & {
  Title: React.FC<ReadMoreContentTitleProps>;
  Body: React.FC<ReadMoreContentBodyProps>;
};

export const ReadMoreContent: ReadMoreContentPropsExtended<ReadMoreContentProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

ReadMoreContent.Title = ({ children }) => (
  <h2 className={styles.title}>
    <Link href={routes.read_more} className={styles.link}>
      {children}
      <Icon type={'common'} name={'arrow'} width={24} height={24} />
    </Link>
  </h2>
);
ReadMoreContent.Title.displayName = 'ReadMoreContentTitle';

ReadMoreContent.Body = ({ children }) => <>{children}</>;
ReadMoreContent.Body.displayName = 'ReadMoreContentBody';
