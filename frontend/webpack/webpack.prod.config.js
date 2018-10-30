const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = {
  mode: process.env.NODE_ENV
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
