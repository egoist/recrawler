# recrawler [![NPM version](https://img.shields.io/npm/v/recrawler.svg)](https://npmjs.com/package/recrawler) [![NPM downloads](https://img.shields.io/npm/dm/recrawler.svg)](https://npmjs.com/package/recrawler) [![Circle CI](https://circleci.com/gh/egoist/recrawler/tree/master.svg?style=svg)](https://circleci.com/gh/egoist/recrawler/tree/master)

> Remote web content crawler done right.

## Motivation

Sometimes I want to grab some nice images from a url like http://bbs.005.tv/thread-492392-1-1.html, so I made this little program to combine `node-fetch` and `cheerio` to make my attempt fulfilled. 

## Install

```bash
$ npm install --save recrawler
```

For Single Page Apps please head to [recrawler-spa](https://github.com/egoist/recrawler-spa)

## Usage

```js
const recrawler = require('recrawler')

recrawler('http://some-url.com/a/b/c')
	.then($ => {
		$('img.nice-images').each(function () {
			const url = $(this).attr('src')
			console.log(url)
		})
	})
```

## API

### recrawler(url, opts)

#### opts

##### cheerio

[cheerio](https://github.com/cheeriojs/cheerio) options. Except `decodeEntities` is `false` by default here.

## License

MIT © [EGOIST](https://github.com/egoist)
