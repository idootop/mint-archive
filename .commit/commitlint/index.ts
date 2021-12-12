import { plugin } from './plugin';
import { parse } from './parse';
import { rules } from './rules';
import { prompt } from './prompt';
import type { UserConfig } from '@commitlint/types';

export const commitlintConfig: UserConfig = {
  rules: rules,
  parserPreset: parse,
  plugins: [plugin],
  prompt: prompt,
};
