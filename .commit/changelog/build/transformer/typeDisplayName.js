'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getDisplayName = void 0;
var getDisplayName = function (type, displayTypeNames) {
  var _a;
  if (type === void 0) {
    type = 'other';
  }
  if (displayTypeNames === void 0) {
    displayTypeNames = {};
  }
  return (_a = displayTypeNames[type]) !== null && _a !== void 0 ? _a : type;
};
exports.getDisplayName = getDisplayName;
