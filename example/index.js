import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from '../src/index'

const history = createBrowserHistory()

function Hello() {
  return (
    <p>
      Hello
      <button
        onClick={() => {
          history.push('/world')
        }}
      >
        To world
      </button>
    </p>
  )
}

function World() {
  return <p>World</p>
}

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={Hello} />
      <Route path="/world" component={World} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
