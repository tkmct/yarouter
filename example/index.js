import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, LocationContext, createBrowserHistory } from '../src/index'

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
      <Route path="/" component={Hello} onEnter={() => console.log('Enter hello!')} />
      <Route path="/world" component={World} onEnter={() => console.log('Enter world!')} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
