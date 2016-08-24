import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { App } from './App'


// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
)

export default routes
