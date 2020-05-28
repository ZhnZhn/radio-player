"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StationProtocol = _interopRequireDefault(require("./StationProtocol"));

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
  return (/*#__PURE__*/_react["default"].createElement("button", {
      className: CL.ITEM,
      accessKey: accessKey,
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement("span", null, title), /*#__PURE__*/_react["default"].createElement(_StationProtocol["default"], {
      src: src
    }), Boolean(accessKey) && /*#__PURE__*/_react["default"].createElement("span", {
      className: CL.ACCESS_KEY
    }, accessKey))
  );
};

var _default = StationItem;
exports["default"] = _default;
//# sourceMappingURL=StationItem.js.map