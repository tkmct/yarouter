import { matchPath, matchExactPath } from '../src/match'

describe('Match functions', () => {
  test('matchExactPath', () => {
    const path = '/'
    const currentPath = '/'
    const notMatchingPath = '/hello'

    expect(matchExactPath(path, currentPath)).toBeTruthy()
    expect(matchExactPath(path, notMatchingPath)).toBeFalsy()
  })

  test('matchPath', () => {
    const props = {
      path: '/hello',
    }
    const currentPath = '/hello/world'

    expect(matchPath(props, currentPath)).toBeTruthy()
  })

  test('matchPath with trailing slash', () => {
    const props = {
      path: '/hello',
      exact: true,
    }
    const currentPath = '/hello/'

    expect(matchPath(props, currentPath)).toBeTruthy()
  })
})
