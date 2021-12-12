'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.commitlintConfig = void 0;
var plugin_1 = require('./plugin');
var parse_1 = require('./parse');
var rules_1 = require('./rules');
var prompt_1 = require('./prompt');
exports.commitlintConfig = {
  rules: rules_1.rules,
  parserPreset: parse_1.parse,
  plugins: [plugin_1.plugin],
  prompt: prompt_1.prompt,
};
