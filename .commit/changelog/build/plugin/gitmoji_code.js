'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.gitmojiUnicode = exports.gitmojiCodes = void 0;
var gitmojis_json_1 = require('./gitmojis.json');
exports.gitmojiCodes = gitmojis_json_1.gitmojis.map(function (gitmoji) {
  return gitmoji.code;
});
exports.gitmojiUnicode = gitmojis_json_1.gitmojis.map(function (gitmoji) {
  return gitmoji.emoji;
});
