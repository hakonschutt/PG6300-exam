const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: "src/",
    port: 8080,
    clientLogLevel: "error",
    disableHostCheck: true
  }
}

if (process.env.NODE_ENV === 'docker') {
  devConfig.devServer.host = '0.0.0.0';
}


module.exports = merge.smart(baseConfig, devConfig);
