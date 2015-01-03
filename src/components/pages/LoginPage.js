/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var Navigation = require('react-router').Navigation;
var Login = require('../forms/Login');

var LoginPage = React.createClass({
  render() {
    return (
      <div id='LoginPage'>
        Log In
        <Login />
      </div>
    );
  }
});

module.exports = LoginPage;
