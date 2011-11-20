module.exports = Check;

function Check(timeoutHandler, timeout) {
  this._timeoutId = null;

  this.timeoutHandler = timeoutHandler;
  this.timeout = timeout;
}

Check.prototype.start = function() {
  this._timeoutId = setTimeout(this.timeoutHandler, this.timeout);
};

Check.prototype.stop = function() {
  clearTimeout(this._timeoutId);
};

Check.prototype.reset = function() {
  clearTimeout(this._timeoutId);
  this.start();
};