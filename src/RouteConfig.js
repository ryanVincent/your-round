import { Router, Route, browserHistory  } from 'react-router'
import React from 'react';
import App from './App';
import Bar from './bar/Bar';
import Product from './product/Product';

export default function RouteConfig() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/bars" component={Bar}/>
        <Route path="/bars/:barId/products" component={Product}/>
      </Route>
    </Router>);
}
