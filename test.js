import test from 'ava'
import aimer from './'

test('aimer', async t => {
	const $ = await aimer('https://www.npmjs.com/')
	const src = $('#npm-logo').find('img').attr('src')
	t.is(src, '/static/images/npm-logo.svg')
})
