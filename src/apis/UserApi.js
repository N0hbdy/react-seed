/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var request = require('superagent');

var UserActions = require('../actions/UserActions');

var userCallback = (response) => {
  if (response.forbidden || response.type === 'text/html') {
    UserActions.loginFailed();
  } else if (response.ok) {
    UserActions.setUser(response.body);
  }
};

var _getUser = (callback) => {
  request
    .get('/api/users/current')
    .end(callback);
};

var UserApi = {
  getUser() {
    _getUser(userCallback);
  },

  logIn(username, password) {
    request
      .post('/api/login')
      .query({redirect: '/api/users/current'})
      .send({user: {email: username, password: password}})
      .end(userCallback);
  }
};

module.exports = UserApi;
