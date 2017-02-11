import test from 'ava'
import fetch from './'

test('ok', async t => {
  const $ = await fetch('https://www.npmjs.com/package/hack')
  const src = $('.package-name').text().trim()
  t.is(src, 'hack')
})

test('404', async t => {
  try {
    await fetch('https://www.npmjs.com/sasdffsad')
    t.fail('should throw 404 but didn\'t')
  } catch (e) {
    t.is(e.message, 'Not Found')
  }
})
