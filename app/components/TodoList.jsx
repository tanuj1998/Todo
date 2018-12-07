var React = require('react');
var Todo = require('Todo');
var {connect} = require('react-redux');
var Api = require('Api');

export var TodoList = React.createClass({
  render: function () {
    var {todos,showCompleted,searchText} = this.props;
    var renderTodos = () => {
        if (todos.length === 0) {
        return (
          <p className="container__message">No Results</p>
        );
      }
      return Api.filterTodos(todos,showCompleted,searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return state;
  }
)(TodoList);
