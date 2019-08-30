'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

function useInterval(fn, check) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  var ID = (0, _react.useRef)(),
      stopInInterval = function stopInInterval() {
    return clearInterval(ID.current);
  },
      runInInterval = function runInInterval() {
    ID.current = setInterval(fn, delay);
  };
  return [runInInterval, stopInInterval];
}

exports.default = useInterval;
//# sourceMappingURL=useInterval.js.map