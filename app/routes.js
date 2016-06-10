import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import requireAuthentication from './components/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuthentication(HomePage)} />
    <Route path="/home" component={requireAuthentication(HomePage)} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
