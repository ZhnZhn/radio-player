'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../flux/stations/actions');

var _DiContext = require('./DiContext');

var _DiContext2 = _interopRequireDefault(_DiContext);

var _Radio = require('./radio/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _AudioPlayer = require('./radio/AudioPlayer');

var _AudioPlayer2 = _interopRequireDefault(_AudioPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  APP: {
    width: 380,
    maxWidth: 'calc(100vw - 32px)',
    marginTop: 84,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 12
  }
};

var App = function App(_ref) {
  var stations = _ref.stations,
      addCategory = _ref.addCategory,
      moveToTop = _ref.moveToTop;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      station = _useState2[0],
      setStation = _useState2[1],
      _onStation = function _onStation(station, index) {
    moveToTop(station, index);
    setStation(station);
  };

  (0, _react.useEffect)(function () {
    addCategory('classical');
    addCategory('piano');
  }, []);

  return _react2.default.createElement(
    _DiContext2.default.Provider,
    { value: _DiContext2.default.value },
    _react2.default.createElement(
      'div',
      { style: S.APP },
      _react2.default.createElement(_AudioPlayer2.default, {
        station: station
      }),
      _react2.default.createElement(_Radio2.default.List, {
        radioStations: stations,
        onClick: _onStation
      })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    stations: state.stations
  };
};
var mapDispatchToProps = {
  addCategory: _actions.addCategory,
  moveToTop: _actions.moveToTop
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map