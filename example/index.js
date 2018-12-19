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

function Hello({ transitionState }) {
  console.log('Hello is ', transitionState)

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'grey', backgroundColor: 'pink', textAlign: 'center' }}>Hello</h1>
      <Link to="/world">To world</Link>
    </div>
  )
}

function World({ transitionState }) {
  console.log('World is ', transitionState)
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'grey', backgroundColor: 'yellow', textAlign: 'center' }}>World</h1>
      <Link to="/">To Hello</Link>
      <Link to="/world?q=hello">Query</Link>
    </div>
  )
}

const history = createBrowserHistory()

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'turquoise' }}>
      <TransitionRouter history={history}>
        <Route exact path="/" component={Hello} onEnter={() => console.log('Enter hello!')} />
        <Route exact path="/world" component={World} onEnter={() => console.log('Enter world!')} />
        <Route path="/nested" component={Nested} />
      </TransitionRouter>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
