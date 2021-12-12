const types = [
  {
    value: ':bug: fix',
    name: '🐛 fix: 修复',
  },
  {
    value: ':bulb: opt',
    name: '💡 opt: 优化',
  },
  {
    value: ':sparkles: feat',
    name: '✨ feat: 功能',
  },
  {
    value: ':construction: todo',
    name: '🚧 todo: 待办',
  },
  {
    value: ':package: deps',
    name: '📦 deps: 依赖',
  },
  {
    value: ':white_check_mark: test',
    name: '✅ test: 测试',
  },
  {
    value: ':memo: docs',
    name: '📃 docs: 文档',
  },
  {
    value: ':technologist: blog',
    name: '💻 blog: 博客',
  },
  {
    value: ':dizzy: other',
    name: '💫 other: 其他',
  },
  {
    value: ':tada: release',
    name: '🎉 release: 发布',
  },
];

module.exports = {
  types: types,
  messages: {
    type: '提交类型(必填)',
    scope: '涉及模块(可选)',
    subject: '提交内容(必填)',
    body: '详细描述(可选)',
    breaking: 'Breaking changes(可选)',
    footer: '相关的的issue(可选)',
    confirmCommit: '确定提交以上内容？',
  },
  allowBreakingChanges: [
    //
    ':sparkles: feat',
    ':bulb: opt',
    ':bug: fix',
  ],
  skipQuestions: ['scope', 'footer'],
};
