"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BtPlay = _interopRequireDefault(require("../zhn/BtPlay"));

var RadioCommand = function RadioCommand(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onPause = _ref.onPause;
  return _react["default"].createElement("div", null, _react["default"].createElement(_BtPlay["default"], {
    isPlaying: isPlaying,
    onPlay: onPlay,
    onStop: onPause
  }));
};

var _default = RadioCommand;
exports["default"] = _default;
//# sourceMappingURL=RadioCommand.js.map