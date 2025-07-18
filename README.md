# url-parse
> To parse an URL to object.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/url-parse
```

## usage
```js
import urlParse from '@jswork/url-parse';

// URL with protocol
const parsedUrl1 = urlParse('https://www.example.com/path?query=value#hash');
console.log(parsedUrl1.protocol); // 'https:'
console.log(parsedUrl1.hostname); // 'www.example.com'

// URL without protocol (http:// will be added)
const parsedUrl2 = urlParse('www.example.com/another-path');
console.log(parsedUrl2.protocol); // 'http:'
console.log(parsedUrl2.hostname); // 'www.example.com'

// URL with only domain
const parsedUrl3 = urlParse('example.com');
console.log(parsedUrl3.protocol); // 'http:'
console.log(parsedUrl3.hostname); // 'example.com'
console.log(parsedUrl3.pathname); // '/'

// URL with IP address
const parsedUrl4 = urlParse('192.168.1.1/dashboard');
console.log(parsedUrl4.protocol); // 'http:'
console.log(parsedUrl4.hostname); // '192.168.1.1'
```

## license
Code released under [the MIT license](https://github.com/afeiship/url-parse/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/url-parse
[version-url]: https://npmjs.org/package/@jswork/url-parse

[license-image]: https://img.shields.io/npm/l/@jswork/url-parse
[license-url]: https://github.com/afeiship/url-parse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/url-parse
[size-url]: https://github.com/afeiship/url-parse/blob/master/dist/url-parse.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/url-parse
[download-url]: https://www.npmjs.com/package/@jswork/url-parse
