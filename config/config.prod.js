export default {
  define: {
    'process.env.build_env': 'prod',
  },
  extraBabelPlugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
};
