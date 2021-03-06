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
    app: path.resolve('src', 'index.tsx')
  },
    
  output: {
      path: path.resolve('dev'),
      filename: "[name]_dev_[contenthash].js",
      chunkFilename: "[name]_dev_[contenthash].js"
  },
  module: {
    rules: [
      {
        //test: /\.jsx?$/,
        test: /\.(ts|js)x?$/,
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
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    "alias": { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",     
    },
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: path.resolve('dev', 'index.html'),
        template: path.resolve('template', 'index.ejs'),
        inject: false
    }),
    new HtmlProcessingWebpackPlugin()
  ]
}
