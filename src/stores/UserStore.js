/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var Immutable = require('immutable');
var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

/**
 * @typedef User
 * @type {object}
 * @property {string} id
 * @property {string} name
 * @property {string} auth_token
 */
var _user = window.user;

var UserStore = new Store({
  /**
   * Gets the form auth token
   * @returns {User}
   */
  get() {
    return _user;
  },

  /**
   * Tests to see if a user is logged in
   * @returns {boolean}
   */
  loggedIn() {
    return _user !== null && typeof(_user) !== 'undefined';
  },

});

UserStore.dispatcherToken = Dispatcher.register(payload => {

  var action = payload.action;

  if (action.actionType == ActionTypes.USER_LOGOUT) {
    _user = window.user = null;
    UserStore.emitChange();
  }

  if (action.actionType == ActionTypes.USER_LOGIN) {
    _user = window.user = action.user;
    UserStore.emitChange();
  }

  return true;
});

module.exports = UserStore;
