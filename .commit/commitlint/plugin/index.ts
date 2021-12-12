import type { Plugin } from '@commitlint/types';
import emojiRule from './rule';

export const plugin: Plugin = {
  rules: {
    'start-with-gitmoji': emojiRule,
  },
};
