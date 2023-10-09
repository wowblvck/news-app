import React from 'react';
import { SpritesMeta, SpriteType } from '@/shared/config';

type IconProps<T extends SpriteType> = {
  type: T;
  name: SpritesMeta[T];
} & React.SVGAttributes<SVGElement>;

export const Icon = <T extends SpriteType>({
  type,
  name,
  width,
  height,
  ...props
}: IconProps<T>) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`/icons/${type}.svg#${name}`} {...props} />
    </svg>
  );
};
