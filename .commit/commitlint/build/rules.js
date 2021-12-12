'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.rules = void 0;
var types_1 = require('@commitlint/types');
var types_2 = require('./types');
var Error = types_1.RuleConfigSeverity.Error;
exports.rules = {
  'start-with-gitmoji': [Error, 'always'],
  'type-enum': [Error, 'always', types_2.types],
  'body-leading-blank': [Error, 'always'],
  'footer-leading-blank': [Error, 'always'],
  'header-max-length': [Error, 'always', 72],
  'scope-case': [Error, 'always', 'lower-case'],
  'subject-empty': [Error, 'never'],
  'subject-full-stop': [Error, 'never', '。'],
  'type-case': [Error, 'always', 'lower-case'],
  'type-empty': [Error, 'never'],
};
