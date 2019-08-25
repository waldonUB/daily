define([
  'require',
  'dependency'
], function(require, factory) {
  'use strict';
  let lib = require('./lib')
  console.log(`cmd中的lib：` + lib.count)
});