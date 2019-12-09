"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var D = {
  L1: 150,
  L2: 500
};

function useInterval(fn, check, volume) {
  var ID = (0, _react.useRef)(),
      refVolume = (0, _react.useRef)();
  refVolume.current = volume;

  var stopInInterval = function stopInInterval() {
    return clearInterval(ID.current);
  },
      runInInterval = function runInInterval() {
    ID.current = setInterval(function () {
      if (check(refVolume.current)) {
        stopInInterval();
        ID.current = setInterval(fn, D.L2);
      } else {
        fn();
      }
    }, D.L1);
  };

  return [runInInterval, stopInInterval];
}

var _default = useInterval;
exports["default"] = _default;
//# sourceMappingURL=useInterval.js.map