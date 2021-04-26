# next-url-watcher
> Observe url changes for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-url-watcher
```

## apis
| api   | params        | description         |
| ----- | ------------- | ------------------- |
| init  | ({ interval}) | Initial a nx class. |
| watch | callback      | Watch url change.   |

## usage
```js
import NxUrlWatcher from '@jswork/next-url-watcher';

const wather = new NxUrlWatcher();

wather.watch((old, current) => {
  console.log(old, current);
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-url-watcher/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-url-watcher
[version-url]: https://npmjs.org/package/@jswork/next-url-watcher

[license-image]: https://img.shields.io/npm/l/@jswork/next-url-watcher
[license-url]: https://github.com/afeiship/next-url-watcher/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-url-watcher
[size-url]: https://github.com/afeiship/next-url-watcher/blob/master/dist/next-url-watcher.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-url-watcher
[download-url]: https://www.npmjs.com/package/@jswork/next-url-watcher
