import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

type LogoProps = {
  type: 'header' | 'footer';
  children: React.ReactNode;
};

export const Logo: React.FC<LogoProps> = ({ type, children }) => {
  return (
    <h1
      className={clsx(
        styles.logoTitle,
        type === 'header' ? styles.logoTitle__header : styles.logoTitle__footer
      )}
    >
      <Link href={'/'}>{children}</Link>
    </h1>
  );
};
