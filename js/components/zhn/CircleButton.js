'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'bt-circle';

var CircleButton = function CircleButton(_ref) {
  var accessKey = _ref.accessKey,
      onMouseDown = _ref.onMouseDown,
      onMouseUp = _ref.onMouseUp,
      onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    {
      className: CL,
      accessKey: accessKey,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onClick: onClick
    },
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