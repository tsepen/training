import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

export default () => (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        {/* <Route component={ NotFoundPage } /> */}
      </Switch>
    </Router>
);
