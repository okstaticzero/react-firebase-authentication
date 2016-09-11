import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App';
import Home from './Home';
import Login from './authscreens/Login';
import Signup from './authscreens/Signup';
import Recover from './authscreens/Recover';
import Dashboard from './Dashboard';
import requireAuth from './utils/RequireAuth';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="recover" component={Recover} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('root'))