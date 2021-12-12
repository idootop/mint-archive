'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var gitmoji_code_1 = require('./gitmoji_code');
var emoji = function (parsed) {
  var raw = parsed.raw;
  var regex = /^(:\w*:)\s.*/gm;
  var unicodeRegex =
    /(\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f\ude80-\udeff]|[\u2600-\u2B55])\s.*/gm;
  var result = regex.exec(raw);
  var unicodeResult = unicodeRegex.exec(raw);
  var pass;
  var errorMsg = 'passed';
  if (result) {
    var emojiCode = result[1];
    pass = gitmoji_code_1.gitmojiCodes.includes(emojiCode);
    if (!pass) {
      errorMsg =
        '\u6B64 ' +
        emojiCode +
        ' \u4E0D\u5728\u53D7\u652F\u6301\u7684 gitmoji \u5217\u8868\u91CC\u54E6\uFF5E \u70B9\u6B64\u67E5\u770B \uD83D\uDC49 https://gitmoji.dev';
    }
  } else if (unicodeResult) {
    var unicode = unicodeResult[1];
    pass = gitmoji_code_1.gitmojiUnicode.includes(unicode);
    if (!pass) {
      errorMsg =
        '\u6B64 ' +
        unicode +
        ' \u4E0D\u5728\u53D7\u652F\u6301\u7684 emoji \u5217\u8868\u91CC\u54E6\uFF5E \u70B9\u6B64\u67E5\u770B \uD83D\uDC49 https://gitmoji.dev';
    }
  } else {
    pass = false;
    errorMsg = '😫 提交信息要以 gitmoji 或 emoji 开头哦～ 点此查看 👉 https://gitmoji.dev';
  }
  return [pass, errorMsg];
};
exports.default = emoji;
