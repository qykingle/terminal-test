import React from 'react';
import { history } from 'umi';

export function onRouteChange({ matchedRoutes }: { matchedRoutes: any }) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}

// // 可以在这里加menu
// export function rootContainer(container) {
//   return <div>hello{container}</div>;
// }

export function render(oldRender: Function) {
  const isLogin = true;
  if (isLogin) {
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
}
