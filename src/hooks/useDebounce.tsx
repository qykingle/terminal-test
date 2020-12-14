/*
 * @Description: 防抖hook
 * @Date: 2020-07-11 12:59:20
 * @Author: qianqian
 */

import { useState, useEffect } from 'react';

function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
