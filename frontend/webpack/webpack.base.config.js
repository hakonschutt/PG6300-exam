const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: ['babel-polyfill', path.join(__dirname, "..", "src", "index.js")]
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.join(__dirname, "..", "public")
  },
  resolve: {
    alias: {
      '@actions': path.resolve('src/actions'),
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@constants': path.resolve('src/constants'),
      '@containers': path.resolve('src/containers'),
      '@hocs': path.resolve('src/hocs'),
      '@reducers': path.resolve('src/reducers'),
      '@utils': path.resolve('src/utils'),
      '@root': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          { loader: "url-loader", options: { limit: 40000 } },
          "img-loader"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlWebPackPlugin({
      minify: true,
      title: "PG6300",
      template: path.join(__dirname, "..", "web", "index.html"),
      favicon: path.join(__dirname, "..", "web", "favicon.ico")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
