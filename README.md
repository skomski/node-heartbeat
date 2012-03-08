# heartbeat

[![Build Status](https://secure.travis-ci.org/Skomski/node-heartbeat.png?branch=master)](http://travis-ci.org/Skomski/node-heartbeat)

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
  // timeout
}
var id = '123';

// create and start check
manager.check(id, callback).start();

// reset check before timeout fires
manager.check(id).reset();

// stop check
manager.check(id).stop();
```
## License

This module is licensed under the MIT license.