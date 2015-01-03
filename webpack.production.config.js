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
  entry: {
    app: [
    './src/Main'
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  resolveLoader: {
    modulesDirectories: ['..', 'node_modules']
  },
  plugins: [
  new webpack.DefinePlugin({
    // This has effect on the react lib size.
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.IgnorePlugin(/vertx/),
  new webpack.IgnorePlugin(/un~$/),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.jsx?$/, loaders: ['react-hot','jsx-loader?harmony&stripTypes']},
    ]
  }
};
