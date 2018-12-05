var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var Api = require('Api');
var unique = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: Api.getTodos()
    /*  todos: [
        {
          id: unique(),
          text: 'Do math hw',
          completed: false
        }, {
          id: unique(),
          text: 'Buy plane tickets',
          completed: true
        }
      ]*/

    };
  },
  componentDidUpdate: function () {
    Api.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    //alert('new todo added: ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: unique(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var update = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: update});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
