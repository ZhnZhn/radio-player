'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appCurrentStation = require('./appCurrentStation');

var _appCurrentStation2 = _interopRequireDefault(_appCurrentStation);

var _appUiTheme = require('./appUiTheme');

var _appUiTheme2 = _interopRequireDefault(_appUiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_appUiTheme2.default, _appCurrentStation2.default];

exports.default = middlewares;
//# sourceMappingURL=middlewares.js.map