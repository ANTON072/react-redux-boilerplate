import * as string from '../string'

test('URLJoin', () => {
  expect(
    string.URLJoin(
      'http://www.google.com/',
      'a',
      '/b/cd',
      '?foo=123',
      '?bar=foo'
    )
  ).toBe('http://www.google.com/a/b/cd?foo=123&bar=foo')
})
