module.exports = Emitter;

function Emitter(publishHandler, interval) {
  this._intervalId = null;

  this.publishHandler = publishHandler;
  this.interval = interval;
}

Emitter.prototype.start = function() {
  if (this._intervalId !== null) return false;
  this._intervalId = setInterval(this.publishHandler, this.interval);
  return true;
};

Emitter.prototype.stop = function() {
  if (this._intervalId === null) return false;
  clearInterval(this._intervalId);
  this._intervalId = null;
  return true;
};