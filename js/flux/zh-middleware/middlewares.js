"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _appCurrentStation = _interopRequireDefault(require("./appCurrentStation"));

var _appUiTheme = _interopRequireDefault(require("./appUiTheme"));

var middlewares = [_appUiTheme["default"], _appCurrentStation["default"]];
var _default = middlewares;
exports["default"] = _default;
//# sourceMappingURL=middlewares.js.map