import test from 'ava'
import aimer from './'
import nightmare from './nightmare'

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
    t.is(e.message, 'Not Found')
  }
})

test('nightmare 404', async t => {
  try {
    await nightmare('https://www.npmjs.com/sasdffsad')
    t.fail('should throw 404 but didn\'t')
  } catch (e) {
    t.is(e.message, 'Not Found')
  }
})

test('nightmare manipulation', async t => {
  const $ = await nightmare('https://gold.xitu.io')
  t.is(typeof $('.entry-info').text(), 'string')
})
