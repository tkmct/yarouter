import { trimTrailingSlash } from '../src/matchPath'

test('trim trailing slash', () => {
  expect(trimTrailingSlash('/hello/')).toBe('/hello')
  expect(trimTrailingSlash('/hello//')).toBe('/hello')
})
