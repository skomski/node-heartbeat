var test = require('tap').test;
var sinon = require('sinon');

var Heartbeat = require('../index');

test('Create emitter and delete emitter', function (t) {
  t.plan(5);

  var clock = sinon.useFakeTimers();
  var manager = new Heartbeat.Manager(1000);
  var cb = function() {
    t.ok(true, 'fire emitter callback once');
  };

  t.ok(manager.emitter('42', cb).start(), 'start emitter');
  clock.tick(1000);
  t.ok(manager.emitter('42').stop(), 'stop emitter');
  clock.tick(1000);

  t.ok(manager.removeEmitter('42', 'remove emitter'));
  t.deepEqual(manager._emitters, {}, 'emitters empty');
});

test('Create check and delete check', function (t) {
  t.plan(5);

  var clock = sinon.useFakeTimers();
  var manager = new Heartbeat.Manager(1000);
  var cb = function() {
    t.ok(true);
  };

  t.ok(manager.check('42', cb).start());
  clock.tick(1000);
  clock.tick(1000);

  t.ok(manager.check('42').stop());

  t.ok(manager.removeCheck('42'));
  t.deepEqual(manager._checks, {});
});