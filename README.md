# heartbeat

[![Build Status](https://secure.travis-ci.org/skomski/node-heartbeat.png)](http://travis-ci.org/skomski/node-heartbeat)

Simple heartbeat management.

## Install

```
  npm install heartbeat
```

## Usage

```js
var Heartbeat  = require('heartbeat');

var timeout = 5000;
var manager = new Heartbeat.Manager(timeout);
var callback = function() {

}
var id = '123';
manager.check(id, callback).start();
```
## License

This module is licensed under the MIT license.