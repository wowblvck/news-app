import React from 'react';
import styles from './styles.module.scss';

type ContentLayoutProps = {
  feedSlot?: React.ReactNode;
  adSlot?: React.ReactNode;
  readMoreSlot?: React.ReactNode;
  cardsSlot?: React.ReactNode;
};

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  feedSlot,
  adSlot,
  readMoreSlot,
  cardsSlot,
}) => {
  return (
    <div className={styles.contentContainer}>
      {feedSlot}
      {adSlot}
      {readMoreSlot}
      {cardsSlot}
    </div>
  );
};
