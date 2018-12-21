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
import Tiles, { TileDetail } from './tiles'
import './style.css'

function Hello({ transitionState }) {
  console.log('Hello is ', transitionState)

  return (
    <div className={`container fade ${transitionState}`}>
      <h1 style={{ color: 'grey', backgroundColor: 'pink', textAlign: 'center' }}>Hello</h1>
      <Link to="/world">To world</Link>
    </div>
  )
}

function World({ transitionState }) {
  console.log('World is ', transitionState)
  return (
    <div className={`container fade ${transitionState}`}>
      <h1 style={{ color: 'grey', backgroundColor: 'yellow', textAlign: 'center' }}>World</h1>
      <Link to="/">To Hello</Link>
    </div>
  )
}

function Slide1({ transitionState }) {
  return (
    <div className={`container slide ${transitionState}`}>
      <h1 style={{ color: 'grey', backgroundColor: 'lightgreen', textAlign: 'center' }}>Slide1</h1>
      <Link to="/slide2">To Slide2</Link>
    </div>
  )
}

function Slide2({ transitionState }) {
  return (
    <div className={`container slide ${transitionState}`}>
      <h1 style={{ color: 'grey', backgroundColor: 'orange', textAlign: 'center' }}>Slide2</h1>
      <Link to="/slide1">To Slide1</Link>
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
        <Route exact path="/slide1" component={Slide1} />
        <Route exact path="/slide2" component={Slide2} />
        <Route path="/nested" component={Nested} />
        <Tiles exact path="/tiles" component={Tiles} />
        <Tiles path="/tiles/detail" component={TileDetail} />
      </TransitionRouter>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
