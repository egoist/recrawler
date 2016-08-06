'use strict'
const cheerio = require('cheerio')
const got = require('got')
const HttpsProxyAgent = require('https-proxy-agent')

module.exports = function (url, opts) {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string')
  }

  opts = opts || {}
  const proxy = opts.proxy === undefined ?
    process.env.http_proxy :
    opts.proxy

  const cheerioOpts = Object.assign({
    // keep the original unicode chars
    decodeEntities: false
  }, opts.cheerio)

  const gotOptions = Object.assign({
    agent: proxy && (new HttpsProxyAgent(proxy))
  }, opts.got)

  const ret = got.get(url, gotOptions).then(data => {
    if (data.statusCode !== 200) {
      return Promise.reject(new Error(data.statusText))
    }
    return data.body
  })
  if (opts.htmlOnly) {
    return ret
  }
  return ret.then(data => cheerio.load(data, cheerioOpts))
}
