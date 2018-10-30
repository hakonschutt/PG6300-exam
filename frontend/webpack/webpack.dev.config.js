const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "src/",
    port: 8080,
    clientLogLevel: "error",
    disableHostCheck: true
  }
}

module.exports = merge.smart(baseConfig, devConfig);
