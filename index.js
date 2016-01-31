'use strict'

/**
 * Module dependencies
 */
const fetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = function (url, opts) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string')
	}

	opts = opts || {}

	return fetch(url)
		.then(data => data.text())
		.then(data => cheerio.load(data, opts))
}
