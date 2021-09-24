import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./theme/global"
import dataJSON from "./data.json"
import LogIn from "./screens/login"
import Game from "./screens/game"
import Points from './screens/points'

export const data = dataJSON[(dataJSON.length * Math.random()) | 0]
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/game" component={Game} />         
          <Route exact path="/points" component={Points} />
        </Switch>
      </Router>
    </>
  )
}

export default App
