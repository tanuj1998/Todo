import React from 'react';
//var unique = require('node-uuid');
//var moment = require('moment');
import * as Redux from 'react-redux';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import Search from 'Search';
import * as actions from 'actions';

export var TodoApp = React.createClass({
  onLogout(e) {
  var {dispatch} = this.props;
  e.preventDefault();

  dispatch(actions.startLogout());
},
  render: function () {

    return (
      <div className="start_page">
        <div className="top-bar">
        <h1 className="page-title">Todo App</h1>
          <div className="page-actions">
            <a href="#" onClick={this.onLogout}>Logout</a>
          </div>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
