const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: path.join(__dirname, "..", "src", "index.js")
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.join(__dirname, "..", "public")
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
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { minimize: true } },
            { loader: "sass-loader" }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          { loader: "image-webpack-loader", options: { bypassOnDebug: true } },
          { loader: "url-loader", options: { limit: 40000 } }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "style.css",
      allChunks: true,
      ignoreOrder: true
    }),
    new HtmlWebPackPlugin({
      minify: true,
      title: "PG6300",
      template: path.join(__dirname, "..", "web", "index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
