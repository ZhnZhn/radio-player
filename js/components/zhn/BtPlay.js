"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _CircleButton = _interopRequireDefault(require("./CircleButton"));

var _jsxRuntime = require("react/jsx-runtime");

var IconPlay = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12.458 22.667l10-6.5-10-6.5z"
});
var IconStop = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M11.5 10h3v13h-3v-13z"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M17.5 10h3v13h-3v-13z"
  })]
});

var BtPlay = function BtPlay(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onStop = _ref.onStop;

  var _onClick = isPlaying ? onStop : onPlay,
      _svgIconEl = isPlaying ? IconStop : IconPlay,
      accessKey = isPlaying ? 's' : 'p';

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircleButton["default"], {
    accessKey: accessKey,
    onClick: _onClick,
    children: _svgIconEl
  });
};

var _default = BtPlay;
exports["default"] = _default;
//# sourceMappingURL=BtPlay.js.map