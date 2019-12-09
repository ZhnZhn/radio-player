"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../flux/stations/actions");

var _AppContext = _interopRequireDefault(require("./AppContext"));

var _Radio = _interopRequireDefault(require("./radio/Radio"));

var _AudioPlayer = _interopRequireDefault(require("./radio/AudioPlayer"));

var CL = "app-radio-player";
var sApp = _AppContext["default"].value.sApp;

var App = function App(_ref) {
  var currentStation = _ref.currentStation,
      stations = _ref.stations,
      addCategory = _ref.addCategory,
      setCurrentStation = _ref.setCurrentStation;
  (0, _react.useEffect)(function () {
    addCategory('classical');
    addCategory('piano');
  }, []);
  return _react["default"].createElement(_AppContext["default"].Provider, {
    value: _AppContext["default"].value
  }, _react["default"].createElement("div", {
    className: CL
  }, _react["default"].createElement(_AudioPlayer["default"], {
    station: currentStation
  }), _react["default"].createElement(_Radio["default"].List, {
    currentStation: currentStation,
    radioStations: stations,
    onClick: setCurrentStation
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentStation: sApp.currentStation(state),
    stations: sApp.stations(state)
  };
};

var mapDispatchToProps = {
  addCategory: _actions.addCategory,
  setCurrentStation: _actions.setCurrentStation
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

exports["default"] = _default;
//# sourceMappingURL=App.js.map