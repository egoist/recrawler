'use strict'
const Nightmare = require('nightmare')
const cheerio = require('cheerio')
const aimer = require('./')

module.exports = function (url, opts) {
  opts = opts || {}

  const cheerioOpts = Object.assign({
    // keep the original unicode chars
    decodeEntities: false
  }, opts.cheerio)

  const next = function next() {
    const nightmare = Nightmare(opts.nightmare) // eslint-disable-line
    return nightmare.goto(url)
      .evaluate(() => document.documentElement.outerHTML)
      .end()
      .then(res => cheerio.load(res, cheerioOpts))
  }

  return aimer(url, {htmlOnly: true}).then(next)
}
