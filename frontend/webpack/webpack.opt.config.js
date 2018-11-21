const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
					chunks: "initial",
          name: 'common',
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0
				},
				vendor: {
					test: /[\\/]node_modules[\\/].*js/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
      }
    }
  }
}
