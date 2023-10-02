import { UsefulLinkType } from './types';

/*
  Количество элементов в массиве соответствует количеству столбцов
  Количеству элементов во вложенном массиве соответствует количество элементов в столбце
 */
export const links: UsefulLinkType[][] = [
  [
    {
      url: '/contacts',
      name: 'Контакты',
    },
    {
      url: '/redaction',
      name: 'Редакция',
    },
  ],
  [
    {
      url: '/private-policy',
      name: 'Политика конфиденциальности',
    },
    {
      url: '/terms',
      name: 'Условия использования',
    },
    {
      url: '/advertise',
      name: 'Реклама',
    },
  ],
];
