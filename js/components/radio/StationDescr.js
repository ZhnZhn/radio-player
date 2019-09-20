'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShowHide = require('../zhn/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var _kbps = br ? ' (' + br + ' Kbps)' : '';
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      { style: S.TITLE },
      'Category:'
    ),
    '\xA0',
    _react2.default.createElement(
      'span',
      { style: S.CATEGORY },
      _toFirstUpperCase(category),
      _kbps
    )
  );
};

var SiteUrl = function SiteUrl(_ref2) {
  var siteUrl = _ref2.siteUrl;

  if (!siteUrl) return null;
  return _react2.default.createElement(
    'a',
    { href: siteUrl,
      style: S.LINK,
      target: '_blank',
      rel: 'noreferrer noopener'
    },
    siteUrl
  );
};

var StationDescr = function StationDescr(_ref3) {
  var station = _ref3.station;

  if (!station) {
    return null;
  }

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      isMore = _useState2[0],
      setMore = _useState2[1],
      _onClick = function _onClick() {
    return setMore(function (isMore) {
      return !isMore;
    });
  },
      _arrowStyle = isMore ? S.ARROW_OPEN : void 0,
      siteUrl = station.siteUrl,
      category = station.category,
      br = station.br;

  return _react2.default.createElement(
    'div',
    { className: CL.DESCR },
    _react2.default.createElement(
      'button',
      {
        className: CL.DESCR_BT,
        onClick: _onClick
      },
      _react2.default.createElement(
        'span',
        null,
        station.title
      ),
      _react2.default.createElement(
        'span',
        { className: CL.BT_MORE, style: _arrowStyle },
        '>'
      )
    ),
    _react2.default.createElement(
      _ShowHide2.default,
      { className: CL.INFO, isShow: isMore },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Category, { category: category, br: br }),
        _react2.default.createElement(SiteUrl, { siteUrl: siteUrl })
      )
    )
  );
};

exports.default = StationDescr;
//# sourceMappingURL=StationDescr.js.map