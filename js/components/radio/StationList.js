"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("../has"));

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _useSwipeGesture = _interopRequireDefault(require("../hooks/useSwipeGesture"));

var _StationDescr = _interopRequireDefault(require("./StationDescr"));

var _StationItem = _interopRequireDefault(require("./StationItem"));

var CL = {
  LIST: 'item-list'
};

var _calcAccessKey = function _calcAccessKey(index) {
  return index < 5 ? index + 1 : void 0;
};

var StationList = function StationList() {
  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      toggleDrawer = _useContext.toggleDrawer,
      setCurrentStation = _useContext.setCurrentStation,
      sApp = _useContext.sApp,
      useSelector = _useContext.useSelector,
      currentStation = useSelector(sApp.currentStation),
      radioStations = useSelector(sApp.stations),
      _handlers = (0, _useSwipeGesture["default"])({
    onSwipeGesture: toggleDrawer
  });

  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: CL.LIST
  }, _handlers), _react["default"].createElement(_StationDescr["default"], {
    station: currentStation
  }), radioStations.map(function (station, index) {
    return _react["default"].createElement(_StationItem["default"], {
      key: station.title,
      station: station,
      accessKey: _has["default"].TOUCH ? void 0 : _calcAccessKey(index),
      onClick: setCurrentStation.bind(null, station, index)
    });
  }));
};

var _default = StationList;
exports["default"] = _default;
//# sourceMappingURL=StationList.js.map