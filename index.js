require('fs')
  .readdirSync(__dirname + '/lib')
  .forEach(function(name) {
    var match = name.match(/(.+)\.js$/);
    if (!match || name === 'index.js') return;

    exports[match[1]] = require('./lib/' + match[1]);
  });