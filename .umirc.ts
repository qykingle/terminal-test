import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  hash: true,
  history: {
    type: 'hash',
  },
  mock: false,
  fastRefresh: {},
  ignoreMomentLocale: true,
  targets: {
    ie: 11,
  },
  manifest: {},
  publicPath: '/terminal/',
  // extraBabelPlugins: ['lodash'],
  dynamicImport: {
    loading: '@/components/Loading',
  },
  metas: [
    {
      name: 'keywords',
      content:
        '智能资管，Fintech，创新互联网资管，量化对冲，风险控制，风险收益量化匹配 ，回测，交易平台，绩效分析，资管平台，数据支持，系统服务，产品 发行，资管产品设计',
    },
    {
      name: 'description',
      content:
        '上海同余信息科技有限公司 （Bachelier Technology），专注于金融与科技交叉领域的创新研发与投资管理。',
    },
  ],
  title: '衍生品终端',
  favicon: '@/assets/images/favicon.png',
});
