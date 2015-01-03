/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var Immutable = require('immutable');
var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var UserStore = require('./UserStore');
var router = require('../router');

var _savedState;

var RouteStore = new Store({
});

RouteStore.dispatcherToken = Dispatcher.register(payload => {

  var action = payload.action;

  if (action.actionType == ActionTypes.USER_LOGIN) {
    if (_savedState) {
      router.transitionTo(_savedState.path, _savedState.params, _savedState.query);
      _savedState = null;
    } else {
      router.transitionTo('/');
    }
  }

  if (action.actionType == ActionTypes.SET_CURRENT_ROUTE) {
    console.log('Setting current route');
    // manage logged in state
    if (action.state.path !== '/login' && !UserStore.loggedIn()) {
      _savedState = action.state;
      router.transitionTo('/login');
    }
  }

  return true;
});

module.exports = RouteStore;
