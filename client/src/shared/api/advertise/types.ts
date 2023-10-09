export type AdvertiseDto = {
  id: number;

  /**
   * Ссылка на сайт
   * @example https://salon-lapadel.ru
   */
  link: string;

  /**
   * Ссылка на изображение
   * @example https://bipbap.ru/wp-content/uploads/2017/04/98a100e2d18a90c190b2c2b9ca4.jpg
   */
  image: string;

  /**
   * Описание рекламного сообщения
   * @example Предоставляем качественные услуги груминга кошек
   */
  body: string;
};
