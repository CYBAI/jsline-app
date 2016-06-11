import React from 'react';
import { Route } from 'react-router';
import Login from './containers/Login';
import App from './containers/App';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import ChatView from './components/ChatView';
import requireAuthentication from './components/requireAuthentication';

export default (
  <Route component={App}>
    <Route path="/" component={requireAuthentication(HomePage)}>
      <Route path="/chat/:userId" component={ChatView} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
