import React from 'react';
import { Container } from '@/shared/ui';
import { Logo } from '@/shared/ui';
import { Profile } from './profile';
import { SearchButton } from './search-button';
import styles from './styles.module.scss';

type LayoutHeaderProps = {
  widgetSlot?: React.ReactNode;
};

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({ widgetSlot }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo type="header">Лого</Logo>
          {widgetSlot}
          <div className={styles.actions}>
            <SearchButton />
            <Profile />
          </div>
        </div>
      </Container>
    </header>
  );
};
