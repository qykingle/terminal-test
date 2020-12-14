/*
 * @Description: 监听属性，第一次不执行
 * @Date: 2020-05-20 14:54:47
 * @Author: qianqian
 */

import { useState, useEffect } from 'react';
export default function useUpdateEffect(cb: () => void, depend: any[]) {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (status) {
      cb();
    } else {
      setStatus(true);
    }
  }, depend);
}
