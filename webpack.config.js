'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: './web/js',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts', exclude: /(node_modules)/ },
      { test: /\.html$/, loader: 'html?minimize=true&removeRedundantAttributes=false' }
    ]
  }
};
