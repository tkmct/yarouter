import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, LocationContext } from '../src/index'

function Hello() {
  const { location, history } = useContext(LocationContext)

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

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={Hello} />
      <Route path="/world" component={World} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
