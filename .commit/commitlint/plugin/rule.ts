import type { Rule } from '@commitlint/types';
import { gitmojiCodes, gitmojiUnicode } from './gitmoji_code';

const emoji: Rule = (parsed) => {
  const { raw } = parsed;

  // code regex test url: https://regex101.com/r/fSdOvB/1
  const regex = /^(:\w*:)\s.*/gm;
  // unicode regex test url: https://regex101.com/r/OTMgWL/2
  const unicodeRegex =
    /(\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f\ude80-\udeff]|[\u2600-\u2B55])\s.*/gm;

  const result = regex.exec(raw);
  const unicodeResult = unicodeRegex.exec(raw);

  let pass;
  let errorMsg = 'passed';

  // if gitmoji code is valid
  if (result) {
    const emojiCode = result[1];
    pass = gitmojiCodes.includes(emojiCode);
    if (!pass) {
      errorMsg = `此 ${emojiCode} 不在受支持的 gitmoji 列表里哦～ 点此查看 👉 https://gitmoji.dev`;
    }
  } else if (unicodeResult) {
    const unicode = unicodeResult[1];

    pass = gitmojiUnicode.includes(unicode);

    if (!pass) {
      errorMsg = `此 ${unicode} 不在受支持的 emoji 列表里哦～ 点此查看 👉 https://gitmoji.dev`;
    }
  } else {
    // if don't has gitmoji code or emoji unicode
    pass = false;
    errorMsg = '😫 提交信息要以 gitmoji 或 emoji 开头哦～ 点此查看 👉 https://gitmoji.dev';
  }

  return [pass, errorMsg];
};

export default emoji;
