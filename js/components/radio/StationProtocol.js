"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../sound/utils"));

var isHttp = _utils["default"].isHttp;

var StationProtocol = function StationProtocol(_ref) {
  var src = _ref.src;

  var _protocol = isHttp(src) ? '(http)' : '';

  return (/*#__PURE__*/_react["default"].createElement("span", null, "\xA0", _protocol)
  );
};

var _default = StationProtocol;
exports["default"] = _default;
//# sourceMappingURL=StationProtocol.js.map