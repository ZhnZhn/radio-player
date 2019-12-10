'use strict'

const path = require('path')
    , webpack = require('webpack')
    , babelConfig = require('./babel.config')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , HtmlProcessingWebpackPlugin = require('./plugin/html-processing-webpack-plugin')
    , postProcessing = require('./plugins/post-processing');


module.exports = {
  mode: "development",
  cache: true,
  entry: {
    app: path.resolve('src', 'index.jsx')
  },
  output: {
      path: path.resolve('app'),
      filename: "[name]_dev_[chunkhash].js",
      chunkFilename: "[name]_dev_[chunkhash].js",
      publicPath: 'app/'
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
            ...babelConfig
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
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dll/lib-manifest.json')
    }),                
    new HtmlWebpackPlugin({
        filename: path.resolve('index.html'),
        template: path.resolve('template', 'index.ejs'),
        inject: false,
        postProcessing: postProcessing
    }),
    new HtmlProcessingWebpackPlugin()
  ]
}
