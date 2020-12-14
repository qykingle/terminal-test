/*
 * @Description: 路由配置
 * @Date: 2020-12-11 22:37:18
 * @Author: qianqian
 */
export default [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: '@/pages/Home', title: '主页' },
      { component: '@/pages/404', title: '404' },
    ],
  },
];
