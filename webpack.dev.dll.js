'use strict';

const path = require('path')
    , webpack = require('webpack')
    , WriteDllStats = require('./plugins/write-dll-stats');

module.exports = {
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
    //root: path.resolve(__dirname, "client"),
    modules: ['local_modules','node_modules']
    //extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env' : {
          'NODE_ENV': JSON.stringify('development')
       }
    }),
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dll/[name]-manifest.json',

      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_vendor'

      //context: path.resolve(__dirname, "client")
    }),
    /*
    new webpack.optimize.UglifyJsPlugin({
        compress: {
           warnings: false
           //screw_ie8: true
        },
        output: {
           comments: false
        }
    }),
    */
    new WriteDllStats()
  ]
}
