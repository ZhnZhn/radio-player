"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _reactRedux = require("react-redux");

var _AppContext = _interopRequireDefault(require("./AppContext"));

var _Radio = _interopRequireDefault(require("./radio/Radio"));

var _AudioPlayer = _interopRequireDefault(require("./radio/AudioPlayer"));

var CL = "app-radio-player";

var App = function App() {
  var dispatch = (0, _reactRedux.useDispatch)(),
      appContextValue = _AppContext["default"].getValue(dispatch),
      setSrcFilter = appContextValue.setSrcFilter;

  (0, _react.useEffect)(function () {
    setSrcFilter(2);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppContext["default"].Provider, {
    value: appContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AudioPlayer["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio["default"].List, {})]
    })
  });
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=App.js.map