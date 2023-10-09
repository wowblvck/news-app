import { routes } from '@/shared/config';
import { UsefulLinkType } from './types';

/*
  Количество элементов в массиве соответствует количеству столбцов
  Количеству элементов во вложенном массиве соответствует количество элементов в столбце
 */
export const links: UsefulLinkType[][] = [
  [
    {
      url: routes.contacts,
      name: 'Контакты',
    },
    {
      url: routes.redaction,
      name: 'Редакция',
    },
  ],
  [
    {
      url: routes.policy,
      name: 'Политика конфиденциальности',
    },
    {
      url: routes.terms,
      name: 'Условия использования',
    },
    {
      url: routes.advertise,
      name: 'Реклама',
    },
  ],
];
