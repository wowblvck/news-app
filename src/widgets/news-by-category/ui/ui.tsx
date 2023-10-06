import clsx from 'clsx';
import React from 'react';
import { Reactions } from '@/features/reactions';
import {
  NewsByCategoryContent,
  NewsByCategoryItem,
  NewsByCategoryList,
} from '@/entities/news-by-category';
import { CategoryDto, getNewsByCategoryId } from '@/shared/api';
import styles from './styles.module.scss';

type NewsByCategoryProps = {
  category: CategoryDto;
};

export const NewsByCategory: React.FC<NewsByCategoryProps> = async ({ category }) => {
  const news = await getNewsByCategoryId(category.id);

  return (
    <>
      {!!news.length && (
        <section id={`${category.value}`} className={clsx('categorySection', styles.container)}>
          <NewsByCategoryContent>
            <NewsByCategoryContent.Title category={category.value}>
              {category.label}
            </NewsByCategoryContent.Title>
            <NewsByCategoryContent.Body>
              {news && (
                <NewsByCategoryList
                  data={news}
                  onRender={(item) => (
                    <NewsByCategoryItem
                      item={item}
                      reactionSlot={item.reaction && <Reactions data={item.reaction} />}
                    />
                  )}
                />
              )}
            </NewsByCategoryContent.Body>
          </NewsByCategoryContent>
        </section>
      )}
    </>
  );
};
