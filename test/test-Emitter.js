var test = require('tap').test;
var sinon = require('sinon');

var Heartbeat = require('../index');

test('publish after 1000 ms', function (t) {
  t.plan(1);

  var clock = sinon.useFakeTimers();
  var emitter = new Heartbeat.Emitter(function(){
    t.ok(true);
  }, 1000);

  emitter.start();
  clock.tick(1000);
});