import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Page.Home} />
      <Route path="/about" component={Page.About} />
    </Switch>
  </Router>
)