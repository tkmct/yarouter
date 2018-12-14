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

describe('Test router component', () => {
  test('snapshot', () => {
    const { component } = setupComponent()
    const { container } = render(component)
    expect(container).toMatchSnapshot()
  })

  test('render', () => {
    const { component } = setupComponent()
    const { getByText } = render(component)
    expect(getByText('Hello')).not.toBeNull()
  })
})
