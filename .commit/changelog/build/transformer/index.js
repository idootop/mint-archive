'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var typeDisplayName_1 = require('./typeDisplayName');
var scopeMapDisplayName_1 = require('./scopeMapDisplayName');
var types_1 = require('../utils/types');
exports.default = function (customConfig) {
  return function (commit, context) {
    var _a, _b, _c, _d, _e;
    var discard = true;
    var issues = [];
    commit.notes.forEach(function (note) {
      note.title = '\uD83D\uDCA5 BREAKING CHANGES';
      discard = false;
    });
    var displayTypes = types_1.types;
    if (customConfig.displayTypes) {
      displayTypes = customConfig.displayTypes;
    }
    if (!displayTypes.includes((_a = commit.type) !== null && _a !== void 0 ? _a : '') && discard)
      return false;
    commit.type = (0, typeDisplayName_1.getDisplayName)(
      (_b = commit.type) !== null && _b !== void 0 ? _b : undefined,
      customConfig.displayTypeName,
    );
    if (commit.scope === '*') {
      commit.scope = '';
    }
    if (customConfig.displayScopes) {
      if (
        !((_c = customConfig.displayScopes) === null || _c === void 0
          ? void 0
          : _c.includes((_d = commit.scope) !== null && _d !== void 0 ? _d : ''))
      )
        return false;
    }
    if (customConfig.scopeDisplayName) {
      commit.scope = (0, scopeMapDisplayName_1.scopeMapDisplayName)(
        (_e = commit.scope) !== null && _e !== void 0 ? _e : '',
        customConfig.scopeDisplayName,
      );
    }
    if (typeof commit.hash === 'string') {
      commit.hash = commit.hash.substring(0, 7);
    }
    if (typeof commit.subject === 'string') {
      var url_1 = context.repository
        ? context.host + '/' + context.owner + '/' + context.repository
        : context.repoUrl;
      if (url_1) {
        url_1 = url_1 + '/issues/';
        commit.subject = commit.subject.replace(/#([0-9]+)/g, function (_, issue) {
          issues.push(issue);
          return '[#' + issue + '](' + url_1 + issue + ')';
        });
      }
      if (context.host) {
        commit.subject = commit.subject.replace(
          /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
          function (_, username) {
            if (username.includes('/')) {
              return '@' + username;
            }
            return '[@' + username + '](' + context.host + '/' + username + ')';
          },
        );
      }
    }
    commit.references = commit.references.filter(function (reference) {
      return issues.indexOf(reference.issue) === -1;
    });
    return commit;
  };
};
