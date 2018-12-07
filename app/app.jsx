var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



var {Provider} = require('react-redux');
var actions = require('actions');
var store = require('store_config').configure();
var TodoApp = require('TodoApp');
var Api = require('Api');

import Login from 'Login'

store.dispatch(actions.startAddTodos());
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles')
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('app')
);
