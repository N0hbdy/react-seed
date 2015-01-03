/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var keyMirror = require('react/lib/keyMirror');

var ActionTypes = keyMirror({

  // Route action types
  SET_CURRENT_ROUTE: null,

  // User log in and logout
  USER_LOGOUT: null,
  USER_LOGIN: null

});

module.exports = ActionTypes;
