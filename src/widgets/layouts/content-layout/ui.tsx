import React from 'react';
import styles from './styles.module.scss';

type ContentLayoutProps = {
  feedSlot?: React.ReactNode;
  adSlot?: React.ReactNode;
  readSlot?: React.ReactNode;
  cardsSlot?: React.ReactNode;
};

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  feedSlot,
  adSlot,
  readSlot,
  cardsSlot,
}) => {
  return (
    <div className={styles.contentContainer}>
      {feedSlot}
      {adSlot}
      {readSlot}
      {cardsSlot}
    </div>
  );
};
