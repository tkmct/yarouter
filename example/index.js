import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch, Link, LocationContext, createBrowserHistory } from '../src/index'

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

function Nested1() {
  return (
    <div>
      <h2>Nested1</h2>
    </div>
  )
}

function Nested2() {
  return (
    <div>
      <h2>Nested2</h2>
    </div>
  )
}

function Nested() {
  return (
    <>
      <h1>Nested Route</h1>
      <Switch>
        <Route path="/nested/route1" component={Nested1} />
        <Route path="/nested/route2" component={Nested2} />
      </Switch>
    </>
  )
}

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={Hello} onEnter={() => console.log('Enter hello!')} />
      <Route path="/world" component={World} onEnter={() => console.log('Enter world!')} />
      <Route path="/nested" component={Nested} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
