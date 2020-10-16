"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var S = {
  BT: {
    width: 34,
    height: 34
  },
  SVG: {
    fill: '#fff',
    width: 34,
    height: 34
  }
};

var IconPlay = function IconPlay() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M12.458 22.667l10-6.5-10-6.5z"
  });
};

var IconStop = function IconStop() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M11.5 10h3v13h-3v-13z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M17.5 10h3v13h-3v-13z"
    })]
  });
};

var BtPlay = function BtPlay(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onStop = _ref.onStop;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    style: S.BT,
    onClick: isPlaying ? onStop : onPlay,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 32 32",
      width: "100%",
      height: "100%",
      style: S.SVG,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
        children: [isPlaying ? /*#__PURE__*/(0, _jsxRuntime.jsx)(IconStop, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(IconPlay, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          fill: "#64e346",
          d: "M16 32c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zM16 2c-7.719 0-14 6.28-14 14s6.281 14 14 14c7.721 0 14-6.28 14-14s-6.279-14-14-14z"
        })]
      })
    })
  });
};

var _default = BtPlay;
exports["default"] = _default;
//# sourceMappingURL=BtPlay.js.map