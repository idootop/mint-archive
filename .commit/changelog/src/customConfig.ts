import type { Types } from './utils/types';

export interface CustomConfig {
  /**
   * 待显示的 type 组
   */
  displayTypes?: Types[];
  /**
   * type 在 Changelog 中的显示信息
   */
  displayTypeName?: Record<string, string>;
  /**
   * scope 在 Changelog 中的显示信息
   */
  scopeDisplayName?: Record<string, string>;
  /**
   * 待显示的 scope
   */
  displayScopes?: string[];
  /**
   * 是否显示作者
   */
  showAuthor?: boolean;
}

// todo
const config: CustomConfig = {
  displayTypes: ['fix', 'feat', 'opt'],
  displayTypeName: {
    fix: '🐛 已修复',
    feat: '✨ 新功能',
    opt: '💡 优化啦',
  },
};

export default config;
