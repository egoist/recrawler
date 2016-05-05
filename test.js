import test from 'ava'
import aimer from './'

test('ok', async t => {
  const $ = await aimer('https://www.npmjs.com/')
  const src = $('#npm-logo').find('img').attr('src')
  t.is(src, '/static/images/npm-logo.svg')
})

test('404', async t => {
  try {
    await aimer('https://www.npmjs.com/sasdffsad')
    t.fail('should throw 404 but didn\'t')
  } catch (e) {
    t.pass(e.message)
  }
})
