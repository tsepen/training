import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

const Root = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ NotFoundPage } />
      </Switch>
    </Router>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
