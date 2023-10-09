import clsx from 'clsx';
import React from 'react';
import { ReactionDto } from '@/shared/api/common';
import { EmojiType } from '@/shared/config';
import { Icon } from '@/shared/ui';
import { Emoji } from '@/shared/ui/emoji';
import styles from './styles.module.scss';

type ReactionsProps = {
  data: ReactionDto;
};

export const Reactions: React.FC<ReactionsProps> = ({ data }) => {
  const { bookmarks, comments, like, dislike, bullshit } = data;

  const reactions = { like, dislike, bullshit };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {Object.entries(reactions).map(([type, value]) => {
          return (
            <li key={type} className={styles.item}>
              <Emoji type={type as EmojiType} className={styles.emoji} />
              <p className={styles.countValue}>{value}</p>
            </li>
          );
        })}
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Icon type={'common'} name={'comments'} width={16} height={16} className={styles.icon} />
          <p className={clsx(styles.countValue, styles.countValue_action)}>{comments}</p>
        </li>
        <li className={styles.item}>
          <Icon type={'common'} name={'bookmarks'} width={16} height={16} className={styles.icon} />
          <p className={clsx(styles.countValue, styles.countValue_action)}>{bookmarks}</p>
        </li>
      </ul>
    </div>
  );
};
