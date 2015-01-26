/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


'use strict';

var React = require('react');
var {RouteHandler} = require('react-router');

// Provides global navigation for app e.g. the "Hello | Styleguide" at the top.
var App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
