import test from 'ava'
import isCI from 'is-ci'
import aimer from './'

test('ok', async t => {
  const $ = await aimer('https://www.npmjs.com/package/hack')
  const src = $('.package-name').text().trim()
  t.is(src, 'hack')
})

test('404', async t => {
  try {
    await aimer('https://www.npmjs.com/sasdffsad')
    t.fail('should throw 404 but didn\'t')
  } catch (e) {
    t.is(e.message, 'Response code 404 (Not Found)')
  }
})

test('use proxy', async t => {
  const $ = await aimer('https://google.com', {
    proxy: !isCI && 'http://localhost:8787'
  })
  t.is($('title').text(), 'Google')
})
