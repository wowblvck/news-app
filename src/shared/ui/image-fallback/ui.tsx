import Image, { ImageProps } from 'next/image';
import React from 'react';

type ImageWithFallbackProps = {
  fallbackSrc: string;
} & ImageProps;

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ fallbackSrc, ...props }) => {
  const { onError, src, alt } = props;
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    setError(null);
  }, [src]);

  return <Image {...props} alt={alt} onError={setError} src={error ? fallbackSrc : src} />;
};
