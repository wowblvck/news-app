export type SpriteCommon = 'search' | 'profile' | 'fire' | 'hot';
export type SpriteSocial = 'telegram';
export type SpriteDateAndCurrency = 'date' | 'USD' | 'EUR' | 'BTC';
export type SpriteCategories =
  | 'лента'
  | 'происшествия'
  | 'авто'
  | 'бизнес'
  | 'здоровье'
  | 'крипто'
  | 'недвижимость'
  | 'образование'
  | 'политика'
  | 'туризм'
  | 'шоу-бизнес'
  | 'спорт'
  | 'стиль'
  | 'наука-и-технологии'
  | 'экономика';

export type SpritesMeta = {
  common: SpriteCommon;
  social: SpriteSocial;
  categories: SpriteCategories;
  date_and_currency: SpriteDateAndCurrency;
};

export type SpriteType = keyof SpritesMeta;
