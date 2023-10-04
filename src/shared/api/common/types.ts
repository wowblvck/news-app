export type NewsDto = {
  id: number;

  /**
   * Дата публикации новости
   * @example 2023-09-28
   */
  date: string;

  /**
   * Дата и время публикации новости
   * @example 2023-09-28 12:32:13
   */
  date_full: string;

  /**
   * Заголовок новости
   * @example Жители России теперь смогут купить автомобили на Ozon
   */
  title: string;

  /**
   * Полный текст новости
   */
  body: string;

  /**
   * ID категории, которой принадлежит новость
   * @example 3
   */
  categoryId: number;

  /**
   * Категория новости
   * @returns CategoryDto
   */
  category?: CategoryDto;

  /**
   * Является ли новость важной
   * @example false
   */
  hot: boolean;

  /**
   * ID реакций, которой принадлежит новость
   * @example 3
   */
  reactionId: number;

  /**
   * Реакции новости
   * @returns ReactionDto
   */
  reaction?: ReactionDto;
};

export type CategoryDto = {
  id: number;

  /**
   * Название категории в списке
   * @example Политика
   */
  label: string;
  /**
   * Значение категории (в нижнем регистре)
   * @example политика
   */
  value: string;
  /**
   * Порядковый номер в списке для отображения
   * @example 12
   */
  order: number;
};

export type ReactionDto = {
  id: number;

  /**
   * Счетчик лайков
   * @example 12
   */
  like: number;

  /**
   * Счетчик дизлайков
   * @example 5
   */
  dislike: number;

  /**
   * Счетчик "плохих" новостей
   * @example 2
   */
  bullshit: number;

  /**
   * Счетчик комментариев
   * @example 245
   */
  comments: number;

  /**
   * Счетчик закладок
   * @example 17
   */
  bookmarks: number;
};
