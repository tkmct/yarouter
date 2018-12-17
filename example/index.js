import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch, Link, LocationContext, createBrowserHistory } from '../src/index'
import Nested from './nestedRoute'

function Hello() {
  const { location, history } = useContext(LocationContext)

  return (
    <p>
      Hello
      <Link to="/world">To world</Link>
    </p>
  )
}

function World() {
  return (
    <p>
      World
      <Link to="/">To Hello</Link>
    </p>
  )
}

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Hello} onEnter={() => console.log('Enter hello!')} />
      <Route exact path="/world" component={World} onEnter={() => console.log('Enter world!')} />
      <Route path="/nested" component={Nested} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
