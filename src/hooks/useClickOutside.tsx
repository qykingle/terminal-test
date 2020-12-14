/*
 * @Description: 监听点击除组件外的其他地方
 * @Date: 2020-07-06 13:47:34
 * @Author: qianqian
 */

import { RefObject, useEffect } from 'react';

function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handler]);
}

export default useClickOutside;
