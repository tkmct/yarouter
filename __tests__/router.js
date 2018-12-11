import React from 'react'
import { Router } from '../src'
import { render } from 'react-testing-library'

test('render', () => {
  render(
    <Router>
      <div>Hello</div>
    </Router>
  )
})
