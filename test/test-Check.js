var test = require('tap').test;
var sinon = require('sinon');

var Heartbeat = require('../index');

test('timeout after 1000 ms', function (t) {
  t.plan(1);

  var clock = sinon.useFakeTimers();
  var check = new Heartbeat.Check(function(){
    t.ok(true, 'fire timeout callback');
  }, 1000);

  check.start();
  clock.tick(1000);
});

test('timeout after 2000 ms when reset timer', function (t) {
  t.plan(1);

  var clock = sinon.useFakeTimers();
  var check = new Heartbeat.Check(function(){
    t.ok(true, 'fire second timeout callback');
  }, 1000);

  check.start();
  clock.tick(999);
  check.reset();
  clock.tick(1001);
});