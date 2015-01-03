/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

module.exports = {
  routeChange(state) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.SET_CURRENT_ROUTE,
      state: state
    });
  },
};
