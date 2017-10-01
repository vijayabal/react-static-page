var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './input.js',
  output: { path: __dirname, filename: 'bundle.js' },
  devServer: {
      inline: true,
      port: 9091
   },
  module: {
    loaders: [
  	{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
    	}
  	}
	]
  },
};