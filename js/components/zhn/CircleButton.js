'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'bt-circle';

var CircleButton = function CircleButton(_ref) {
  var accessKey = _ref.accessKey,
      onMouseDown = _ref.onMouseDown,
      onMouseUp = _ref.onMouseUp,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      onClick = _ref.onClick,
      children = _ref.children;

  var _handlers = _has2.default.TOUCH && onTouchStart ? { onTouchStart: onTouchStart, onTouchEnd: onTouchEnd } : { onMouseDown: onMouseDown, onMouseUp: onMouseUp };
  return _react2.default.createElement(
    'button',
    (0, _extends3.default)({
      className: CL,
      accessKey: accessKey
    }, _handlers, {
      onClick: onClick
    }),
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 34 34', width: '100%', height: '100%' },
      _react2.default.createElement(
        'g',
        null,
        children
      )
    )
  );
};

exports.default = CircleButton;
//# sourceMappingURL=CircleButton.js.map