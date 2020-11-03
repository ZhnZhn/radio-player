'use strict'

const path = require('path')
, webpack = require('webpack')
, babelDevConfig = require('./babel.dev.config')
, ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
, HtmlWebpackPlugin = require('html-webpack-plugin')
, HtmlProcessingWebpackPlugin = require('./plugins/html-processing-webpack-plugin');

module.exports = {
  mode: "development",
  cache: true,
  entry: {
    app: path.resolve('src', 'index.jsx')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8082
  },

  output: {
      path: path.resolve('dev'),
      filename: "[name]_dev_[contenthash].js",
      chunkFilename: "[name]_dev_[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            ...babelDevConfig
          }
        },
        include: [
          path.join(__dirname),
          path.join(__dirname, "src"),
        ]
      }
    ]
  },
  resolve: {
    modules: ['local_modules','node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: path.resolve('dev', 'index.html'),
        template: path.resolve('template', 'index-dev.ejs'),
        inject: false
    }),
    new HtmlProcessingWebpackPlugin()
  ]
}
