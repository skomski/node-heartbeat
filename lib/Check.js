module.exports = Check;

function Check(timeoutHandler, timeout) {
  this._timeoutId = null;

  this.timeoutHandler = timeoutHandler;
  this.timeout = timeout;
}

Check.prototype.start = function() {
  if (this._timeoutId !== null) return false;
  this._timeoutId = setTimeout(this.timeoutHandler, this.timeout);
  return true;
};

Check.prototype.stop = function() {
  if (this._timeoutId === null) return false;
  clearTimeout(this._timeoutId);
  this._timeoutId = null;
  return true;
};

Check.prototype.reset = function() {
  this.stop();
  return this.start();
};