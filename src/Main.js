/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';
// Load css first thing; it should get injected into the <head> within a <style> element by the webpack style-loader.
require('../public/main.css');

var React = require('react');
var UserStore = require('./stores/UserStore');
var RouteActions = require('./actions/RouteActions');
var {RouteHandler} = require('react-router');

// actual router
var router = require('./router');

// Require Stores
var UserStore = require('./stores/UserStore');
var RouteStore = require('./stores/RouteStore');

// UserApi to bootstrap the app
var UserApi = require('./apis/UserApi');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

router.run(function(Handler, state) {
  console.log('New state passed in');
  RouteActions.routeChange(state);
  React.render(<Handler />, document.body);
});

if (!UserStore.loggedIn()) {
  UserApi.getUser();
}
