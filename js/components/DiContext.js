'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selectors = require('../flux/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _uiTheme = require('./ui-theme/uiTheme');

var _uiTheme2 = _interopRequireDefault(_uiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DiContext = _react2.default.createContext();

DiContext.value = (0, _extends3.default)({}, _selectors2.default, {
  uiThemeImpl: _uiTheme2.default
});

exports.default = DiContext;
//# sourceMappingURL=DiContext.js.map