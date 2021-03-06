var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  devtool: false,
  entry: {
   'bundle': __dirname+'/views/react/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    //supresses warnings, usually from module minification
    //    warnings: false
    //  }
    //}),
    commonsPlugin,
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx{0,1}$/,
      loader: 'babel-loader?'+JSON.stringify({presets:['react','es2015']}),
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
