"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  EQUALIZER: 'equalizer',
  EQUALIZER_NOT_PLAYING: 'equalizer--not-playing'
};

var Equalizer = function Equalizer(_ref) {
  var isPlaying = _ref.isPlaying,
      isUnloaded = _ref.isUnloaded,
      unload = _ref.unload;
  return isPlaying ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL.EQUALIZER
  }) : isUnloaded ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL.EQUALIZER_NOT_PLAYING
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL.EQUALIZER_NOT_PLAYING,
    "data-loader": "circle",
    onClick: unload
  });
};

var _default = Equalizer;
exports["default"] = _default;
//# sourceMappingURL=Equalizer.js.map