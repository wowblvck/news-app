import React from 'react';

export const useWindowWide = (size: number) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  return width > size;
};
