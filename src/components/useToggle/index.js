import { useState, useCallback } from 'react';

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue((v) => !v), []);
  return [value, toggler];
};

export default useToggle;
