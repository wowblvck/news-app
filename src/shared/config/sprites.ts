import { AvailableCategoryValue } from '@/shared/api';

export type SpriteCommon =
  | 'search'
  | 'profile'
  | 'fire'
  | 'hot'
  | 'arrow'
  | 'comments'
  | 'bookmarks';
export type SpriteSocial = 'telegram';
export type SpriteDateAndCurrency = 'date' | 'USD' | 'EUR' | 'BTC';
export type SpriteCategories = 'лента' & AvailableCategoryValue;

export type SpritesMeta = {
  common: SpriteCommon;
  social: SpriteSocial;
  categories: SpriteCategories;
  date_and_currency: SpriteDateAndCurrency;
};

export type SpriteType = keyof SpritesMeta;
