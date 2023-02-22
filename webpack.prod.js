'use strict'

const path = require('path')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , babelConfig = require('./babel.config')
    , TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  cache: true,
  entry: {
    lib: [            
            "preact/compat",             
            "preact/hooks",
            "redux", "react-redux",
            "howler"            
         ],
    app: {
      import: path.resolve('src', 'index.tsx'),
      dependOn: 'lib'
    }    
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
    symlinks: false,
    modules: ['local_modules','node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    "alias": {       
      "react": "preact/compat",      
      "react-dom/test-utils": "preact/test-utils",      
      "react-dom": "preact/compat"     
    }    
  },
  plugins : [        
    new HtmlWebpackPlugin({
        minify: false, 
        filename: path.resolve('index.html'),
        template: path.resolve('template', 'index.ejs'),
        inject: false        
    })    
  ],  
  optimization: {    
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
