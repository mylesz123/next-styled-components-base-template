import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  });

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(getWindowSize()));

    return () => {
      window.removeEventListener('resize', () => setWindowSize(getWindowSize()));
    };
  }, []);

  return [windowSize];
};
