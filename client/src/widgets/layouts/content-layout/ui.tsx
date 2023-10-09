import React from 'react';
import styles from './styles.module.scss';

type ContentLayoutProps = {
  feedSlot?: React.ReactNode;
  adSlot?: React.ReactNode;
  readMoreSlot?: React.ReactNode;
  newsByCategorySlot?: React.ReactNode;
};

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  feedSlot,
  adSlot,
  readMoreSlot,
  newsByCategorySlot,
}) => {
  return (
    <div className={styles.contentContainer}>
      {feedSlot}
      {adSlot}
      {readMoreSlot}
      {newsByCategorySlot}
    </div>
  );
};
