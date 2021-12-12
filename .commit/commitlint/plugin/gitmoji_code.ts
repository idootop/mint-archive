import { gitmojis } from './gitmojis.json';

export const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export const gitmojiUnicode: string[] = gitmojis.map((gitmoji) => gitmoji.emoji);
