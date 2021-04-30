"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _SvgChecked = _interopRequireDefault(require("../zhn/SvgChecked"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _style = _interopRequireDefault(require("./style"));

var _jsxRuntime = require("react/jsx-runtime");

var CategoriesList = function CategoriesList() {
  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      sApp = _useContext.sApp,
      addCategory = _useContext.addCategory,
      removeCategory = _useContext.removeCategory,
      useSelector = _useContext.useSelector,
      topics = useSelector(sApp.topics),
      isCategories = useSelector(sApp.categories),
      isOpen = useSelector(sApp.isDrawer),
      btTabIndex = isOpen ? 0 : -1;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    style: _style["default"].UL,
    children: topics.map(function (category) {
      var _is = isCategories[category];
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: _style["default"].CL_BT,
          caption: category,
          timeout: 0,
          tabIndex: btTabIndex,
          onClick: _is ? function () {
            return removeCategory(category);
          } : function () {
            return addCategory(category);
          },
          children: _is && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgChecked["default"], {})
        })
      }, category);
    })
  });
};

var _default = CategoriesList;
exports["default"] = _default;
//# sourceMappingURL=CategoriesList.js.map