var Check = require('./Check');
var Emitter = require('./Emitter');

var sys = require('sys');
var events = require('events');

module.exports = Manager;

function Manager(timeout) {
  this._emitters = {};
  this._checks = {};

  this.timeout = timeout;
}

sys.inherits(Manager, events.EventEmitter);

Manager.prototype.emitter = function(id, cb) {
  if (!this._emitters[id]) {
    this._emitters[id] = new Emitter(cb, this.timeout);
  }
  if (cb) {
    this._emitters[id].publishHandler = function() {
      this.emit('publish', id);
      cb();
    }.bind(this);
  }
  return this._emitters[id];
};

Manager.prototype.removeEmitter = function(id) {
  if (!this._emitters[id]) return false;
  this._emitters[id].stop();
  return delete this._emitters[id];
};

Manager.prototype.check = function(id, cb) {
  if (!this._checks[id]) {
    this._checks[id] = new Check(cb, this.timeout);
  }
  if (cb) {
    this._checks[id].timeoutHandler = function() {
      this.emit('timeout', id);
      cb();
    }.bind(this);
  }
  return this._checks[id];
};

Manager.prototype.removeCheck = function(id) {
  if (!this._checks[id]) return false;
  this._checks[id].stop();
  return delete this._checks[id];
};
