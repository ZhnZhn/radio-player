'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_SHOW_POPUP = 'show-popup';
var S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children;

  var _styleShow = isShow ? S.SHOW : S.HIDE,
      _classShow = isShow ? CL_SHOW_POPUP : '',
      _className = className ? className + ' ' + _classShow : _classShow !== '' ? _classShow : void 0;
  return _react2.default.createElement(
    'div',
    {
      className: _className,
      style: (0, _extends3.default)({}, style, _styleShow)
    },
    children
  );
};

exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map