'use strict';

const path = require('path')
    , webpack = require('webpack')
    , WriteDllStatsPlugin = require('./plugins/write-dll-stats-plugin');

module.exports = {
  mode: "development",
  entry: {
     lib: [
            "react", "react-dom", 
            "redux", "react-redux",
            "howler"                        
          ]
  },
  output: {
      path: path.resolve('app'),
      filename: "[name]_dev_[chunkhash].js",

      library: '[name]_vendor'
  },
  resolve: {
    modules: ['local_modules','node_modules']
  },
  plugins: [    
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]_vendor'
    }),    
    new WriteDllStatsPlugin()
  ]
}
