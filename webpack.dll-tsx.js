'use strict'

const path = require('path')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , postProcessing = require('./plugins/post-processing')
    , HtmlProcessingWebpackPlugin = require('./plugins/html-processing-webpack-plugin')
    , babelConfig = require('./babel.config')
    , TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  cache: true,
  entry: {
    app: path.resolve('src', 'index.tsx')
  },
  output: {
      path: path.resolve('app'),
      filename: "[name]_[chunkhash].js",
      chunkFilename: "[name]_[chunkhash].js",
      publicPath: 'app/'
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
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    "alias": { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",     
    }    
  },
  plugins : [    
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/lib-manifest.json')
    }),    
    new HtmlWebpackPlugin({
        minify: false, 
        filename: path.resolve('index.html'),
        template: path.resolve('template', 'index.ejs'),
        inject: false,
        postProcessing: postProcessing
    }),
    new HtmlProcessingWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
