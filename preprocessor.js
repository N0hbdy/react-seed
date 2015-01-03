/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var ReactTools = require('react-tools');

module.exports = {
  process: function(src, path) {
    return ReactTools.transform(src, { harmony: true, stripTypes: true });
  }
};
