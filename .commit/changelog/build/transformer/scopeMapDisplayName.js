'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.scopeMapDisplayName = void 0;
var scopeMapDisplayName = function (scope, scopeDisplayNameList) {
  var entries = Object.entries(scopeDisplayNameList);
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a = entries_1[_i],
      key = _a[0],
      value = _a[1];
    if (scope === key) {
      return value;
    }
    if (!scope && scopeDisplayNameList['*']) {
      return scopeDisplayNameList['*'];
    }
  }
  return scope;
};
exports.scopeMapDisplayName = scopeMapDisplayName;
