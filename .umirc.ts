import { defineConfig } from 'umi';
import routes from './config/routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  hash: true,
  history: {
    type: 'hash'
  },
  mock: false,
  fastRefresh: {},
});
