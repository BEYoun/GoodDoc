/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import ReasultSearch from './pages/ReasultSearch';



export default function Example() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <ReasultSearch />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
