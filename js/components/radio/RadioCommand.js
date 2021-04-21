"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _BtPlay = _interopRequireDefault(require("../zhn/BtPlay"));

var _jsxRuntime = require("react/jsx-runtime");

var RadioCommand = function RadioCommand(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onPause = _ref.onPause;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtPlay["default"], {
      isPlaying: isPlaying,
      onPlay: onPlay,
      onStop: onPause
    })
  });
};

var _default = RadioCommand;
exports["default"] = _default;
//# sourceMappingURL=RadioCommand.js.map