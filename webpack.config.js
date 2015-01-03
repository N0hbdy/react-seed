/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    './src/Main'
  ],
  devtool: 'source-map',
  debug: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },

  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/) // https://github.com/webpack/webpack/issues/353
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']//, '.cjsx', '.coffee']
  },
  module: {
    //preLoaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'jshint'}],
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.jsx?$/, loaders: ['react-hot', 'jsx-loader?harmony&stripTypes']},
    ]
  }
};
