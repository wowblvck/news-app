export type FeedDto = {
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
