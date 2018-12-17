import React from 'react'
import { Router, Route, Switch, createBrowserHistory } from '../src'
import { render } from 'react-testing-library'

function Hello() {
  return (
    <Switch>
      <Route path="/nested1" component={Nested1} />
      <Route path="/nested2" component={Nested2} />
    </Switch>
  )
}

function Nested1() {
  return <p id="nested1">nested1</p>
}

function Nested2() {
  return <p id="nested2">nested2</p>
}

const setupComponent = (initialRoute?: string) => {
  const history = createBrowserHistory()
  if (initialRoute) {
    history.push(initialRoute)
  }

  const component = (
    <Router history={history}>
      <Route path="/" component={Hello} />
    </Router>
  )

  return { history, component }
}

describe('Test Switch component', () => {
  test('render', () => {
    const { component } = setupComponent()
    const { container } = render(component)
    expect(container.querySelector('#nested1')).toBeNull()
    expect(container.querySelector('#nested2')).toBeNull()
  })

  test('render nested1', () => {
    const { component } = setupComponent('/nested1')
    const { container } = render(component)
    expect(container.firstChild.textContent).toBe('nested1')
    expect(container.querySelector('#nested2')).toBeNull()
  })

  test('render nested1', () => {
    const { component } = setupComponent('/nested2')
    const { container } = render(component)
    expect(container.firstChild.textContent).toBe('nested2')
    expect(container.querySelector('#nested1')).toBeNull()
  })
})
