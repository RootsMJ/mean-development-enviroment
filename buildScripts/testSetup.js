// This file is not transpiled.
// Supports only CommonJS and ES5

// Register babel to transpile our tests before running
require('babel-register')();

// Disable webpack features that Mocha don't understand
require.extensions['.css'] = function(){};
