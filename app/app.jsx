var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import './../database/firebase/index';

var {Provider} = require('react-redux');
var actions = require('actions');
var store = require('store_config').configure();
var TodoApp = require('TodoApp');
var Api = require('Api');


store.subscribe(() => {
  var state = store.getState();
  console.log('New state', store.getState());
  Api.setTodos(state.todos);
});

var initialTodos = Api.getTodos();
store.dispatch(actions.addTodos(initialTodos));

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles')
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,

  document.getElementById('app')
);
