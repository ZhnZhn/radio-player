"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

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
    fontSize: '17px'
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

  return _react["default"].createElement("div", null, _react["default"].createElement("span", {
    style: S.TITLE
  }, "Category:"), "\xA0", _react["default"].createElement("span", {
    style: S.CATEGORY
  }, _toFirstUpperCase(category), _kbps));
};

var SiteUrl = function SiteUrl(_ref2) {
  var siteUrl = _ref2.siteUrl;
  if (!siteUrl) return null;
  return _react["default"].createElement("a", {
    href: siteUrl,
    style: S.LINK,
    target: "_blank",
    rel: "noreferrer noopener"
  }, siteUrl);
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

  return _react["default"].createElement("div", {
    className: CL.DESCR
  }, _react["default"].createElement("button", {
    className: CL.DESCR_BT,
    onClick: _onClick
  }, _react["default"].createElement("span", null, title), _react["default"].createElement(_StationProtocol["default"], {
    src: src
  }), _react["default"].createElement("span", {
    className: CL.BT_MORE,
    style: _arrowStyle
  }, ">")), _react["default"].createElement(_ShowHide["default"], {
    className: CL.INFO,
    isShow: isMore
  }, _react["default"].createElement("div", null, _react["default"].createElement(Category, {
    category: category,
    br: br
  }), _react["default"].createElement(SiteUrl, {
    siteUrl: siteUrl
  }))));
};

var _default = StationDescr;
exports["default"] = _default;
//# sourceMappingURL=StationDescr.js.map