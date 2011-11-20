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

Manager.prototype.check = function(id, cb) {
  if (!this._checks[id]) {
    this._checks[id] = new Check(cb, this.timeout);
  }
  if (cb) this._checks[id].timeoutHandler = cb;
  return this._checks[id];
};