import React from 'react';
import styles from './styles.module.scss';

type FeedContentProps = {
  children: React.ReactNode;
};

type FeedContentTitleProps = {
  children: React.ReactNode;
};

type FeedContentBodyProps = {
  children: React.ReactNode;
};

type FeedContentPropsExtended<T> = React.FC<T> & {
  Title: React.FC<FeedContentTitleProps>;
  Body: React.FC<FeedContentBodyProps>;
};

export const FeedContent: FeedContentPropsExtended<FeedContentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

FeedContent.Title = ({ children }) => <h2 className={styles.title}>{children}</h2>;
FeedContent.Title.displayName = 'FeedContentTitle';

FeedContent.Body = ({ children }) => <>{children}</>;
FeedContent.Body.displayName = 'FeedContentBody';
