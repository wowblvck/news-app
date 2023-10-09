import clsx from 'clsx';
import React from 'react';
import styles from './style.module.scss';

type ActionButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ActionButton: React.FC<ActionButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(styles.btn, className)} {...props}>
      {children}
    </button>
  );
};
