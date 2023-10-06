export type { CategoryDto, NewsDto, ReactionDto, AvailableCategoryValue } from './types';
export { BASE_URL } from './config';
export {
  getCategoriesData,
  getLastFeeds,
  getMajorNews,
  getNews,
  getNewsByCategoryId,
  getCategoryByName,
} from './api';
