require('dotenv').config()
const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const themeConfig = require('./src/config/theme');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config); // change importing css to less
  config = rewireLess.withLoaderOptions({
     modifyVars: themeConfig,
     
  })(config, env);

  config.resolve = {
    ...config.resolve,
    alias: {
      Features: path.resolve(__dirname, 'src/features'),
      Config: path.resolve(__dirname, 'src/config'),
      Components: path.resolve(__dirname, 'src/components'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Utils: path.resolve(__dirname, 'src/utils'), 
      Styles: path.resolve(__dirname, 'src/styles'), 
    }
  }
  return config;
};