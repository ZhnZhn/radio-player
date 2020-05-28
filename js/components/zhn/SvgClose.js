"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
      className = _ref$className === void 0 ? CL : _ref$className,
      style = _ref.style,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? -1 : _ref$tabIndex,
      onClick = _ref.onClick;
  return (/*#__PURE__*/_react["default"].createElement("button", {
      className: className,
      style: style,
      tabIndex: tabIndex,
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      viewBox: "0 0 12 12",
      width: "100%",
      height: "100%",
      style: S.SVG,
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      strokeWidth: "2",
      stroke: S.COLOR,
      strokeLinecap: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M 0,0 L 12,12"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M 12,0 L 0,12"
    })))
  );
};
/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/


var _default = SvgClose;
exports["default"] = _default;
//# sourceMappingURL=SvgClose.js.map