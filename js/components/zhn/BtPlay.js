"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CircleButton = _interopRequireDefault(require("./CircleButton"));

var IconPlay = _react["default"].createElement("path", {
  d: "M12.458 22.667l10-6.5-10-6.5z"
});

var IconStop = _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("path", {
  d: "M11.5 10h3v13h-3v-13z"
}), _react["default"].createElement("path", {
  d: "M17.5 10h3v13h-3v-13z"
}));

var BtPlay = function BtPlay(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onStop = _ref.onStop;

  var _onClick = isPlaying ? onStop : onPlay,
      _svgIconEl = isPlaying ? IconStop : IconPlay,
      accessKey = isPlaying ? 's' : 'p';

  return _react["default"].createElement(_CircleButton["default"], {
    accessKey: accessKey,
    onClick: _onClick
  }, _svgIconEl);
};

var _default = BtPlay;
exports["default"] = _default;
//# sourceMappingURL=BtPlay.js.map