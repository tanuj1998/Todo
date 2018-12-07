var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filtered = todos;
    filtered = filtered.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // this filters when you search for a text
    filtered = filtered.filter((todo) => {
      var text = todo.text.toLowerCase();
      return (searchText.length === 0 || text.indexOf(searchText)) > -1;
    });

    // sorts the tasks. It starts with the not completed tasks
    filtered.sort((x, y) => {
      if (!x.completed && y.completed) {
        return -1;
      }
      else if (x.completed && !y.completed) {
        return 1;
      }
      else {
        return 0;
      }
    });
    return filtered;
  }
};
