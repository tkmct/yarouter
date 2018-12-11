import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from '../src/index'

function Hello() {
  return <p>Hello</p>
}

function World() {
  return <p>World</p>
}

function App() {
  return (
    <Router>
      <Route path="/" component={Hello} />
      <Route path="/world" component={World} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
