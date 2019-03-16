import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Count from './pages/Count'
import Words from './pages/Words'
import Riddles from './pages/Riddles'
import Entertainment from './pages/Entertainment'
import NotFoundPage from './pages/NotFound'

export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/count" component={Count} />
      <Route exact path="/words" component={Words} />
      <Route exact path="/riddles" component={Riddles} />
      <Route exact path="/entertainment" component={Entertainment} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)
