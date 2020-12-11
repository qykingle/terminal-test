/*
 * @Description: 路由配置
 * @Date: 2020-12-11 22:37:18
 * @Author: qianqian
 */
export default [
  {
    exact: false, path: '/', component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: '@/pages/index' },
      { component: '@/pages/404' },
    ],
  },
];
