var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Test1'
        }, {
          id: 2,
          text: 'Test2'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo added: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
