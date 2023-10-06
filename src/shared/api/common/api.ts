import { BASE_URL, MAX_LIST_FEEDS } from './config';
import { AvailableCategoryValue, CategoryDto, NewsDto } from './types';

const NEWS_URL = '/news';
const CATEGORIES_URL = '/categories';

type GetCategoriesListParams = {
  sortBy: keyof CategoryDto;
  order: 'asc' | 'desc';
};

export const getLastFeeds = async () => {
  const res = await fetch(
    `${BASE_URL}${NEWS_URL}?_expand=category&_limit=${MAX_LIST_FEEDS}&_sort=date_full&_order=desc`
  );
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const feeds: NewsDto[] = await res.json();
  return feeds;
};

export const getNews = async (startIndex: number) => {
  const res = await fetch(
    `${BASE_URL}${NEWS_URL}?_expand=category&_expand=reaction&_sort=date_full&_order=desc&_start=${startIndex}&_limit=4`
  );
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const news: NewsDto[] = await res.json();
  return news;
};

export const getCategoryByName = async (category: AvailableCategoryValue) => {
  const res = await fetch(`${BASE_URL}${CATEGORIES_URL}/${category}`);
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const categoryRes: CategoryDto[] = await res.json();
  return categoryRes[0];
};

export const getNewsByCategoryId = async (id: number) => {
  const res = await fetch(
    `${BASE_URL}${CATEGORIES_URL}/${id}/news?_expand=category&_expand=reaction&_sort=date_full&_order=desc`
  );
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const news: NewsDto[] = await res.json();
  return news;
};

export const getMajorNews = async () => {
  const res = await fetch(`${BASE_URL}${NEWS_URL}?hot=true&_sort=date_full&_order=desc&_limit=1`);
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const hotNews: NewsDto[] = await res.json();
  return hotNews[0];
};

export const getCategoriesData = async ({ sortBy, order }: GetCategoriesListParams) => {
  const res = await fetch(`${BASE_URL}${CATEGORIES_URL}?_sort=${sortBy}&_order=${order}`);
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const categories: CategoryDto[] = await res.json();
  return categories;
};
