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
var UserApi = require('../apis/UserApi');

module.exports = {
  /**
   * Set the current User.
   * @param {User} user Sets the user to user given
   */
  setUser(user) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.USER_LOGIN,
      user: user
    });
  },

  loginFailed() {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.USER_LOGOUT
    });
  },

  logout() {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.USER_LOGOUT
    });
  }
};
