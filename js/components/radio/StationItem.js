"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

var StationItem = function StationItem(_ref) {
  var station = _ref.station,
      accessKey = _ref.accessKey,
      onClick = _ref.onClick;
  return _react["default"].createElement("button", {
    className: CL.ITEM,
    accessKey: accessKey,
    onClick: onClick
  }, _react["default"].createElement("span", null, station.title), Boolean(accessKey) && _react["default"].createElement("span", {
    className: CL.ACCESS_KEY
  }, accessKey));
};

var _default = StationItem;
exports["default"] = _default;
//# sourceMappingURL=StationItem.js.map