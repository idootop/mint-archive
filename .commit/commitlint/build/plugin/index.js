'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.plugin = void 0;
var rule_1 = require('./rule');
exports.plugin = {
  rules: {
    'start-with-gitmoji': rule_1.default,
  },
};
