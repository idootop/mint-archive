'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.parse = void 0;
var plugin_1 = require('./plugin');
exports.parse = {
  parserOpts: {
    headerPattern:
      /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
    headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  },
  plugins: {
    gitmoji: plugin_1.plugin,
  },
};
