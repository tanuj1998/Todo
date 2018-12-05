var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var Api = require('Api');
var unique = require('node-uuid');

var moment = require('moment');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: Api.getTodos()
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function (id) {
    var update = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
    var {todos, showCompleted, searchText} = this.state;
    var filtered = Api.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Task Completer</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search onSearch={this.handleSearch}/>
              <TodoList todos={filtered} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = TodoApp;
