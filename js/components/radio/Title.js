"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var CL = {
  TITLE: 'audio__title',
  ERR: 'audio__title audio__title--err'
};

var Title = function Title(_ref) {
  var station = _ref.station,
      msgErr = _ref.msgErr,
      title = _ref.title;

  var _title = station && station.title || '',
      _isErr = msgErr && _title,
      _msgErrOrTitle = _isErr ? msgErr + " " + _title : _title || title,
      _cl = _isErr ? CL.ERR : CL.TITLE;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _cl,
    children: _msgErrOrTitle
  });
};

var _default = Title;
exports["default"] = _default;
//# sourceMappingURL=Title.js.map