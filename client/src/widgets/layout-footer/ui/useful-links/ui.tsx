import Link from 'next/link';
import React from 'react';
import { links } from './config';
import styles from './styles.module.scss';

export const UsefulLinks = () => {
  return (
    <div className={styles.container}>
      {links.map((column, columnIndex) => (
        <ul key={columnIndex} className={styles.list}>
          {column.map((link, linkIndex) => (
            <li key={linkIndex} className={styles.item}>
              <Link href={{ pathname: link.url }}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
