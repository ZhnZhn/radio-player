"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

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
  return (/*#__PURE__*/_react["default"].createElement("path", {
      d: "M12.458 22.667l10-6.5-10-6.5z"
    })
  );
};

var IconStop = function IconStop() {
  return (/*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M11.5 10h3v13h-3v-13z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M17.5 10h3v13h-3v-13z"
    }))
  );
};

var BtPlay = function BtPlay(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onStop = _ref.onStop;
  return (/*#__PURE__*/_react["default"].createElement("button", {
      style: S.BT,
      onClick: isPlaying ? onStop : onPlay
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      viewBox: "0 0 32 32",
      width: "100%",
      height: "100%",
      style: S.SVG
    }, /*#__PURE__*/_react["default"].createElement("g", null, isPlaying ? /*#__PURE__*/_react["default"].createElement(IconStop, null) : /*#__PURE__*/_react["default"].createElement(IconPlay, null), /*#__PURE__*/_react["default"].createElement("path", {
      fill: "#64e346",
      d: "M16 32c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zM16 2c-7.719 0-14 6.28-14 14s6.281 14 14 14c7.721 0 14-6.28 14-14s-6.279-14-14-14z"
    }))))
  );
};

var _default = BtPlay;
exports["default"] = _default;
//# sourceMappingURL=BtPlay.js.map