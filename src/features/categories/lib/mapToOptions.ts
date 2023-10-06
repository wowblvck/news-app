import { CategoryDto } from '@/shared/api';
import { CategoryOption } from '../model';

export const mapToOptions = (categories: CategoryDto[]): CategoryOption[] => {
  return categories.map((category) => {
    const { id, order, ...rest } = category;
    return rest;
  });
};
