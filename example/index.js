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
import './style.css'

function Hello({ transitionState }) {
  console.log('Hello is ', transitionState)

  return (
    <div className={`container ${transitionState}`}>
      <h1 style={{ color: 'grey', backgroundColor: 'pink', textAlign: 'center' }}>Hello</h1>
      <Link to="/world">To world</Link>
    </div>
  )
}

function World({ transitionState }) {
  console.log('World is ', transitionState)
  return (
    <div className={`container ${transitionState}`}>
      <h1 style={{ color: 'grey', backgroundColor: 'yellow', textAlign: 'center' }}>World</h1>
      <Link to="/">To Hello</Link>
      <Link to="/world?q=hello">Query</Link>
    </div>
  )
}

const history = createBrowserHistory()

function App() {
  return (
    <div className="app-container">
      <TransitionRouter history={history}>
        <Route exact path="/" component={Hello} onEnter={() => console.log('Enter hello!')} />
        <Route exact path="/world" component={World} onEnter={() => console.log('Enter world!')} />
        <Route path="/nested" component={Nested} />
      </TransitionRouter>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
