import matchPath, { match, matchExact } from '../src/matchPath'

describe('Match functions', () => {
  test('matchExact', () => {
    const path = '/'
    const currentPath = '/'
    const notMatchingPath = '/hello'

    expect(matchExact(path, currentPath)).toBeTruthy()
    expect(matchExact(path, notMatchingPath)).toBeFalsy()
  })

  test('match', () => {
    const props = {
      path: '/hello',
    }
    const currentPath = '/hello/world'

    expect(match(props, currentPath)).toBeTruthy()
  })

  test('match with trailing slash', () => {
    const props = {
      path: '/hello',
      exact: true,
    }
    const currentPath = '/hello/'

    expect(match(props, currentPath)).toBeTruthy()
  })
})