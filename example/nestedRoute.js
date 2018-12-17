import React, { useContext } from 'react'
import { Route, Switch } from '../src/index'

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

export default function Nested() {
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
