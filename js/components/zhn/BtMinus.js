'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircleButton = require('./CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtMinus = function BtMinus(props) {
  return _react2.default.createElement(
    _CircleButton2.default,
    props,
    _react2.default.createElement('path', { d: 'M8 16 H24', strokeWidth: '3' })
  );
};

exports.default = BtMinus;
//# sourceMappingURL=BtMinus.js.map