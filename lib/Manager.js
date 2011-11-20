var Check = require('./Check');
var Emitter = require('./Emitter');

module.exports = Manager;

function Manager(timeout) {
  this._emitters = {};
  this._checks = {};

  this.timeout = timeout;
}

Manager.prototype.emitter = function(id, cb) {
  if (!this._emitters[id]) {
    this._emitters[id] = new Emitter(cb, this.timeout);
  }
  if (cb) this._emitters[id].publishHandler = cb;
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
  if (cb) this._checks[id].timeoutHandler = cb;
  return this._checks[id];
};

Manager.prototype.removeCheck = function(id) {
  if (!this._checks[id]) return false;
  this._checks[id].stop();
  return delete this._checks[id];
};