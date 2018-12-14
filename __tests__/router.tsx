import React from 'react'
import { Router, Route, createBrowserHistory } from '../src'
import { render } from 'react-testing-library'

function Hello() {
  return <p>Hello</p>
}
function World() {
  return <p>World</p>
}

const setupComponent = () => {
  const history = createBrowserHistory()
  const component = (
    <Router history={history}>
      <Route path="/" component={Hello} />
      <Route path="/world" component={World} />
    </Router>
  )

  return { history, component }
}

test('render', () => {
  const { component } = setupComponent()
  const container = render(component)
  expect(container.getByText('Hello')).not.toBeNull()
})
