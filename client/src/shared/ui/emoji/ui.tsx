import React from 'react';
import { emoji, EmojiType } from '@/shared/config';

type EmojiProps = {
  type: EmojiType;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Emoji: React.FC<EmojiProps> = ({ type, ...props }) => {
  return <span {...props}>{emoji[type]}</span>;
};
