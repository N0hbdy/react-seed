/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var Router = require('react-router');
var routes = require('./routes');

var _router = Router.create({
  routes: routes,
  location: Router.HashLocation
});

module.exports = _router;
