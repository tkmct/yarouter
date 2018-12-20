import { trimTrailingSlash } from '../src/util'

test('trim trailing slash', () => {
  expect(trimTrailingSlash('/hello/')).toBe('/hello')
  expect(trimTrailingSlash('/hello//')).toBe('/hello')
})
