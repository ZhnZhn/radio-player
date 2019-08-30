'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  display: 'inline-block',
  width: 16,
  height: 16
};

var SvgChecked = function SvgChecked(_ref) {
  var style = _ref.style,
      color = _ref.color;
  return _react2.default.createElement(
    'span',
    { style: (0, _extends3.default)({}, S, style) },
    _react2.default.createElement(
      'svg',
      {
        viewBox: '0 0 16 16', width: '100%', height: '100%',
        preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg'
      },
      _react2.default.createElement('path', {
        d: 'M 2,5 L 8,14 14,1',
        stroke: color,
        fill: 'transparent',
        strokeWidth: '3',
        strokeLinecap: 'round'
      })
    )
  );
};

SvgChecked.defaultProps = {
  color: '#64e346'
};

exports.default = SvgChecked;
//# sourceMappingURL=SvgChecked.js.map