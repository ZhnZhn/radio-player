'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL = "svg-close";

var S = {
  COLOR: '#f44336',
  SVG: {
    padding: 3
  }
};

var SvgClose = function SvgClose(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? CL : _ref$className,
      style = _ref.style,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === undefined ? -1 : _ref$tabIndex,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: className,
      style: style,
      tabIndex: tabIndex,
      onClick: onClick
    },
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 12 12', width: '100%', height: '100%',
        style: S.SVG, preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg',
        strokeWidth: '2',
        stroke: S.COLOR,
        strokeLinecap: 'round'
      },
      _react2.default.createElement('path', { d: 'M 0,0 L 12,12' }),
      _react2.default.createElement('path', { d: 'M 12,0 L 0,12' })
    )
  );
};

/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/

exports.default = SvgClose;
//# sourceMappingURL=SvgClose.js.map