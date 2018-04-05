import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Page.Home} />
      <Route path="/about" component={Page.About} />
      <Route exact path="/shop" component={Page.Shop.Home} />
      <Route path="/shop/create" component={Page.Shop.Create} />
      <Route path="/settings" component={Page.Setting} />
    </Switch>
  </Router>
)