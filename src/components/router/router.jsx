import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import LogIn from "../../screens/login"
import Game from "../../screens/game"
import Points from "../../screens/points"

const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/game" component={Game} />
      <Route path="/points" component={Points} />
    </Switch>
  </Router>
)

export default AppRouter
