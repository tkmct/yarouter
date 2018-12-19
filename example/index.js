import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  Switch,
  Link,
  LocationContext,
  createBrowserHistory,
  TransitionRouter,
} from '../src/index'
import Nested from './nestedRoute'

function Hello() {
  const { location, history } = useContext(LocationContext)

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'lightgreen' }}>
      Hello
      <Link to="/world">To world</Link>
    </div>
  )
}

function World() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'turquoise' }}>
      World
      <Link to="/">To Hello</Link>
      <Link to="/world?q=hello">Query</Link>
    </div>
  )
}

const history = createBrowserHistory()

function App() {
  return (
    <TransitionRouter history={history}>
      <Route exact path="/" component={Hello} onEnter={() => console.log('Enter hello!')} />
      <Route exact path="/world" component={World} onEnter={() => console.log('Enter world!')} />
      <Route path="/nested" component={Nested} />
    </TransitionRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
