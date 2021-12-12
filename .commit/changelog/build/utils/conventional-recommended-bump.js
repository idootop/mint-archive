'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var parserOpts_1 = require('./parserOpts');
exports.default = {
  parserOpts: parserOpts_1.default,
  whatBump: function (commits) {
    var level = 2;
    var breakings = 0;
    var features = 0;
    commits.forEach(function (commit) {
      if (commit.notes.length > 0) {
        breakings += commit.notes.length;
        level = 0;
      } else if (commit.type === 'feat') {
        features += 1;
        if (level === 2) {
          level = 1;
        }
      }
    });
    return {
      level: level,
      reason:
        breakings === 1
          ? 'There is ' + breakings + ' BREAKING CHANGE and ' + features + ' features'
          : 'There are ' + breakings + ' BREAKING CHANGES and ' + features + ' features',
    };
  },
};
