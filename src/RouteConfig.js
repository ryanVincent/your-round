import { Router, Route, browserHistory  } from 'react-router'
import React from 'react';
import App from './App';
import Bar from './bar/Bar';
import Drink from './drink/Drink';
import Round from './round/Round';

export default function RouteConfig() {
  return (
    <Router history={browserHistory }>
      <Route path="/" component={App}>
        <Route path="/bars" component={Bar}/>
        <Route path="/bars/:barId/drinks" component={Drink}/>
        <Route path="/bars/:barId/round" component={Round}/>
      </Route>
    </Router>);
}
