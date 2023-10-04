export const emoji = {
  like: '😍',
  dislike: '😡',
  bullshit: '💩',
} as const;

export type EmojiType = keyof typeof emoji;
