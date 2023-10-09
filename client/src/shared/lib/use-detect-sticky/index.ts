import React from 'react';

type ObserverSettings = {
  rootMargin?: string;
  threshold?: number | number[];
};

const defaultObserverSettings: ObserverSettings = {
  threshold: [1],
};

export const useDetectSticky = (
  observerSettings: ObserverSettings = defaultObserverSettings
): [
  boolean,
  React.MutableRefObject<HTMLElement | null>,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [isSticky, setIsSticky] = React.useState(false);
  const newRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const cachedRef = newRef.current;
    const mergedObserverSettings = {
      ...defaultObserverSettings,
      ...observerSettings,
    };
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(entry.intersectionRatio < 1),
      mergedObserverSettings
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, [newRef, observerSettings]);

  return [isSticky, newRef, setIsSticky];
};
