'use strict'
const nightmare = require('./nightmare')
const aimer = require('./')

aimer('http://bbs.005.tv/thread-492392-1-1.html')
  .then($ => {
    // give some intelligence here to your spider!
    console.log($.root().html())
  })
  .catch(e => console.log(e.stack))

nightmare('http://gold.xitu.io') // a spa
  .then($ => {
    // give some intelligence here to your spider!
    console.log($.root().html())
  })
  .catch(e => console.log(e.message))
