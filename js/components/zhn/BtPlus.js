"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircleButton = _interopRequireDefault(require("./CircleButton"));

var BtMinus = function BtMinus(props) {
  return (/*#__PURE__*/_react["default"].createElement(_CircleButton["default"], props, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M8 16 H24",
      strokeWidth: "3"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M16 8 V24",
      strokeWidth: "3"
    }))
  );
};

var _default = BtMinus;
exports["default"] = _default;
//# sourceMappingURL=BtPlus.js.map