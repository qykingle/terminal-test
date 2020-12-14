/*
 * @Description: 深度比较对象数组等,判断是否要执行代码
 * @Date: 2020-08-10 10:39:10
 * @Author: qianqian
 */
import { useRef, useEffect } from 'react';
import _ from 'lodash';

const useDeepEffect = (fn: Function, deps: any[]) => {
  const isFirst = useRef(true);
  const prevDeps = useRef(deps);

  useEffect(() => {
    const isSame = prevDeps.current.every((obj, index) =>
      _.isEqual(obj, deps[index]),
    );

    if (isFirst.current || !isSame) {
      fn();
    }

    isFirst.current = false;
    prevDeps.current = deps;
  }, deps);
};
export default useDeepEffect;
