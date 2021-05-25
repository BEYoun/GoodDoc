import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import store from './store'
import client from './api/graphqlClient'

import Home from './pages/home'
import Application from './pages/application'
import { Login } from './pages/login'

export const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/application">
              <Application />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </Provider>
  )
}
