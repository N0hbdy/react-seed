/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var {Route, DefaultRoute} = require('react-router');

// Require components for routing
var LoginPage = require('./components/LoginPage');
// var PeoplePage = require('./components/pages/People');
// var Person = require('./components/pages/Person');
var Index = require('./components/Index');
var App = require('./components/App');


var routes = (
  <Route handler={App}>
    <Route name="login" handler={LoginPage}/>
    <DefaultRoute handler={Index}/>
  </Route>
);

module.exports = routes;
