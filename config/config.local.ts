/*
 * @Description: 本地local配置
 * @Date: 2020-12-11 22:43:06
 * @Author: qianqian
 */
// const target = 'https://terminal-qa.tongyu-quant.com/';
// const target = 'https://terminal-prod2.tongyu-quant.com/',
const target = 'http://10.1.2.75/';
// const yang = 'http://192.168.3.48:16016/';
// const target= 'http://10.1.100.192:16016/';
// const target = 'http://10.1.100.180:16016/';
export default {
  proxy: {
    '/api': {
      target,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/ruyi': {
      target,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/IM': {
      target,
      changeOrigin: true,
      pathRewrite: { '^/IM': '' },
    },
  },
};
