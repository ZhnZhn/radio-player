'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../flux/stations/actions');

var _AppContext = require('./AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

var _Radio = require('./radio/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _AudioPlayer = require('./radio/AudioPlayer');

var _AudioPlayer2 = _interopRequireDefault(_AudioPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "app-radio-player";

var sApp = _AppContext2.default.value.sApp;


var App = function App(_ref) {
  var currentStation = _ref.currentStation,
      stations = _ref.stations,
      addCategory = _ref.addCategory,
      setCurrentStation = _ref.setCurrentStation;

  (0, _react.useEffect)(function () {
    addCategory('classical');
    addCategory('piano');
  }, []);
  return _react2.default.createElement(
    _AppContext2.default.Provider,
    { value: _AppContext2.default.value },
    _react2.default.createElement(
      'div',
      { className: CL },
      _react2.default.createElement(_AudioPlayer2.default, {
        station: currentStation
      }),
      _react2.default.createElement(_Radio2.default.List, {
        currentStation: currentStation,
        radioStations: stations,
        onClick: setCurrentStation
      })
    )
  );
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map