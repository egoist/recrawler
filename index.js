'use strict'
const cheerio = require('cheerio')
const fetch = require('node-fetch')

module.exports = function (url, opts) {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string')
  }

  opts = opts || {}
  const cheerioOpts = Object.assign({
    // keep the original unicode chars
    decodeEntities: false
  }, opts.cheerio)
  // normal mode, faster
  const ret = fetch(url)
    .then(data => {
      if (data.status !== 200) {
        return Promise.reject(new Error(data.statusText))
      }
      return data.text()
    })
  if (opts.htmlOnly) {
    return ret
  }
  return ret.then(data => cheerio.load(data, cheerioOpts))
}
