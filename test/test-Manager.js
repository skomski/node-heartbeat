var test = require('tap').test;
var sinon = require('sinon');

var Heartbeat = require('../index');

test('Create emitter', function (t) {
  t.plan(1);

  var clock = sinon.useFakeTimers();
  var manager = new Heartbeat.Manager(1000);
  var cb = function() {
    t.ok(true);
  };

  manager.emitter('42', cb).start();
  clock.tick(1000);
  manager.emitter('42').stop();
  clock.tick(1000);
});

test('Create check', function (t) {
  t.plan(1);

  var clock = sinon.useFakeTimers();
  var manager = new Heartbeat.Manager(1000);
  var cb = function() {
    t.ok(true);
  };

  manager.check('42', cb).start();
  clock.tick(1000);
  clock.tick(1000);
});