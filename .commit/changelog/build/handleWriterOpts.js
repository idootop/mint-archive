'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var fs_1 = require('fs');
var path_1 = require('path');
var transformer_1 = require('./transformer');
var basePath = (0, path_1.resolve)(__dirname, './templates');
var template = (0, fs_1.readFileSync)(basePath + '/template.hbs', 'utf-8');
var header = (0, fs_1.readFileSync)(basePath + '/header.hbs', 'utf-8');
var commit = (0, fs_1.readFileSync)(basePath + '/commit.hbs', 'utf-8');
var footer = (0, fs_1.readFileSync)(basePath + '/footer.hbs', 'utf-8');
var author = (0, fs_1.readFileSync)(basePath + '/author.hbs', 'utf-8');
exports.default = function (customConfig) {
  return {
    transform: (0, transformer_1.default)(customConfig),
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    mainTemplate: template,
    headerPartial: header,
    commitPartial: commit.replace(/{{gitUserInfo}}/g, customConfig.showAuthor ? author : ''),
    footerPartial: footer,
  };
};
