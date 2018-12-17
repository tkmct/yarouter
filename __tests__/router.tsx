import * as React from 'react'
import { Router, Route, createBrowserHistory } from '../src'
import { render } from 'react-testing-library'

function Hello() {
  return <p>Hello</p>
}
function World() {
  return <p>World</p>
}

const setupComponent = (initialPath?: string) => {
  const history = createBrowserHistory()
  if (initialPath) {
    history.push(initialPath)
  }

  const component = (
    <Router history={history}>
      <Route exact path="/" component={Hello} />
      <Route path="/world" component={World} />
    </Router>
  )

  return { history, component }
}

describe('Test router component', () => {
  test('snapshot', () => {
    const { component } = setupComponent()
    const { container } = render(component)
    expect(container).toMatchSnapshot()
  })

  test('render', () => {
    const { component } = setupComponent()
    const { container } = render(component)
    expect(container.firstChild.textContent).toBe('Hello')
  })

  test('render world', () => {
    const { component } = setupComponent('/world')
    const { container } = render(component)
    expect(container.firstChild.textContent).toBe('World')
  })
})
