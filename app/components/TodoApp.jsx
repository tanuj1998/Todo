var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var unique = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: unique(),
          text: 'Do math hw'
        }, {
          id: unique(),
          text: 'Buy plane tickets'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    //alert('new todo added: ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: unique(),
          text: text
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <Search onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
