/*
 * React.js Frontend Seed
 * Copyright (c) 2014 Austen McRae (@austenmcrae, austen.mcrae@gmail.com)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var UserApi = require('../../apis/UserApi');

var Login = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: '',
    };
  },

  onChangeUsername(event) {
    this.setState({username: event.target.value});
  },

  onChangePassword(event) {
    this.setState({password: event.target.value});
  },

  onSubmit(event) {
    event.preventDefault();
    UserApi.logIn(this.state.username, this.state.password);

  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="Username" />
        <input type="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" />
        <input type="submit" value="Log In" />
      </form>
    );
  }
});

module.exports = Login;
