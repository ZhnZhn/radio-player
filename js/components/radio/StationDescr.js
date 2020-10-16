"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));

var _StationProtocol = _interopRequireDefault(require("./StationProtocol"));

var CL = {
  DESCR: 'station-descr',
  DESCR_BT: 'station-descr__bt',
  BT_MORE: 'item-descr__bt-more',
  INFO: 'station-descr__info'
};
var S = {
  ARROW_OPEN: {
    transform: 'rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)'
  },
  LINK: {
    color: '#04477b',
    fontSize: '17px',
    display: 'inline-block',
    maxWidth: 340,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  TITLE: {
    color: 'darkgray'
  },
  CATEGORY: {
    color: '#1b2836'
  }
};

var _isStrNotEmpty = function _isStrNotEmpty(str) {
  return str && typeof str === 'string';
};

var _toFirstUpperCase = function _toFirstUpperCase(str) {
  return str[0].toUpperCase() + str.substring(1);
};

var Category = function Category(_ref) {
  var category = _ref.category,
      br = _ref.br;
  if (!_isStrNotEmpty(category)) return null;

  var _kbps = br ? " (" + br + " Kbps)" : '';

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.TITLE,
      children: "Category:"
    }), "\xA0", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      style: S.CATEGORY,
      children: [_toFirstUpperCase(category), _kbps]
    })]
  });
};

var SiteUrl = function SiteUrl(_ref2) {
  var siteUrl = _ref2.siteUrl;
  if (!siteUrl) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: siteUrl,
    style: S.LINK,
    target: "_blank",
    rel: "noreferrer noopener",
    children: siteUrl
  });
};

var StationDescr = function StationDescr(_ref3) {
  var station = _ref3.station;

  var _useState = (0, _react.useState)(true),
      isMore = _useState[0],
      setMore = _useState[1],
      _onClick = function _onClick() {
    return setMore(function (isMore) {
      return !isMore;
    });
  },
      _arrowStyle = isMore ? S.ARROW_OPEN : void 0,
      _ref4 = station || {},
      title = _ref4.title,
      src = _ref4.src,
      siteUrl = _ref4.siteUrl,
      category = _ref4.category,
      br = _ref4.br;

  if (!station) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.DESCR,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      className: CL.DESCR_BT,
      onClick: _onClick,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StationProtocol["default"], {
        src: src
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: CL.BT_MORE,
        style: _arrowStyle,
        children: ">"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
      className: CL.INFO,
      isShow: isMore,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Category, {
          category: category,
          br: br
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SiteUrl, {
          siteUrl: siteUrl
        })]
      })
    })]
  });
};

var _default = StationDescr;
exports["default"] = _default;
//# sourceMappingURL=StationDescr.js.map