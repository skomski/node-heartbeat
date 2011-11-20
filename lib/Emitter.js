module.exports = Emitter;

function Emitter(publishHandler, interval) {
  this._intervalId = null;

  this.publishHandler = publishHandler;
  this.interval = interval;
}

Emitter.prototype.start = function() {
  this._intervalId = setInterval(this.publishHandler, this.interval);
};

Emitter.prototype.stop = function() {
  clearInterval(this._intervalId);
};