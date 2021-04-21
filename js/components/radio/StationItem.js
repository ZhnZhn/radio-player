"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _StationProtocol = _interopRequireDefault(require("./StationProtocol"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

var StationItem = function StationItem(_ref) {
  var station = _ref.station,
      accessKey = _ref.accessKey,
      onClick = _ref.onClick;
  var title = station.title,
      src = station.src;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    className: CL.ITEM,
    accessKey: accessKey,
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StationProtocol["default"], {
      src: src
    }), Boolean(accessKey) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL.ACCESS_KEY,
      children: accessKey
    })]
  });
};

var _default = StationItem;
exports["default"] = _default;
//# sourceMappingURL=StationItem.js.map